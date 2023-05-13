import { error } from '@sveltejs/kit';
import { PUBLIC_CDN } from '$env/static/public';

export const prerender = true;

export const load = async ({ fetch, params }) => {
	const get = await fetch(`${PUBLIC_CDN}/post/${params.slug}.json`);

	if (!get.ok) {
		throw error(get.status, get.statusText);
	}

	const post = await get.json();

	const getAuthorData = await fetch(`${PUBLIC_CDN}/user/${post.author}.json`);

	if (!getAuthorData.ok) {
		throw error(getAuthorData.status, getAuthorData.statusText);
	}

	const author = await getAuthorData.json();

	post.author = author;

	return {
		...post
	};
};
