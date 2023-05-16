<!-- LIST OF THE LATEST BLOG (AND SEARCH + FILTER LATER) -->
<script lang="ts">
	import Posts from '$lib/components/posts.svelte';

	export let data;
</script>

<Posts posts={data.blogs} />
