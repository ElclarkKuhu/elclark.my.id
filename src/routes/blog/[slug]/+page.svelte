<!-- BLOG PAGE -->
<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>
	{data.title}
</h1>

<article>
	{#if data.content}
		{@html data.content}
	{/if}
</article>
