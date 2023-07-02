import { connect } from '@planetscale/database'
import { DATABASE_HOST, DATABASE_USERNAME, DATABASE_PASSWORD } from '$env/static/private'

export const GET = async ({ cookies }) => {
	const token = cookies.get('token')

	if (token) {
		const connection = connect({
			host: DATABASE_HOST,
			username: DATABASE_USERNAME,
			password: DATABASE_PASSWORD
		})

		const sessionQuery = await connection.execute('SELECT * FROM sessions WHERE token = ?', [token])

		if (sessionQuery.rows.length > 0) {
			const session = sessionQuery.rows[0] as Data.Session

			if (session.expires < Date.now()) {
				return new Response('unauthorized', {
					status: 401
				})
			}

			const userQuery = await connection.execute('SELECT * FROM users WHERE id = ?', [
				session.user_id
			])

			if (userQuery.rows.length > 0) {
				const user = userQuery.rows[0] as Data.User

				delete user.password
				delete user.salt

				return new Response(JSON.stringify(user), {
					status: 200
				})
			}

			return new Response('Not Found', {
				status: 404
			})
		}
	}

	return new Response('unauthorized', {
		status: 401
	})
}
