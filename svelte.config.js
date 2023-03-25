import fetch from 'node-fetch';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

let posts = await fetch('https://api.elclark.my.id/v1/blog');
posts = await posts.json();

const postsSlugs = posts.posts.map((post) => `/blog/${post.slug}`);

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		version: {
			name: process.env.npm_package_version
		},
		prerender: {
			entries: ['/', '/about', '/blog', ...postsSlugs]
		}
	}
};

export default config;
