<script lang="ts">
	import { fade } from 'svelte/transition';
	import { afterNavigate, beforeNavigate } from '$app/navigation';

	let loading = true;

	beforeNavigate(() => {
		loading = true;
	});

	afterNavigate(() => {
		loading = false;
	});
</script>

{#if loading}
	<div class="loading" transition:fade>
		<div class="spinner">
			<div class="bar" />
			<div class="bar" />
			<div class="bar" />
		</div>
	</div>
{/if}

<style>
	.loading {
		position: fixed;

		top: 0;
		left: 0;

		width: 100%;
		height: 100%;
		z-index: 9999;

		backdrop-filter: blur(2px);
		background-color: rgba(var(--raw-background), 0.8);
	}

	.spinner {
		display: flex;
		align-items: center;
		position: absolute;

		top: 50%;
		left: 50%;

		transform: translate(-50%, -50%);
	}

	.bar {
		display: inline-block;

		width: 1rem;
		height: 1rem;

		margin: 0 0.25rem;
		border-radius: 0.5rem;

		filter: drop-shadow(0 0 0.5rem var(--md-sys-color-primary));
		background-color: var(--md-sys-color-primary);
	}

	.bar:nth-child(1) {
		animation: bar 500ms infinite ease alternate;
	}

	.bar:nth-child(2) {
		animation: bar 500ms infinite ease alternate 100ms;
	}

	.bar:nth-child(3) {
		animation: bar 500ms infinite ease alternate 200ms;
	}

	@keyframes bar {
		0% {
			height: 1rem;
		}

		100% {
			height: 3rem;
		}
	}
</style>
