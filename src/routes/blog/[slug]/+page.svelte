<!-- BLOG PAGE -->
<script lang="ts">
	import { format, relative } from '$lib/date';
	import { onDestroy } from 'svelte';

	import Meta from '$lib/components/meta.svelte';

	import type { PageData } from './$types';

	export let data: PageData;

	let updatedFormat: string = 'hh:mm aa';
	let dateStr: string = relative(data.date);
	let updatedStr: string = `${relative(data.updated)} at ${format(data.updated, updatedFormat)}`;

	const interval = setInterval(() => {
		dateStr = relative(data.date);
		updatedStr = `${relative(data.updated)} at ${format(data.updated, updatedFormat)}`;
	}, 1000);

	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<Meta image={data.featuredImage} title={`Elclark - ${data.title}`} keywords={['blog']} />

<h1>
	{data.title}
</h1>

<p>
	Published {dateStr} by
	<!-- {`https://account.elclark.my.id/user/${data.author.username}`} -->
	<a href="/">{data.author.name}</a>

	{#if updatedStr}
		&bull; Updated {updatedStr}
	{/if}
</p>

{#if data.featuredImage}
	<img src={data.featuredImage} alt={data.title} />
{/if}

<article>
	{#if data.content}
		{@html data.content}
	{/if}
</article>

<style>
	:global(img) {
		max-width: 100%;
		border-radius: 1.5rem;
	}

	a {
		color: var(--md-sys-color-primary);
		font-weight: 500;
	}

	a:hover {
		text-decoration: underline;
	}
</style>
