<script lang="ts">
	import '../app.css';

	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';

	import Loading from '$lib/components/loading.svelte';
</script>

<Loading />
{#key $page.url.pathname}
	<div in:fade class="container">
		<slot />
	</div>
{/key}

<style>
	.container {
		max-width: 480px;
		margin: 0 auto;
		padding: 0 0.5rem;
	}

	@media (min-width: 480px) {
		.container {
			padding: 0 1rem;
		}
	}

	@media (min-width: 768px) {
		.container {
			max-width: 720px;
		}
	}

	/* @media (min-width: 1024px) {
		.container {
			max-width: 960px;
		}
	} */
</style>
