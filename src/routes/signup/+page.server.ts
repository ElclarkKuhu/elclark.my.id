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
		if (expiration) {
			const expires = Number(expiration)

			if (expires < Date.now()) {
				cookies.delete('token')
				cookies.delete('expiration')

				return {}
			}
		}

		const connection = connect(config)
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

		const name = form.get('name') as string
		const email = form.get('email') as string
		const username = form.get('username') as string
		const password = form.get('password') as string

		if (!name || !email || !username || !password) {
			return {
				error: 'Please fill out all fields',
				name: name || '',
				email: email || '',
				username: username || ''
			}
		}

		if (!validate.input.username(username)) {
			return {
				error: 'Please enter a valid username',
				name: name || '',
				email: email || '',
				username: username || ''
			}
		}

		if (!validate.input.email(email)) {
			return {
				error: 'Please enter a valid email address',
				name: name || '',
				email: email || '',
				username: username || ''
			}
		}

		const connection = connect(config)
		const userQuery = await connection.execute(
			'SELECT * FROM users WHERE username = ? OR email = ?',
			[username, email]
		)

		if (userQuery.rows.length > 0) {
			return {
				error: 'Username or email already exists',
				name: name || '',
				email: email || '',
				username: username || ''
			}
		}

		if (!validate.input.name(password)) {
			return {
				error: 'Please enter a valid name',
				name: name || '',
				email: email || '',
				username: username || ''
			}
		}

		if (!validate.input.password(password)) {
			return {
				error: 'Please enter a valid password',
				name: name || '',
				email: email || '',
				username: username || ''
			}
		}

		const now = Date.now()
		const salt = crypto.randomUUID()

		const encoder = new TextEncoder()
		const data = encoder.encode(password + salt)
		const hashBuffer = await crypto.subtle.digest({ name: 'SHA-256' }, data)
		const hash = Array.from(new Uint8Array(hashBuffer))
			.map((b) => b.toString(16).padStart(2, '0'))
			.join('')

		const newUserQuery = await connection.execute(
			'INSERT INTO users (username, name, password, email, joined, updated, salt) VALUES (?, ?, ?, ?, ?, ?, ?)',
			[username, name, hash, email, now, now, salt]
		)

		const token = crypto.randomUUID()
		await connection.execute(
			'INSERT INTO sessions (user_id, token, created, expires) VALUES (?, ?, ?, ?)',
			[newUserQuery.insertId, token, now, now + Number(TOKEN_EXPIRATION)]
		)

		const ip = request.headers.get('CF-Connecting-IP') ?? getClientAddress()
		await connection.execute(
			'INSERT INTO activities (ip, user_id, type, time) VALUES (?, ?, ?, ?)',
			[ip, newUserQuery.insertId, 3, Date.now()]
		)

		cookies.set('token', token, {
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
