import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const ssr = false;
export const prerender = true;

export const load = (async ({ fetch }) => {
	const res = await fetch('https://api.elclark.my.id/v1/blog');

	if (!res.ok) {
		throw error(res.status, res.statusText);
	}

	const data = await res.json();

	return {
		...data
	};
}) satisfies PageLoad;
