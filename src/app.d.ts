// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types

declare namespace App {
	// interface Error {}
	// interface Locals {}
	interface PageData {
		data: Post;
	}
	// interface Platform {}

	interface Post {
		title: string;
		featuredImage?: string;
		author: User;
		date: string;
		slug: string;
		updated?: string;
		content?: string;
		visibility: string;
	}

	interface User {
		username: string;
		email: string;
		verified: boolean;
		displayName: string;
		profile: string;
		created: string;
		updated?: string;
		banned: boolean;
		role: string;
	}
}
