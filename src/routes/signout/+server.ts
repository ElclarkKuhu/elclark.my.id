import { redirect } from '@sveltejs/kit'

import { connect } from '@planetscale/database'
import { DATABASE_HOST, DATABASE_USERNAME, DATABASE_PASSWORD } from '$env/static/private'

import type { RequestHandler } from './$types'

export const GET: RequestHandler = async ({ request, url, cookies, getClientAddress }) => {
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

		const sessionQuery = await connection.execute('SELECT * FROM sessions WHERE token = ?', [token])

		if (sessionQuery.rows.length > 0) {
			const session = sessionQuery.rows[0] as Data.Session
			const ip = request.headers.get('CF-Connecting-IP') ?? getClientAddress()

			const newActivityQuery =
				'INSERT INTO activities (ip, user_id, type, time) VALUES (?, ?, ?, ?)'
			const newActivityParams = [ip, session.user_id, 2, Date.now()]
			const newActivity = await connection.execute(newActivityQuery, newActivityParams)

			const deleteSessionQuery = 'DELETE FROM sessions WHERE token = ?'
			const deleteSession = await connection.execute(deleteSessionQuery, [token])

			await Promise.all([newActivity, deleteSession])
		}

		cookies.delete('token')
	}

	const redirect_uri = url.searchParams.get('redirect_uri')
	if (redirect_uri) {
		if (redirect_uri.startsWith('/')) {
			throw redirect(303, redirect_uri)
		}
	}

	throw redirect(303, '/')
}
