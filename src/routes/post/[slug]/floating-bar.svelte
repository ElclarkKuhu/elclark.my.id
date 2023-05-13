<script lang="ts">
	import Love from '$lib/icons/love.svelte';
	import Share from '$lib/icons/share.svelte';
	import Elclark from '$lib/icons/elclark.svelte';
	import CheckCircle from '$lib/icons/check-circle.svelte';

	let loved = false;
	let done = false;
</script>

<div class="toolbar">
	<a href="/">
		<Elclark size="1.5em" />
		<span>Elclark</span>
	</a>

	<button class="share">
		<Share size="1.5em" />
	</button>

	<button
		class="love"
		class:active={loved}
		on:click={() => {
			loved = !loved;
		}}
	>
		<Love size="1.5em" fill={loved} />
	</button>

	<button
		class="done"
		class:active={done}
		on:click={() => {
			done = !done;
		}}
	>
		<CheckCircle size="1.5em" />
	</button>
</div>

<style>
	.toolbar {
		position: sticky;

		font-size: 18px;

		left: 0;
		right: 0;
		bottom: 0.75em;

		margin: 1em auto;

		display: flex;
		align-items: center;
		justify-content: space-between;

		overflow: hidden;

		gap: 0.25em;

		padding: 0.25em;
		width: max-content;

		border-radius: 2.5em;

		background-color: var(--color-surface);

		box-shadow: 0 0 1em var(--color-background);
	}

	.toolbar::before {
		content: '';

		position: absolute;
		top: 0;
		left: 0;
		right: 0;

		width: 100%;
		height: 100%;

		pointer-events: none;

		background-color: var(--color-surface-1);
	}

	.toolbar button {
		display: flex;
		align-items: center;
		justify-content: center;

		gap: 0.5em;

		border: none;
		margin: 0;

		color: inherit;

		font-family: inherit;
		font-size: inherit;

		cursor: pointer;
	}

	.toolbar > *.active {
		color: var(--color-primary);
	}

	.toolbar > *:hover {
		text-decoration: none;

		color: var(--color-primary);
		background-color: var(--color-surface-5);
	}

	.toolbar > *:active {
		background-color: var(--color-surface-2);
		transform: scale(0.95);
	}

	.toolbar > * {
		padding: 0.25rem;
		border-radius: 2rem;

		background-color: var(--color-surface-2);
	}

	.toolbar a {
		display: flex;
		align-items: center;
		justify-content: center;

		color: inherit;

		gap: 0.5em;
		padding: 0.25em 1em 0.25em 0.25em;
	}
</style>
