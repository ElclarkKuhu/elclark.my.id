<script>
	import Elclark from '../../icons/elclark.svelte';
</script>

<article>
	<a class="card" href="/about">
		<div class="profile">
			<Elclark color="var(--md-sys-color-on-primary)" />
		</div>

		<div>
			<h1 class="headline-medium">Elclark Kuhu</h1>
			<p class="title-medium">Developer & Designer</p>
		</div>
	</a>

	<div class="more">
		<p class="body-large">
			I'm a Software Engineer with a passion for UI/UX design, system administration, and lifelong
			learning. I love gaming, music, technology, and science!
		</p>
	</div>
</article>

<style>
	article {
		background-color: var(--md-sys-color-surface-1);
		border-radius: 1.5rem;
		margin: 0.5rem 0;
	}

	.more {
		padding: 1rem 1.5rem 1.5rem 1.5rem;
	}

	.more p {
		margin: 0;
	}

	.card {
		display: grid;
		grid-template-columns: max-content 1fr;
		align-items: center;
		gap: 1rem;

		padding: 1rem;

		color: currentColor;
		background-color: var(--md-sys-color-surface-1);

		border-radius: 1.5rem;

		cursor: pointer;
	}

	.card:hover {
		background-color: var(--md-sys-color-surface-3);
	}

	.card:active {
		background-color: var(--md-sys-color-surface-2);
	}

	.card h1 {
		margin: 0;
		font-weight: 500;
	}

	.card p {
		margin: 0;
	}

	.card .profile {
		display: flex;
		align-items: center;
		justify-content: center;

		width: 5rem;
		height: 5rem;

		padding: 0.5rem;

		background-color: var(--md-sys-color-primary);
		border-radius: 1.5rem;
	}
</style>
