<script lang="ts">
	import Meta from '../components/meta.svelte';
	import Header from '../components/header.svelte';
	import About from '../components/cards/about.svelte';
	import Posts from '../components/posts.svelte';
	import Footer from '../components/footer.svelte';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Meta image="https://elclark.my.id/images/elclark.png" keywords={['landing', 'home', 'homepage']} />

<Header />

<About />

<Posts posts={data.posts} />

<a href="/blog">More Posts</a>

<Footer />

<style>
	a {
		display: block;
		margin: 0 auto;

		text-align: center;

		padding: 1.5rem;
		border-radius: 1.5rem;

		width: 100%;

		font-size: 1.1rem;
		font-weight: 400;
		margin: 0.5rem auto;

		color: currentColor;
		background-color: var(--md-sys-color-surface-1);
	}

	a:hover {
		background-color: var(--md-sys-color-surface-3);
	}

	a:active {
		background-color: var(--md-sys-color-surface-2);
	}
</style>
