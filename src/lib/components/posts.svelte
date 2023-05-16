<script lang="ts">
	import Blog from './cards/blog.svelte';

	export let posts: any[];
</script>

{#if posts}
	{#each posts as post}
		<Blog {...post} />
	{/each}
{/if}
