<script lang="ts">
	import Meta from '$lib/components/meta.svelte';
	import Header from '$lib/components/header.svelte';
	import About from '$lib/components/cards/about.svelte';
	import Posts from '$lib/components/posts.svelte';
	import Footer from '$lib/components/footer.svelte';

	export let data;
</script>

<article>
	<Meta
		image="https://elclark.my.id/images/elclark.png"
		keywords={['landing', 'home', 'homepage']}
	/>

	<Header />
	<About />
	<Posts posts={data.blogs} />

	{#if data.blogs.length > 4}
		<a href="/post">More Posts</a>
	{/if}

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
		background-color: var(--color-surface-1);
	}

	a:hover {
		background-color: var(--color-surface-3);
	}

	a:active {
		background-color: var(--color-surface-2);
	}
</style>
