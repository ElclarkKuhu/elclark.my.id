<!-- LIST OF BLOGS THAT YOU HAVE ACCESS TO -->
<script lang="ts">
	import Posts from '../../components/posts.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Posts posts={data.posts} />
