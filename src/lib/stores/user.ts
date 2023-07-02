import { writable } from 'svelte/store'
import { browser } from '$app/environment'

const store = writable(null as Data.User | null, () => {
	check()
})

const set = (user: Data.User, expiration: number) => {
	if (!user.avatar) {
		const avatarUrl = new URL('https://ui-avatars.com/api/')
		avatarUrl.searchParams.set('name', user.name)
		avatarUrl.searchParams.set('bold', 'true')
		avatarUrl.searchParams.set('background', 'ffb3b3')
		avatarUrl.searchParams.set('color', '5f131b')
		avatarUrl.searchParams.set('font-size', '0.5')

		user.avatar = avatarUrl.href
	}

	store.set(user)

	localStorage.setItem('user', JSON.stringify(user))
	localStorage.setItem('expiration', String(expiration))
}

const check = async () => {
	if (browser) {
		const localUser = localStorage.getItem('user')
		const localExpiration = localStorage.getItem('expiration')

		if (localUser && localExpiration) {
			const expiration = Number(localExpiration)

			if (Date.now() < expiration) {
				const user = JSON.parse(localUser) as Data.User
				set(user, expiration)
				return user
			} else {
				localStorage.removeItem('user')
				localStorage.removeItem('expiration')

				return null
			}
		}

		const response = await fetch('/api/auth/check')
		if (response.ok) {
			const data = await response.json()

			if (data.user) {
				set(data.user, data.expiration)
				return data.user
			}
		}
	}

	return null
}

const signout = async () => {
	if (browser) {
		store.set(null)

		localStorage.removeItem('user')
		localStorage.removeItem('expiration')

		const redirect_uri = window.location.pathname
		const signoutUrl = new URL('/signout', window.location.origin)
		signoutUrl.searchParams.set('redirect_uri', redirect_uri)

		window.location.href = signoutUrl.href
	}
}

export const user = {
	subscribe: store.subscribe,
	check,
	signout
}
