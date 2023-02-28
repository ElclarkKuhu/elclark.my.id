<script lang="ts">
	import Meta from '../components/meta.svelte';
	import Header from '../components/header.svelte';
	import About from '../components/cards/about.svelte';
	import Blog from '../components/cards/blog.svelte';
</script>

<Meta image="https://elclark.my.id/images/elclark.png" keywords={['landing', 'home', 'homepage']} />

<Header />

<About />

<Blog />

<footer>Copyright &copy; 2023 Elclark</footer>

<style>
	footer {
		text-align: center;
	}
</style>
