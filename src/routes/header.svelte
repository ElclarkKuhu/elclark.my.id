<script lang="ts">
	import { user, getAvatar } from '$lib/stores/user'

	const time = new Date().getHours()
	let greeting = 'Good Day'

	if (time >= 0 && time < 12) {
		greeting = 'Good Morning'
	} else if (time >= 12 && time < 18) {
		greeting = 'Good Afternoon'
	} else if (time >= 18 && time < 24) {
		greeting = 'Good Evening'
	} else {
		greeting = 'Good Night'
	}
</script>

<header>
	<div class="left">
		<a href="/">
			<span class="title headline-large">Elclark</span>
		</a>
		<span class="greet">Hi, {greeting}!</span>
	</div>

	{#if $user}
		<button type="button" on:click={user.signout}>Logout</button>
		<a href={`/user/${$user.username}`} class="profile">
			<img src={getAvatar($user)} alt="Elclark's Profile" />
		</a>
	{:else}
		<a href="/signin" class="sign-in font-500">Sign In</a>
	{/if}
</header>

<style>
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;

		gap: 1rem;
		width: 100%;
		padding: 1rem 0.5rem;
	}

	.profile {
		display: flex;
		align-items: center;
		justify-content: center;

		width: 4rem;
		height: 4rem;
		padding: 0.3rem;

		cursor: pointer;

		border: none;
		border-radius: 50%;

		background-color: var(--color-surface-1);
	}

	.profile:hover {
		background-color: var(--color-surface-5);
	}

	.profile:active {
		background-color: var(--color-surface-2);
	}

	.profile img {
		width: 100%;
		height: 100%;

		border-radius: 50%;
	}

	.left {
		display: flex;
		flex-direction: column;
	}

	.title {
		color: var(--color-on-background);

		background: linear-gradient(90deg, var(--color-primary) 0%, var(--color-primary) 100%);
		background-repeat: no-repeat;
		background-size: 0% 100%;
		background-position: 0% 95%;
		border-radius: 0.25rem;

		transition: all 200ms ease-in-out;
	}

	.title:hover {
		color: var(--color-on-primary);

		padding: 0 0.5rem;
		background-size: 100% 100%;
	}

	.greet {
		margin-left: 0.1rem;
	}

	.sign-in {
		border-radius: 2rem;
		padding: 0.5rem 1.25rem;

		color: var(--color-on-primary);
		background-color: var(--color-primary);

		transition: all 200ms ease;
	}

	.sign-in:hover {
		color: var(--color-on-primary-container);
		background-color: var(--color-primary-container);
	}

	a:hover {
		text-decoration: none;
	}
</style>
