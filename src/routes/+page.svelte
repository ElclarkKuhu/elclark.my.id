<script lang="ts">
	import Meta from '$lib/components/meta.svelte'

	import Header from './header.svelte'
	import Card from './about.svelte'
	import Footer from '$lib/components/footer.svelte'
</script>

<Meta
	image="https://static.elclark.my.id/image/elclark.webp"
	keywords={['landing', 'home', 'homepage']}
/>

<main class="container">
	<Header />
	<noscript>
		<span class="noscript font-500">
			This website requires JavaScript to run properly. Some features may not work if JavaScript is
			disabled. Please enable JavaScript to continue.
		</span>
	</noscript>
	<Card />
	<Footer />
</main>

<style>
	main {
		padding: 0 0.5rem;
	}

	.noscript {
		display: block;

		margin: 0.5rem 0;
		padding: 0.5rem;
		text-align: center;

		color: var(--color-on-error);
		background-color: var(--color-error);

		border-radius: 0.5rem;
	}
</style>
