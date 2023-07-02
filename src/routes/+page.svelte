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
	<Card />
	<Footer />
</main>

<style>
	main {
		padding: 0 0.5rem;
	}
</style>
