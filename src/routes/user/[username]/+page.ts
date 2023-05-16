import { error } from '@sveltejs/kit';
import { PUBLIC_CDN } from '$env/static/public';

export const prerender = true;

export const load = async ({ fetch, params }) => {
	const get = await fetch(`${PUBLIC_CDN}/user/${params.username}.json`);

	if (!get.ok) {
		throw error(get.status, get.statusText);
	}

	return {
		...(await get.json())
	};
};
