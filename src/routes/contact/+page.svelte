<script>
	import { page } from '$app/stores';

	import Meta from '../../components/meta.svelte';
	import Button from '../../components/button.svelte';

	import Badge from '../../components/badge.svelte';
</script>

<Meta
	path={$page.url.pathname}
	title="Elclark - Contact"
	image="https://elclark.my.id/images/elclark.png"
	keywords={['contact', 'email', 'message', 'telegram', 'whatsapp', 'discord']}
/>

<div class="container">
	<main>
		<Badge />
		<h1>Contact Me</h1>

		<p class="about">
			If you have any questions or want to get in touch, please feel free to contact me. I will get
			back to you as soon as possible. Thanks for your interest!
		</p>

		<div class="buttons">
			<Button href="mailto:founder@elclark.my.id" target="_blank">Email</Button>
			<Button href="https://t.me/elclark" color="filled-tonal" target="_blank">Telegram</Button>
			<Button
				href="https://api.whatsapp.com/send?phone=6282195446833"
				color="filled-tonal"
				target="_blank">WhatsApp</Button
			>
			<!-- TODO: add discord -->
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

	h1 {
		font-size: 2rem;
		font-weight: 500;
		margin: 0.5rem 0;
	}

	.about {
		margin: 0.5rem 0;
		text-align: center;
		font-size: 1.125rem;
		line-height: 1.2rem;
		padding: 0 1rem;
	}

	.buttons {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		max-width: 21rem;
		margin: 0.5rem 0;
	}
</style>
