<script lang="ts">
	import { onDestroy } from 'svelte';

	export let href: string;
	export let image: string | undefined = undefined;
	export let title: string;
	export let author: string;
	export let date: string;
	export let blogPath = '/blog';

	let dateStr: string = formatDate(date);

	const interval = setInterval(() => {
		dateStr = formatDate(date);
	}, 1000);

	function formatDate(date: string) {
		const now = new Date();
		const then = new Date(date);

		const diff = now.getTime() - then.getTime();

		const seconds = Math.floor(diff / 1000);
		const minutes = Math.floor(seconds / 60);
		const hours = Math.floor(minutes / 60);
		const days = Math.floor(hours / 24);
		const weeks = Math.floor(days / 7);
		const months = Math.floor(weeks / 4);
		const years = Math.floor(months / 12);

		if (seconds < 60) {
			if (seconds === 1) return 'Just now';
			return `${seconds} seconds ago`;
		} else if (minutes < 60) {
			if (minutes === 1) return 'a minute ago';
			return `${minutes} minutes ago`;
		} else if (hours < 24) {
			if (hours === 1) return 'an hour ago';
			return `${hours} hours ago`;
		} else if (days < 7) {
			if (days === 1) return 'Yesterday';
			return `${days} days ago`;
		} else if (weeks < 4) {
			if (weeks === 1) return 'a week ago';
			return `${weeks} weeks ago`;
		} else if (months < 12) {
			if (months === 1) return 'a month ago';
			return `${months} months ago`;
		} else {
			if (years === 1) return 'a year ago';
			return `${years} years ago`;
		}
	}

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
	}

	.pill {
		grid-area: pill;

		border-radius: 1rem;
		width: max-content;
		padding: 0.25rem 1rem;

		background-color: var(--md-sys-color-surface-2);
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
