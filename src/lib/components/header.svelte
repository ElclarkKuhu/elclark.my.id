<script>
	const time = new Date().getHours();
	let greeting = 'Good Day';

	if (time >= 0 && time < 12) {
		greeting = 'Good Morning';
	} else if (time >= 12 && time < 18) {
		greeting = 'Good Afternoon';
	} else if (time >= 18 && time < 24) {
		greeting = 'Good Evening';
	} else {
		greeting = 'Good Night';
	}
</script>

<header>
	<div>
		<h2 class="headline-large">Elclark</h2>
		<p>Hi, {greeting}!</p>
	</div>

	<a href="/user/elclark_kuhu">
		<img src="/images/elclark.png" alt="Elclark's Profile" />
	</a>
</header>

<style>
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;

		float: left;

		width: 100%;
		height: 5rem;

		margin: auto;
		margin-top: 1rem;
		margin-bottom: 0.5rem;

		padding: 0.5rem;
	}

	header a {
		display: flex;
		align-items: center;
		justify-content: center;

		width: 4rem;
		height: 4rem;

		background-color: var(--color-surface-1);
		padding: 0.3rem;

		border-radius: 50%;
	}

	header a:hover {
		background-color: var(--color-surface-5);
	}

	header a:active {
		background-color: var(--color-surface-2);
	}

	header h2 {
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
