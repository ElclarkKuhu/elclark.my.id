import type { PageLoad } from './$types';

export const load = (async () => {
	const res = await fetch('https://api.elclark.my.id/v1/blog');

	if (!res.ok) {
		return {
			status: res.status,
			error: await res.text()
		};
	}

	const data = await res.json();

	return {
		status: res.status,
		data
	};
}) satisfies PageLoad;
