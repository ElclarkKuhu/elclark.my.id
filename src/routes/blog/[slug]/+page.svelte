<!-- BLOG PAGE -->
<script lang="ts">
	import Meta from '$lib/components/meta.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Meta image={data.featuredImage} keywords={['blog']} />

<h1>
	{data.title}
</h1>

{#if data.featuredImage}
	<img src={data.featuredImage} alt={data.title} />
{/if}

<article>
	{#if data.content}
		{@html data.content}
	{/if}
</article>
