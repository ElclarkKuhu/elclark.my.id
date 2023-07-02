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

<main>
	<h1>Sign Up</h1>
	{#if form?.error}
		<p>{form.error}</p>
	{/if}
	<form method="POST">
		<label for="name">Name</label>
		<input type="text" name="name" bind:value={name} on:input={nameToUsername} required />
		<label for="email">Email</label>
		<input type="email" name="email" bind:value={email} required />
		<label for="username">Username</label>
		<input type="text" name="username" bind:value={username} required />
		<label for="password">Password</label>
		<input type="password" name="password" id="password" bind:value={password} required />
		<button type="submit">Sign Up</button>
	</form>
</main>
