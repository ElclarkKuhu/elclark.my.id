// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

declare namespace App {
	// interface Error {}
	// interface Locals {}
	// interface PageData {}
	// interface Platform {}
}

declare namespace Data {
	interface User {
		id: number
		username: string
		name: string
		email: string
		avatar?: string
		title: string
		about: string
		verified: boolean
		role: number
		joined: number
		updated: number
		password?: string
		deleted: boolean
		salt?: string
	}

	interface Role {
		id: number
		name: string
		description: string
	}

	// Roles:
	// 1, banned, Banned user of the site, has no access to any features
	// 2, user, Regular user of the site, has access to basic features
	// 3, moderator, Moderator of the site, has access to moderation tools
	// 4, editor, Editor of the site, has access to editing and publishing tools, also has access to moderation tools
	// 5, admin, Administrator of the site, has access to everything

	interface Session {
		id: number
		user_id: number
		token: string
		created: number
		expires: number
	}

	interface Activity {
		id: number
		ip: string
		user_id: number
		type: number
		target: number
		time: number
	}

	interface ActivityType {
		id: number
		name: string
		description: string
	}

	// Activity types:
	// 1, signin, User signed in
	// 2, signout, User signed out
	// 3, signup, User signed up
	// 4, verify, User verified their email
	// 5, forgot, User requested a password reset
	// 6, reset, User reset their password
	// 7, update, User updated their profile
	// 8, delete, User deleted their account
	// 9, ban, User was banned
	// 10, unban, User was unbanned
	// 11, publish, User published a blog
	// 12, unpublish, User unpublished a blog
	// 13, comment, User commented on a blog
}
