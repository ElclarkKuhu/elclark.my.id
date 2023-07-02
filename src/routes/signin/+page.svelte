<script lang="ts">
	export let data
	export let form

	let username = data.identifier || form?.identifier || ''
	let password = ''
</script>

<main>
	<h1>Sign In</h1>
	{#if form?.error}
		<p>{form.error}</p>
	{/if}
	<form method="POST">
		<label for="identifier">Username</label>
		<input type="text" name="identifier" bind:value={username} required />
		<label for="password">Password</label>
		<input type="password" name="password" id="password" bind:value={password} required />
		<button type="submit">Sign In</button>
	</form>
	<a href="/signup">don't have an account? sign up.</a>
</main>
