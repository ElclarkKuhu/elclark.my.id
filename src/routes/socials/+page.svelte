<script>
	import { page } from '$app/stores';

	import Meta from '../../components/meta.svelte';
	import Badge from '../../components/badge.svelte';

	import Twitter from '../../icons/twitter.svelte';
	import Facebook from '../../icons/facebook.svelte';
	import Instagram from '../../icons/instagram.svelte';
	import Linkedin from '../../icons/linkedin.svelte';

	// TODO: COMPLETE REDESIGN
	// TODO: add discord
</script>

<Meta
	path={$page.url.pathname}
	title="Elclark - Social Media"
	image="https://elclark.my.id/images/elclark.png"
	keywords={['social', 'media', 'socials', 'instagram', 'facebook', 'twitter', 'youtube', 'twitch']}
/>

<div class="container">
	<main>
		<Badge />
		<h1>Social Media</h1>
		<p class="about">Here are my social media accounts. Feel free to follow me on any of them.</p>

		<div class="links">
			<a
				href="https://twitter.com/elclark_kuhu"
				target="_blank"
				rel="noopener noreferrer"
				style:--clr="0, 172, 238"
			>
				<span>
					<Twitter size="1.25rem" color="#00acee" />
				</span>
				Twitter
			</a>
			<a
				href="https://www.facebook.com/elclark/"
				target="_blank"
				rel="noopener noreferrer"
				style:--clr="66, 103, 178"
			>
				<span>
					<Facebook size="1.25rem" color="#4267B2" />
				</span>
				Facebook
			</a>
			<a
				href="https://www.instagram.com/elclark__/"
				target="_blank"
				rel="noopener noreferrer"
				style:--clr="131, 58, 180"
			>
				<span>
					<Instagram size="1.25rem" color="#833AB4" />
				</span>
				Instagram
			</a>
			<a
				href="https://www.linkedin.com/in/elclark-kuhu/"
				target="_blank"
				rel="noopener noreferrer"
				style:--clr="14, 118, 168"
			>
				<span>
					<Linkedin size="1.25rem" color="#0e76a8" />
				</span>
				LinkedIn
			</a>

			<a href="/links" style:--clr="156, 64, 67">Other Links</a>
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

	.links {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 0.5rem 0;
	}

	.links a {
		display: flex;
		align-items: center;
		justify-content: center;

		font-size: 1.2rem;
		margin: 0.25rem 0;
		color: currentColor;

		padding: 0.75rem 1.5rem;
		border-radius: 5rem;
		min-width: 12rem;
	}

	.links a span {
		display: flex;
		margin-right: 0.25rem;

		transition: margin-right 100ms ease;
	}

	.links a:hover {
		filter: none;
		background-color: rgba(var(--clr), 0.2);
	}
</style>
