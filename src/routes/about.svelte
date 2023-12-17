<script>
	import Elclark from '$lib/icons/elclark.svelte'
</script>

<a href="/about">
	<div class="card">
		<div class="profile">
			<Elclark color="var(--color-on-primary)" />
		</div>

		<div>
			<h1 class="headline-medium">Elclark Kuhu</h1>
			<p class="body-medium">Developer & Designer</p>
		</div>
	</div>

	<div class="more">
		<p>
			Hey, I'm a full-stack developer and designer. I'm passionate about technology and enjoy gaming
			and music in my free time. My goals is coming up with awesome solutions and using technology
			to help out those who need it.
		</p>
	</div>
</a>

<style>
	a {
		background-color: var(--color-surface-1);
		border-radius: 1rem;
		color: currentColor;
	}

	a:hover {
		text-decoration: none;
		background-color: var(--color-surface-3);
	}

	a:hover .card {
		background-color: var(--color-surface-3);
	}

	a:active {
		background-color: var(--color-surface-2);
	}

	a:active .card {
		background-color: var(--color-surface-2);
	}

	.more {
		padding: 1rem;
	}

	.more p {
		line-height: 24px;
		margin: 0;
	}

	.card {
		display: grid;
		grid-template-columns: max-content 1fr;
		align-items: center;
		gap: 1rem;

		padding: 0.75rem;

		color: currentColor;
		background-color: var(--color-surface-1);

		border-radius: 1rem;

		cursor: pointer;
	}

	.card h1 {
		margin: 0;
	}

	.card p {
		margin: 0 0.1rem;
	}

	.card .profile {
		display: flex;
		align-items: center;
		justify-content: center;

		width: 5rem;
		height: 5rem;

		padding: 0.5rem;

		background-color: var(--color-primary);
		border-radius: 0.75rem;
	}
</style>
