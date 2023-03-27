<script lang="ts">
	import { relative } from '$lib/date';
	import { onDestroy } from 'svelte';

	export let href: string;
	export let image: string | undefined = undefined;
	export let title: string;
	export let author: string;
	export let date: string;
	export let blogPath = '/blog';

	let dateStr: string = relative(date);

	const interval = setInterval(() => {
		dateStr = relative(date);
	}, 1000);

	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<a href={`${blogPath}/${href}`} class:a-with-image={image}>
	<h2 class="title-large">{title}</h2>

	<div class="pill">
		<span>{author}</span> &bullet;
		<time datetime={date}>{dateStr}</time>
	</div>

	{#if image}
		<img src={image} alt={title} />
	{/if}
</a>

<style>
	a {
		display: grid;

		gap: 0.5rem;
		grid-template-columns: 1fr max-content;
		grid-template-rows: auto auto;
		grid-template-areas:
			'title title'
			'pill unknown';

		overflow: hidden;

		padding: 1rem 1.5rem;
		margin: 0.5rem auto;
		border-radius: 1.5rem;

		color: currentColor;
		background-color: var(--md-sys-color-surface-1);
	}

	.a-with-image {
		grid-template-areas:
			'title image'
			'pill image';
	}

	a:hover {
		background-color: var(--md-sys-color-surface-3);
	}

	a:active {
		background-color: var(--md-sys-color-surface-2);
	}

	h2 {
		grid-area: title;

		margin: 0;

		/* max 2 line */
		overflow: hidden;
		text-overflow: ellipsis;

		display: box;
		line-clamp: 2;
		box-orient: vertical;

		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;

		display: -moz-box;
		-moz-line-clamp: 2;
		-moz-box-orient: vertical;
	}

	.pill {
		grid-area: pill;

		border-radius: 1rem;
		width: max-content;
		padding: 0.25rem 1rem;

		background-color: var(--md-sys-color-surface-2);
	}

	.pill span {
		font-weight: 500;
	}

	img {
		grid-area: image;
		align-self: center;

		width: 6rem;
		height: 6rem;
		object-fit: cover;

		border-radius: 1rem;
	}
</style>
