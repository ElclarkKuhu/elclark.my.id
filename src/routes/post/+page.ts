import { error } from '@sveltejs/kit';
import { PUBLIC_CDN } from '$env/static/public';

export const prerender = true;

export const load = async ({ fetch }) => {
	const res = await fetch(`${PUBLIC_CDN}/posts.json`);

	if (!res.ok) {
		throw error(res.status, res.statusText);
	}

	const blogs = await res.json();

	for (const blog of blogs) {
		const getAuthorData = await fetch(`${PUBLIC_CDN}/user/${blog.author}.json`);

		if (!getAuthorData.ok) {
			throw error(getAuthorData.status, getAuthorData.statusText);
		}

		const author = await getAuthorData.json();

		blog.author = author;
	}

	return {
		blogs
	};
};
