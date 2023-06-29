<script lang="ts">
	import Meta from '$lib/components/meta.svelte';

	import Header from './header.svelte';
	import Card from './about.svelte';
	import Footer from '$lib/components/footer.svelte';
</script>

<Meta
	image="https://static.elclark.my.id/image/elclark.webp"
	keywords={['landing', 'home', 'homepage']}
/>

<Header />

<main class="container">
	<Card />
</main>

<Footer />
