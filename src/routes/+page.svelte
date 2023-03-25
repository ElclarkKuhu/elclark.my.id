<script lang="ts">
	import Meta from '$lib/components/meta.svelte';
	import Header from '$lib/components/header.svelte';
	import About from '$lib/components/cards/about.svelte';
	import Posts from '$lib/components/posts.svelte';
	import Footer from '$lib/components/footer.svelte';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

<article>
	<Meta
		image="https://elclark.my.id/images/elclark.png"
		keywords={['landing', 'home', 'homepage']}
	/>

	<Header />

	<About />

	<Posts posts={data.posts} />

	<a href="/blog">More Posts</a>

	<Footer />
</article>

<style>
	article {
		max-width: 480px;
		margin: 0 auto;
	}

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
