<script lang="ts">
	import ripple from '../lib/ripple.js';

	export let icon: any | undefined = undefined;
	export let href: string | undefined = undefined;
	export let color = 'filled'; // filled, filled-tonal, outlined, and text buttons

	export let type: string | undefined = undefined;
	export let width: string | undefined = undefined;
	export let target: string | undefined = undefined;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<svelte:element
	this={href ? 'a' : 'button'}
	{href}
	{type}
	{target}
	rel={target === '_blank' ? 'noopener noreferrer' : undefined}
	style:width
	on:click
	on:mousedown={ripple}
	class="button {color}"
>
	{#if icon}
		<span>
			<svelte:component this={icon} />
		</span>
	{/if}
	<slot />
</svelte:element>

<style>
	.button {
		--bg: var(--md-sys-color-primary);
		--on-bg: var(--md-sys-color-on-primary);

		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;

		font: inherit;
		border: none;

		width: max-content;
		min-width: 10rem;
		text-align: center;

		margin: 0.25rem;
		padding: 0.75rem 1.75rem;

		border-radius: 2rem;

		font-size: 1.1rem;
		font-weight: 500;

		color: var(--on-bg);
		background-color: var(--bg);

		overflow: hidden;

		transition: opacity 100ms ease-out;
	}

	span {
		display: inline-block;
		width: 1.3rem;
		height: 1.3rem;

		margin-right: 0.4rem;
	}

	.button:hover {
		/* filter: drop-shadow(0 0 0.25rem var(--bg)); */
		filter: none;
	}

	.button.filled-tonal {
		--bg: var(--md-sys-color-surface-1);
		--on-bg: var(--md-sys-color-primary);
	}

	.button.outlined {
		--bg: transparent;
		--on-bg: var(--md-sys-color-primary);

		border: 1px solid var(--on-bg);
		transition: opacity 100ms ease-out, background-color 100ms ease-out;
	}

	.button.outlined:hover {
		--bg: var(--md-sys-color-surface-1);
	}

	.button.text {
		background-color: transparent;
		color: var(--md-sys-color-primary);

		transition: opacity 100ms ease-out, background-color 100ms ease-out;
	}

	.button.text:hover {
		background-color: var(--md-sys-color-surface-1);
	}
</style>
