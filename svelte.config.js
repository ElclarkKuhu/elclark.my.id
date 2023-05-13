import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

import dotenv from 'dotenv';
dotenv.config();

const cdn = process.env.PUBLIC_CDN;

import fetch from 'node-fetch';
let posts = await fetch(`${cdn}/posts.json`).then((res) => res.json());
posts = posts.map((post) => `/post/${post.slug}`);

/** @type {import('@sveltejs/kit').Config} **/
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
			entries: ['/', '/about', '/post', ...posts]
		}
	}
};

export default config;
