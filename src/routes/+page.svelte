<script lang="ts">
	import { onMount } from 'svelte'

	import Meta from '$lib/meta.svelte'
	import Footer from '$lib/footer.svelte'
	import Elclark from '$lib/icons/elclark.svelte'
	import Share from '$lib/icons/share.svelte'
	import At from '$lib/icons/at.svelte'

	const time = new Date().getHours()
	let greeting = 'Good Day'
	let can_share = false

	function share() {
		// @ts-ignore
		if (navigator.share) {
			navigator.share({
				title: 'Elclark',
				text: 'Elclark Kuhu - Developer & Designer',
				url: 'https://elclark.my.id'
			})
		}
	}

	onMount(() => {
		// @ts-ignore
		if (navigator.share) {
			can_share = true
		}
	})

	if (time >= 5 && time < 12) {
		greeting = 'Good Morning'
	} else if (time >= 12 && time < 18) {
		greeting = 'Good Afternoon'
	} else if (time >= 18 && time < 21) {
		greeting = 'Good Evening'
	} else {
		greeting = 'Good Night'
	}
</script>

<Meta
	image="https://static.elclark.my.id/image/elclark.webp"
	keywords={['landing', 'home', 'homepage']}
/>

<header>
	<div class="header container center">
		<div class="header-left">
			<a class="header-brand" href="/" aria-label="Elclark">
				<div class="header-brand-text text-headline-large">Elclark</div>
			</a>
			<span class="header-greet" style="font-weight: 300; margin-left: 0.1rem;">
				Hi, {greeting}!
			</span>
		</div>

		<div class="header-right">
			<a
				class="header-right-button"
				href="mailto:contact@elclark.my.id"
				aria-label="Send Email to contact@elclark.my.id"
			>
				<At size="2rem" />
			</a>
			{#if can_share}
				<button
					class="header-right-button"
					on:click={share}
					aria-label="Share this page to your friends"
				>
					<Share size="2rem" />
				</button>
			{/if}
		</div>
	</div>
</header>

<section class="about-section">
	<a href="/about" class="about container center" aria-label="About Elclark">
		<div class="about-profile">
			<div class="about-profile-image">
				<Elclark color="var(--color-on-primary)" size="100%" />
			</div>

			<div class="about-profile-name">
				<h2 class="text-headline-medium" style="margin: 0;">Elclark Kuhu</h2>
				<p class="text-body-medium" style="margin: 0; font-weight: 300;">Developer & Designer</p>
			</div>
		</div>

		<div class="about-bio">
			<p style="margin: 0; font-weight: 300; line-height: 1.5rem;">
				Hey, I'm a full-stack developer and designer. I'm passionate about technology and enjoy
				gaming and music in my free time. My goals is to make create cool stuff that people can use
				and enjoy.
			</p>
		</div>
	</a>
</section>

<section class="socials-section">
	<!-- TODO -->
</section>

<Footer />

<style>
	header {
		padding: 1rem 0.5rem;
	}

	.header {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;

		gap: 1rem;
		width: 100%;
		padding: 0 0.5rem;
	}

	.header-brand {
		color: unset;
		text-decoration: none;
	}

	.header-brand-text {
		width: max-content;
		border-radius: 0.25rem;
		transition: padding 200ms ease-in-out, color 200ms ease-in-out,
			background-color 200ms ease-in-out;
	}

	.header-brand:hover .header-brand-text {
		padding: 0 0.5rem;
		color: var(--color-on-primary);
		background-color: var(--color-primary);
	}

	.header-right {
		display: flex;
		gap: 0.5rem;
	}

	.header-right-button {
		font: unset;
		color: unset;
		border: none;
		text-decoration: none;

		cursor: pointer;
		display: flex;
		padding: 0.5rem;
		border-radius: 0.75rem;
		color: var(--color-primary);
		background-color: var(--color-surface-5);
		transition: background-color 200ms ease-in-out, color 200ms ease-in-out;
	}

	.header-right-button:hover {
		color: var(--color-on-primary);
		background-color: var(--color-primary);
	}

	.about-section {
		padding: 0 0.5rem;
	}

	.about {
		color: unset;
		text-decoration: none;

		display: grid;
		border-radius: 1rem;
		grid-template-rows: max-content 1fr;
		background-color: var(--color-surface-2);
		transition: background-color 200ms ease-in-out;
	}

	.about:hover {
		background-color: var(--color-surface-4);
	}

	.about:active {
		background-color: var(--color-surface-3);
	}

	.about:hover .about-profile {
		background-color: var(--color-surface-4);
	}

	.about-profile {
		gap: 1rem;
		display: grid;
		padding: 0.75rem;
		align-items: center;
		border-radius: 1rem;
		background-color: var(--color-surface-2);
		grid-template-columns: max-content 1fr;
		transition: background-color 200ms ease-in-out;
	}

	.about-profile-image {
		width: 5rem;
		height: 5rem;

		padding: 0.5rem;
		border-radius: 0.75rem;
		background-color: var(--color-primary);
	}

	.about-bio {
		padding: 0.5rem 1rem 1rem 1rem;
	}
</style>
