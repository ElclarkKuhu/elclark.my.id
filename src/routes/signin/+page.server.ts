import { redirect } from '@sveltejs/kit'
import { connect } from '@planetscale/database'

import validate from '$lib/validations'

import {
	DATABASE_HOST,
	DATABASE_USERNAME,
	DATABASE_PASSWORD,
	TOKEN_EXPIRATION
} from '$env/static/private'

import type { PageServerLoad, Actions } from './$types'

const config = {
	host: DATABASE_HOST,
	username: DATABASE_USERNAME,
	password: DATABASE_PASSWORD,
	fetch: (url: RequestInfo | URL, init: RequestInit | undefined) => {
		if (init) {
			delete init['cache']
		}
		return fetch(url, init)
	}
}

export const load: PageServerLoad = async ({ url, cookies }) => {
	const token = cookies.get('token')
	const expiration = cookies.get('expiration')

	if (token) {
		const connection = connect(config)

		if (expiration) {
			const expires = Number(expiration)

			if (expires < Date.now()) {
				cookies.delete('token')
				cookies.delete('expiration')
				await connection.execute('DELETE FROM sessions WHERE token = ?', [token])

				return {}
			}
		}

		const check = await validate.auth.session(connection, token)

		if (check.valid) {
			const session = check.session as Data.Session
			const maxAge = session.expires - Date.now()

			cookies.set('token', token, {
				maxAge,
				path: '/'
			})

			cookies.set('expiration', session.expires.toString(), {
				maxAge,
				httpOnly: false,
				path: '/'
			})

			const redirect_uri = url.searchParams.get('redirect_uri')
			if (redirect_uri) {
				if (redirect_uri.startsWith('/')) {
					throw redirect(303, redirect_uri)
				}
			}

			throw redirect(303, '/')
		} else if (check.user_id) {
			const userQuery = await connection.execute('SELECT username FROM users WHERE id = ?', [
				check.user_id
			])

			const userRow = userQuery.rows[0] as { username: string }
			const username = userRow.username

			return {
				identifier: username
			}
		}
	}

	cookies.delete('token')
	cookies.delete('expiration')

	return {}
}

export const actions: Actions = {
	default: async ({ url, request, cookies, getClientAddress }) => {
		const form = await request.formData()

		const identifier = form.get('identifier') as string
		const password = form.get('password') as string

		if (!identifier || !password) {
			return {
				error: 'Missing username or password.',
				identifier: identifier ?? ''
			}
		}

		if (!validate.input.identifier(identifier)) {
			return {
				error: 'Invalid username or password.',
				identifier: identifier ?? ''
			}
		}

		const connection = connect(config)
		const user = await validate.auth.user(connection, identifier, password)

		if (!user) {
			return {
				error: 'Invalid username or password.',
				identifier: identifier ?? ''
			}
		}

		const now = Date.now()
		const token = crypto.randomUUID()
		const expires = now + Number(TOKEN_EXPIRATION)

		const newSessionQuery =
			'INSERT INTO sessions (user_id, token, created, expires) VALUES (?, ?, ?, ?)'
		const newSession = connection.execute(newSessionQuery, [user.id, token, now, expires])

		const ip = request.headers.get('CF-Connecting-IP') ?? getClientAddress()
		const newActivityQuery = 'INSERT INTO activities (ip, user_id, type, time) VALUES (?, ?, ?, ?)'
		const newActivity = await connection.execute(newActivityQuery, [ip, user.id, 1, Date.now()])

		await Promise.all([newSession, newActivity])

		cookies.set('token', token, {
			maxAge: Number(TOKEN_EXPIRATION),
			path: '/'
		})

		cookies.set('expiration', expires.toString(), {
			httpOnly: false,
			maxAge: Number(TOKEN_EXPIRATION),
			path: '/'
		})

		const redirect_uri = url.searchParams.get('redirect_uri')
		if (redirect_uri) {
			if (redirect_uri.startsWith('/')) {
				throw redirect(303, redirect_uri)
			}
		}

		throw redirect(303, '/')
	}
}
