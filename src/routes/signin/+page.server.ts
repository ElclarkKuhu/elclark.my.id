import { connect } from '@planetscale/database'
import { redirect } from '@sveltejs/kit'
import {
	DATABASE_HOST,
	DATABASE_USERNAME,
	DATABASE_PASSWORD,
	TOKEN_EXPIRATION
} from '$env/static/private'

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

export const load = async ({ url, cookies }) => {
	const token = cookies.get('token')

	if (token) {
		const connection = connect(config)
		const sessionQuery = await connection.execute('SELECT * FROM sessions WHERE token = ?', [token])

		if (sessionQuery.rows.length > 0) {
			const session = sessionQuery.rows[0] as Data.Session

			if (session.expires < Date.now()) {
				await connection.execute('DELETE FROM sessions WHERE token = ?', [session.token])

				cookies.delete('token')

				const userQuery = await connection.execute('SELECT * FROM users WHERE id = ?', [
					session.user_id
				])

				if (userQuery.rows.length > 0) {
					const user = userQuery.rows[0] as Data.User
					return {
						identifier: user.username
					}
				}
			}

			const redirect_uri = url.searchParams.get('redirect_uri')
			if (redirect_uri) {
				if (redirect_uri.startsWith('/')) {
					throw redirect(303, redirect_uri)
				}
			}

			throw redirect(303, '/')
		}

		cookies.delete('token')
	}

	return {}
}

export const actions = {
	default: async ({ url, request, cookies }) => {
		const form = await request.formData()

		const identifier = form.get('identifier') as string
		const password = form.get('password') as string

		if (!identifier || !password) {
			return {
				error: 'Missing username or password.',
				identifier: identifier ?? ''
			}
		}

		const identifierRegex = RegExp('^[a-zA-Z0-9-_.@]+$')
		if (!identifierRegex.test(identifier)) {
			console.log('Invalid identifier.')
			return {
				error: 'Invalid username or password.',
				identifier: identifier ?? ''
			}
		}

		const connection = connect(config)
		const userQuery = await connection.execute(
			'SELECT * FROM users WHERE username = ? OR email = ?',
			[identifier, identifier]
		)

		if (userQuery.rows.length === 0) {
			console.log('User not found.')
			return {
				error: 'Invalid username or password.',
				identifier: identifier ?? ''
			}
		}

		const user = userQuery.rows[0] as Data.User

		const encoder = new TextEncoder()
		const data = encoder.encode(password + user.salt)
		const hashBuffer = await crypto.subtle.digest('SHA-256', data)
		const hash = Array.from(new Uint8Array(hashBuffer))
			.map((b) => b.toString(16).padStart(2, '0'))
			.join('')

		if (user.password !== hash) {
			console.log('Invalid password.')
			console.log(user.password, hash)

			return {
				error: 'Invalid username or password.',
				identifier: identifier ?? ''
			}
		}

		const now = Date.now()
		const token = crypto.randomUUID()
		const expires = now + Number(TOKEN_EXPIRATION)

		await connection.execute(
			'INSERT INTO sessions (user_id, token, created, expires) VALUES (?, ?, ?, ?)',
			[user.id, token, now, expires]
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
