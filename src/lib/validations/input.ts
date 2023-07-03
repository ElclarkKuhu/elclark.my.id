export const identifier = (identifier: string) => {
	if (identifier.length < 3 || identifier.length > 320) return false

	const regex = new RegExp('^[a-zA-Z0-9-_.@]+$')
	if (!regex.test(identifier)) return false

	return true
}

export const email = (email: string) => {
	if (identifier.length < 3 || identifier.length > 320) return false

	const regex = new RegExp('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')
	if (regex.test(email)) return true

	return false
}

export const username = (username: string) => {
	if (username.length < 3 || username.length > 32) return false

	const regex = new RegExp('^[a-zA-Z0-9_]+$')
	if (regex.test(username)) return true

	return false
}

export const name = (name: string) => {
	if (name.length < 3 || name.length > 64) return false
	return true
}

export const password = (password: string) => {
	if (password.length < 8 || password.length > 64) return false
	return true
}

export default {
	name,
	email,
	username,
	password,
	identifier
}
