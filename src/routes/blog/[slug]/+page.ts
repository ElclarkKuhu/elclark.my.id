import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	const res = await fetch(`https://api.elclark.my.id/v1/blog/${params.slug}`);

	if (!res.ok) {
		return {
			status: res.status,
			error: await res.json()
		};
	}

	const data = await res.json();

	return {
		status: res.status,
		data
	};
}) satisfies PageLoad;
