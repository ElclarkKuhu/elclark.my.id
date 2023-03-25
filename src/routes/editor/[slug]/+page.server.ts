import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ fetch, params, cookies }) => {
	const { slug } = params;
	const token = cookies.get('session');

	if (!slug) {
		throw error(404, 'Not found');
	}

	if (!token) {
		throw error(401, 'Unauthorized');
	}

	const res = await fetch(`https://api.elclark.my.id/v1/blog/${slug}`, {
		headers: {
			Authorization: `Bearer ${token}`
		}
	});

	if (!res.ok) {
		throw error(res.status, res.statusText);
	}

	const data = await res.json();

	return {
		...data
	};
}) satisfies PageServerLoad;
