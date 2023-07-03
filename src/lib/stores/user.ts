import { browser } from '$app/environment'
import { writable } from 'svelte/store'

const store = writable(null as Data.User | null, () => {
	check()
})

const check = () => {
	if (browser) {
		store.update((user) => {
			const expiration = getExpiration()

			if (!user && expiration) {
				if (expiration < Date.now()) {
					localStorage.removeItem('user')
					window.location.href = '/signin'

					return null
				}

				const localUser = localStorage.getItem('user')

				if (localUser) {
					return JSON.parse(localUser) as Data.User
				}

				const xhr = new XMLHttpRequest()
				xhr.open('GET', '/api/auth/check', false)
				xhr.send()

				if (xhr.status >= 200 && xhr.status < 300) {
					const data = JSON.parse(xhr.responseText)

					if (data.user) {
						localStorage.setItem('user', JSON.stringify(data.user))
						return data.user
					} else {
						localStorage.removeItem('user')
						document.cookie = 'expiration=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'

						return null
					}
				}
			}

			return user
		})
	}
}

const signout = async () => {
	if (browser) {
		store.set(null)

		localStorage.removeItem('user')

		const redirect_uri = window.location.pathname
		const signoutUrl = new URL('/signout', window.location.origin)
		signoutUrl.searchParams.set('redirect_uri', redirect_uri)

		window.location.href = signoutUrl.href
	}
}

function getExpiration() {
	const cookies = document.cookie.split(';')
	const expirationCookie = cookies.find((cookie) => cookie.trim().startsWith('expiration='))

	if (expirationCookie) {
		return Number(expirationCookie.split('=')[1])
	}

	return null
}

export function getAvatar(user: Data.User) {
	if (!user.avatar) {
		const avatarUrl = new URL('https://ui-avatars.com/api/')
		avatarUrl.searchParams.set('name', user.name)
		avatarUrl.searchParams.set('bold', 'true')
		avatarUrl.searchParams.set('background', 'ffb3b3')
		avatarUrl.searchParams.set('color', '5f131b')
		avatarUrl.searchParams.set('font-size', '0.5')

		return avatarUrl.href
	}

	return user.avatar
}

export const user = {
	subscribe: store.subscribe,
	check,
	signout
}
