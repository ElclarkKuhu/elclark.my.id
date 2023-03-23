import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ cookies }) => {
	const token = cookies.get('session');

	if (!token) {
		throw error(401, 'Unauthorized');
	}

	const res = await fetch('https://api.elclark.my.id/v1/editor/', {
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
