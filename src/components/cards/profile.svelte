<script>
	import Elclark from '../../icons/elclark.svelte';

	import Twitter from '../../icons/twitter.svelte';
	import Facebook from '../../icons/facebook.svelte';
	import Instagram from '../../icons/instagram.svelte';
	import Linkedin from '../../icons/linkedin.svelte';
</script>

<div class="card">
	<div class="profile">
		<Elclark color="var(--md-sys-color-on-primary)" />
	</div>

	<div class="name">
		<h2 class="title-large">Elclark Kuhu</h2>
		<h3 class="body-large">Manado, Indonesia</h3>
	</div>

	<p class="body-large">
		Software Engineer passionate about UI/UX, and learning. Loves gaming, music, tech, and science!
	</p>

	<div class="socials">
		<a target="_blank" rel="noopener noreferrer" href="https://twitter.com/elclarkkuhu">
			<Twitter color="var(--md-sys-color-on-background)" />
		</a>
		<a href="https://www.facebook.com/elclark/" target="_blank" rel="noopener noreferrer">
			<Facebook color="var(--md-sys-color-on-background)" />
		</a>
		<a href="https://www.instagram.com/elclark__/" target="_blank" rel="noopener noreferrer">
			<Instagram color="var(--md-sys-color-on-background)" />
		</a>
		<a href="https://www.linkedin.com/in/elclark-kuhu/" target="_blank" rel="noopener noreferrer">
			<Linkedin color="var(--md-sys-color-on-background)" />
		</a>
	</div>

	<a href="mailto:network@elclark.my.id" class="msg">Message</a>
</div>

<style>
	.profile {
		display: flex;

		width: 6rem;
		height: 6rem;

		border-radius: 50%;
		background-color: var(--md-sys-color-primary);
		padding: 0.5rem;
	}

	.card {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		width: 20rem;

		padding: 2rem;
		margin: 1rem auto;

		background-color: var(--md-sys-color-surface-1);
		color: var(--md-sys-color-on-background);

		border-radius: 2rem;
	}

	.card h2 {
		margin: 0;
		font-weight: 500;
	}

	.card h3 {
		margin: 0;
	}

	.card p {
		margin: 0;
		text-align: center;
	}

	.name {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		margin: 1rem 0;
	}

	.socials {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 0.5rem;

		margin-top: 1rem;
	}

	.socials a {
		display: flex;
		align-items: center;
		justify-content: center;

		width: 2.5rem;
		height: 2.5rem;

		background-color: var(--md-sys-color-surface-1);
		padding: 0.4rem;

		border-radius: 50%;
	}

	.socials a:hover {
		background-color: var(--md-sys-color-surface-3);
	}

	.socials a:active {
		background-color: var(--md-sys-color-surface-2);
	}

	.msg {
		display: flex;
		align-items: center;
		justify-content: center;

		width: 100%;
		height: 2.5rem;

		margin-top: 1rem;

		background-color: var(--md-sys-color-primary);
		color: var(--md-sys-color-on-primary);

		border-radius: 2rem;
	}
</style>
