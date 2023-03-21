import type { PageLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const ssr = false;
export const prerender = false;

export const load = (async () => {
	const res = await fetch('https://api.elclark.my.id/v1/editor', {
		credentials: 'include'
	});

	console.log('running');

	if (!res.ok) {
		if (res.status === 401) {
			throw redirect(302, 'https://auth.elclark.my.id/');
		}

		return {
			status: res.status,
			error: await res.text()
		};
	}

	const data = await res.json();
	console.log(data);

	return {
		status: res.status,
		data
	};
}) satisfies PageLoad;
