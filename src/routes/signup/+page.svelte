<script lang="ts">
	export let form

	let name = form?.name || ''
	let email = form?.email || ''
	let username = form?.username || ''
	let password = ''

	function nameToUsername() {
		username = name.toLowerCase().replace(/\s/g, '')
	}
</script>

<!-- TODO: Polish The UI -->

<main class="container">
	<div class="signup">
		<a href="/" class="title-link">
			<h2 class="title headline-large">Elclark</h2>
		</a>
		<span>Sign up to create an account</span>

		<form method="POST">
			{#if form?.error}
				<span class="error-message">{form.error}</span>
			{/if}

			<input
				type="text"
				name="name"
				bind:value={name}
				on:input={nameToUsername}
				placeholder="Name"
				required
			/>
			<input type="email" name="email" bind:value={email} placeholder="Email" required />
			<input type="text" name="username" bind:value={username} placeholder="Username" required />
			<input
				type="password"
				name="password"
				bind:value={password}
				placeholder="Password"
				required
			/>

			<button type="submit">Sign Up</button>
		</form>

		<span class="links">
			Aleady have an account? <a href="/signin">Sign in</a>
		</span>
	</div>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		height: 100svh;
		padding: 0 0.5rem;
	}

	.signup {
		width: 100%;
		padding: 1rem;
		max-width: 22rem;
		padding-bottom: 1.5rem;

		text-align: center;
		border-radius: 0.5rem;

		border: 0.15rem solid var(--color-surface-2);
	}

	.title {
		color: var(--color-on-background);

		background: linear-gradient(90deg, var(--color-primary) 0%, var(--color-primary) 100%);
		background-repeat: no-repeat;
		background-size: 0% 100%;
		background-position: 50% 95%;
		border-radius: 0.25rem;

		transition: all 200ms ease-in-out;
	}

	.title:hover {
		color: var(--color-on-primary);

		padding: 0 0.5rem;
		background-size: 100% 100%;
	}

	.title-link {
		display: block;
		text-decoration: none;

		width: max-content;
		margin: 0 auto;
	}

	.error-message {
		display: block;

		font-weight: 400;

		margin: 0.25rem 0;
		padding: 0.5rem;

		color: var(--color-on-error);
		background-color: var(--color-error);

		border-radius: 0.5rem;
	}

	form {
		display: flex;
		flex-direction: column;

		margin-top: 1rem;
		margin-bottom: 0.25rem;
	}

	h2 {
		margin: 0;
	}

	input {
		font: inherit;

		margin: 0.25rem 0;
		padding: 0.5rem 0.75rem;

		border: 0.15rem solid var(--color-surface-2);
		border-radius: 0.5rem;

		/* background-color: var(--color-surface-1); */
		background-color: transparent;

		transition: border-color 0.2s ease-in-out;
	}

	input:focus {
		outline: none;
		border-color: var(--color-primary);
	}

	input:hover {
		border-color: var(--color-primary);
	}

	input::placeholder {
		color: var(--color-on-background);
		opacity: 0.5;
	}

	button {
		font: inherit;
		font-weight: 500;
		cursor: pointer;

		margin: 0.25rem 0;
		padding: 0.5rem 0.75rem;

		border: none;
		border-radius: 0.5rem;

		color: var(--color-primary);
		background-color: var(--color-surface-2);

		transition: all 200ms ease-in-out;
	}

	button:hover {
		color: var(--color-on-primary-container);
		background-color: var(--color-primary-container);
	}

	a {
		color: inherit;
	}

	.links {
		font-size: 0.9rem;
		font-weight: 400;
	}
</style>
