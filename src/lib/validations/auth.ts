import type { Connection } from '@planetscale/database'

export const session = async (connection: Connection, token: string) => {
	const sessionQuery = await connection.execute('SELECT * FROM sessions WHERE token = ?', [token])

	if (sessionQuery.rows.length > 0) {
		const session = sessionQuery.rows[0] as Data.Session

		if (session.expires < Date.now()) {
			return {
				valid: false,
				user_id: session.user_id
			}
		}

		return {
			valid: true,
			session
		}
	}

	return {
		valid: false
	}
}

export const user = async (connection: Connection, identifier: string, password: string) => {
	const userQuery = await connection.execute(
		'SELECT * FROM users WHERE username = ? OR email = ?',
		[identifier, identifier]
	)

	if (userQuery.rows.length > 0) {
		const user = userQuery.rows[0] as Data.User

		const encoder = new TextEncoder()
		const data = encoder.encode(password + user.salt)
		const hashBuffer = await crypto.subtle.digest('SHA-256', data)
		const hash = Array.from(new Uint8Array(hashBuffer))
			.map((b) => b.toString(16).padStart(2, '0'))
			.join('')

		if (user.password === hash) {
			return user
		}
	}

	return false
}

export default {
	session,
	user
}
