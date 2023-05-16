import { error } from '@sveltejs/kit';
import { PUBLIC_CDN } from '$env/static/public';

export const load = async ({ fetch }) => {
	const res = await fetch(`${PUBLIC_CDN}/posts.5.json`);

	if (!res.ok) {
		throw error(res.status, res.statusText);
	}

	const blogs = await res.json();
	const authors: any[] = [];

	for (let i = 0; i < blogs.length; i++) {
		const blog = blogs[i];

		let author = authors.find((author) => author === blog.author);
		if (author) {
			blog.author = author;
			continue;
		}

		const getAuthorData = await fetch(`${PUBLIC_CDN}/user/${blog.author}.json`);

		if (!getAuthorData.ok) {
			throw error(getAuthorData.status, getAuthorData.statusText);
		}

		author = await getAuthorData.json();
		blog.author = author;
	}

	return {
		blogs
	};
};
