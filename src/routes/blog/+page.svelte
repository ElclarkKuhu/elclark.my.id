<!-- LIST OF THE LATEST BLOG (AND SEARCH + FILTER LATER) -->
<script lang="ts">
	import Posts from '$lib/components/posts.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Posts posts={data.posts} />
