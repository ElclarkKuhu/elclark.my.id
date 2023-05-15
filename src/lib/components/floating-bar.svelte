<script lang="ts">
	export let share = true;
	export let love = true;
	export let mark = false;

	export let loved = false;
	export let marked = false;

	import Love from '$lib/icons/love.svelte';
	import Share from '$lib/icons/share.svelte';
	import Elclark from '$lib/icons/elclark.svelte';
	import CheckCircle from '$lib/icons/check-circle.svelte';

	function handleShare() {
		try {
			const title = document.querySelector('h1')?.textContent || document.title || 'Elclark';
			navigator.share({
				title,
				url: window.location.href
			});
		} catch (error) {
			console.error(error);
			// TODO: Fallback to share component
		}
	}

	function toggleLove() {
		loved = !loved;

		// TODO: Do something
	}

	function toggleMark() {
		marked = !marked;

		// TODO: Do something
	}
</script>

<div class="toolbar">
	<a href="/" aria-label="Back to Homepage">
		<Elclark size="1.5em" />
		<span>Elclark</span>
	</a>

	{#if share}
		<button class="share" aria-label="Share this post" on:click={handleShare}>
			<Share size="1.5em" />
		</button>
	{/if}

	{#if love}
		<button class="love" class:active={loved} aria-label="Love this post" on:click={toggleLove}>
			<Love size="1.5em" fill={loved} />
		</button>
	{/if}

	{#if mark}
		<button
			class="done"
			class:active={marked}
			aria-label="Mark this post as done"
			on:click={toggleMark}
		>
			<CheckCircle size="1.5em" />
		</button>
	{/if}
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
