<script lang="ts">
	import Meta from '../components/meta.svelte';
	import Badge from './badge.svelte';

	import Button from '../components/button.svelte';
	import Separator from '../components/separator.svelte';

	import Card from '../components/card.svelte';
</script>

<Meta image="https://elclark.my.id/images/elclark.png" keywords={['landing', 'home', 'homepage']} />

<div class="container">
	<main>
		<Badge />

		<p class="about">
			I'm a Software Engineer, UI/UX designer and System administration. I love learning and trying
			new things. I'm also passionate about technology, science, music, and gaming.
		</p>

		<Separator />

		<div class="buttons">
			<Button href="contact">Contact</Button>
			<Button href="socials" color="filled-tonal">Socials</Button>
		</div>

		<div class="cards">
			<Card />
		</div>
	</main>
</div>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.about {
		margin: 0.5rem 0;
		text-align: center;
		font-size: 1.125rem;
		line-height: 1.2rem;

		padding: 0 1.5rem;
	}

	p {
		font-size: 1rem;
		margin: 0;
	}

	.buttons {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		max-width: 21rem;
		margin: 0.5rem 0;
	}

	.cards {
		margin: 1rem 0;
	}
</style>
