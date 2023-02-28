<script lang="ts">
	import '../app.css';

	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';

	import Loading from '../components/loading.svelte';

	import { onMount } from 'svelte';

	let height: string;

	onMount(() => {
		height = `${window.innerHeight - 1}px`;

		window.onresize = () => {
			height = `${window.innerHeight - 1}px`;
		};
	});
</script>

<Loading />
{#key $page.url.pathname}
	<div in:fade style:height>
		<slot />
	</div>
{/key}

<style>
	div {
		display: flex;

		height: 100%;
		height: 100vh;
	}
</style>
