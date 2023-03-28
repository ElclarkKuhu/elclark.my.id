<script lang="ts">
	import Blog from './cards/blog.svelte';

	export let posts: any[];
</script>

{#if posts}
	{#each posts as post}
		<Blog
			href={post.slug}
			title={post.title}
			date={post.date}
			author={post.author.name}
			image={post.featuredImage}
		/>
	{/each}
{/if}
