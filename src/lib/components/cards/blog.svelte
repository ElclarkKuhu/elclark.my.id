<script lang="ts">
	import { onDestroy } from 'svelte';

	export let slug: string;
	export let featured_image: string | undefined = undefined;
	export let title: string;
	export let author: {
		name: string;
		username: string;
	};
	export let date: string;
	export let blog_path = '/post';

	let date_str: string = relativeTime(date);

	function formatDate(date: string) {
		const d = new Date(date);

		const pad = (n: number) => (n < 10 ? `0${n}` : n);

		const year = d.getFullYear();
		const month = d.toLocaleString('default', { month: 'long' });
		const day = pad(d.getDate());

		return `${month} ${day}, ${year}`;
	}

	function relativeTime(date: string) {
		const now = new Date();
		const then = new Date(date);

		const diff = now.getTime() - then.getTime();

		const seconds = Math.floor(diff / 1000);
		const minutes = Math.floor(seconds / 60);
		const hours = Math.floor(minutes / 60);
		const days = Math.floor(hours / 24);
		const weeks = Math.floor(days / 7);

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
		} else {
			return formatDate(date);
		}
	}

	const interval = setInterval(() => {
		date_str = relativeTime(date);
	}, 1000);

	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<a href={`${blog_path}/${slug}`} class:a-with-image={featured_image}>
	<h2 class="title-large">{title}</h2>

	<div class="pill">
		<span>{author.name}</span> &bullet;
		<time datetime={date}>{date_str}</time>
	</div>

	{#if featured_image}
		<img src={featured_image} alt={title} />
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
		background-color: var(--color-surface-1);
	}

	.a-with-image {
		grid-template-areas:
			'title image'
			'pill image';
	}

	a:hover {
		background-color: var(--color-surface-3);
	}

	a:active {
		background-color: var(--color-surface-2);
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

		background-color: var(--color-surface-2);
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
