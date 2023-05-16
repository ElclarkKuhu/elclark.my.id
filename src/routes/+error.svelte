<script lang="ts">
	import { page } from '$app/stores';

	let status = $page.status;
	let error = $page.error?.message;
</script>

<svelte:head>
	<title>{status} {error}</title>
</svelte:head>

<div class="container">
	<main>
		<h1>Something went wrong!</h1>
		<p><code>{error} ({status})</code></p>
		<a href="/">Go Home</a>
	</main>
</div>

<style>
	main {
		padding: 1.25rem;
	}
</style>
