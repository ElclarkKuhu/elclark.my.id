<script lang="ts">
	import '../app.css';

	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';

	import Loading from '../components/loading.svelte';
</script>

<Loading />
{#key $page.url.pathname}
	<div in:fade class="container">
		<slot />
	</div>
{/key}
