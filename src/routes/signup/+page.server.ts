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
				await connection.execute('DELETE FROM session WHERE token = ?', [session.token])

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
	}

	return {}
}

export const actions = {
	default: async ({ url, request, cookies }) => {
		try {
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

			if (email.length < 5 || email.length > 320) {
				return {
					error: 'Please enter a valid email',
					name: name || '',
					email: email || '',
					username: username || ''
				}
			}

			const emailRegex = new RegExp('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')
			if (!emailRegex.test(email)) {
				return {
					error: 'Please enter a valid email',
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

			if (name.length < 3 || name.length > 64) {
				return {
					error: 'Name must be between 3 and 64 characters',
					name: name || '',
					email: email || '',
					username: username || ''
				}
			}

			const usernameRegex = new RegExp('^[a-zA-Z0-9_]+$')
			if (!usernameRegex.test(username)) {
				return {
					error: 'Username can only contain alphanumeric characters and underscores',
					name: name || '',
					email: email || '',
					username: username || ''
				}
			}

			if (username.length < 3 || username.length > 32) {
				return {
					error: 'Username must be between 3 and 32 characters',
					name: name || '',
					email: email || '',
					username: username || ''
				}
			}

			if (password.length < 8 || password.length > 64) {
				return {
					error: 'Password must be between 8 and 64 characters',
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

			console.log(name, username, hash, email, now, now, salt)
			const newUserQuery = await connection.execute(
				'INSERT INTO users (username, name, password, email, joined, updated, salt) VALUES (?, ?, ?, ?, ?, ?, ?)',
				[username, name, hash, email, now, now, salt]
			)

			const token = crypto.randomUUID()
			console.log(newUserQuery.insertId, token, now, now + Number(TOKEN_EXPIRATION))
			await connection.execute(
				'INSERT INTO sessions (user_id, token, created, expires) VALUES (?, ?, ?, ?)',
				[newUserQuery.insertId, token, now, now + Number(TOKEN_EXPIRATION)]
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
		} catch (error) {
			if (error instanceof Error) {
				return {
					error: error.message
				}
			}
		}
	}
}
