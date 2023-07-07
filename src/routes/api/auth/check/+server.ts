import { connect } from '@planetscale/database'
import { session as validate } from '$lib/validations/auth'
import { DATABASE_HOST, DATABASE_USERNAME, DATABASE_PASSWORD } from '$env/static/private'

import type { RequestHandler } from './$types'

export const GET: RequestHandler = async ({ cookies }) => {
	const token = cookies.get('token')

	if (token) {
		const connection = connect({
			host: DATABASE_HOST,
			username: DATABASE_USERNAME,
			password: DATABASE_PASSWORD,
			fetch: (url: RequestInfo | URL, init: RequestInit | undefined) => {
				if (init) {
					delete init['cache']
				}
				return fetch(url, init)
			}
		})

		const check = await validate(connection, token)

		if (check.valid) {
			const session = check.session as Data.Session

			const userQuery = await connection.execute('SELECT * FROM users WHERE id = ?', [
				session.user_id
			])

			if (userQuery.rows.length === 0) return new Response('Not Found', { status: 404 })

			const user = userQuery.rows[0] as Data.User
			delete user.password
			delete user.salt

			return new Response(
				JSON.stringify({
					user
				}),
				{
					status: 200,
					headers: {
						'Content-Type': 'application/json'
					}
				}
			)
		}
	}

	return new Response(
		JSON.stringify({
			user: undefined
		}),
		{
			status: 200,
			headers: {
				'Content-Type': 'application/json'
			}
		}
	)
}
