import { error } from '@sveltejs/kit';
import { PUBLIC_CDN } from '$env/static/public';

const limit = 5;

export const load = async ({ fetch }) => {
	const res = await fetch(`${PUBLIC_CDN}/posts.json`);

	if (!res.ok) {
		throw error(res.status, res.statusText);
	}

	const blogs = await res.json();

	for (let i = 0; i < blogs.length; i++) {
		const blog = blogs[i];

		const getAuthorData = await fetch(`${PUBLIC_CDN}/user/${blog.author}.json`);

		if (!getAuthorData.ok) {
			throw error(getAuthorData.status, getAuthorData.statusText);
		}

		const author = await getAuthorData.json();

		blog.author = author;

		if (i >= limit) {
			blogs.splice(blogs.indexOf(blog), 1);
		}
	}

	return {
		blogs
	};
};
