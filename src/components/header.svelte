<header>
	<div>
		<h1>Elclark</h1>
		<p>Hi, Good Morning!</p>
	</div>

	<a href="/profile">
		<img src="/images/elclark.png" alt="Elclark's Profile" />
	</a>
</header>

<style>
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;

		width: 100%;
		height: 5rem;

		margin: 1rem auto;
	}

	header a {
		display: flex;
		align-items: center;
		justify-content: center;

		width: 4rem;
		height: 4rem;

		background-color: var(--md-sys-color-surface-1);
		padding: 0.3rem;

		border-radius: 50%;
	}

	header a:hover {
		background-color: var(--md-sys-color-surface-5);

		filter: none;
	}

	header h1 {
		margin: 0;
	}

	header p {
		margin: 0;
	}

	header a img {
		width: 100%;
		height: 100%;

		border-radius: 50%;
	}
</style>
