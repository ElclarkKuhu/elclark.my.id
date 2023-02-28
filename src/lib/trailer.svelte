<script lang="ts">
	import { onMount } from 'svelte';

	let point: HTMLElement;
	let outline: HTMLElement;

	let clickable = false;
	const clickableElements = [
		'a',
		'button',
		'input',
		'select',
		'textarea',
		'[role="button"]',
		'[role="link"]'
	];

	onMount(() => {
		const { offsetWidth: pointOffsetWidth, offsetHeight: pointOffsetHeight } = point;
		const { offsetWidth: outlineOffsetWidth, offsetHeight: outlineOffsetHeight } = outline;

		window.onmousemove = (event: MouseEvent) => {
			// Check if the mouse is over a clickable element
			clickable = false;
			clickableElements.forEach((element) => {
				if (event.target instanceof HTMLElement && event.target.matches(element)) {
					clickable = true;
				}
			});

			const pointX = event.clientX - pointOffsetWidth / 2;
			const pointY = event.clientY - pointOffsetHeight / 2;

			const outlineX = event.clientX - outlineOffsetWidth / 2;
			const outlineY = event.clientY - outlineOffsetHeight / 2;

			const pointKeyframes = {
				transform: `translate(${pointX}px, ${pointY}px) scale(${clickable ? 2.25 : 1})`,
				opacity: `${clickable ? 0.5 : 1}`
			};

			const outlineKeyframes = {
				transform: `translate(${outlineX}px, ${outlineY}px) scale(1)`
			};

			point.animate(pointKeyframes, {
				duration: 600,
				fill: 'forwards'
			});

			outline.animate(outlineKeyframes, {
				duration: 1000,
				fill: 'forwards'
			});
		};
	});
</script>

<div class="point" bind:this={point} />
<div class="outline" bind:this={outline} />

<style>
	.point {
		height: 1rem;
		width: 1rem;
		background-color: rgb(255, 179, 179);
		border-radius: 50%;

		position: fixed;
		left: 0px;
		top: 0px;
		z-index: 10000;

		pointer-events: none;
		opacity: 1;
		transition: opacity 500ms ease;

		display: grid;
		place-items: center;
	}

	.outline {
		height: 2.75rem;
		width: 2.75rem;
		background-color: transparent;
		border-radius: 50%;

		border: 1px solid rgb(255, 179, 179);

		position: fixed;
		left: 0px;
		top: 0px;
		z-index: 10000;

		pointer-events: none;
		opacity: 0.4;
		transition: opacity 500ms ease;

		display: grid;
		place-items: center;
	}
</style>
