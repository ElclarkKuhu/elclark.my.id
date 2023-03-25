<script lang="ts">
	import dayjs from 'dayjs';

	export let href: string;
	export let image: string | undefined = undefined;
	export let title: string;
	export let author: string;
	export let date: string;
	export let blogPath = '/blog';

	function formatDate(date: string) {
		if (dayjs(date).format('YYYY') === dayjs().format('YYYY')) {
			return dayjs(date).format('MMMM D');
		}

		return dayjs(date).format('MMMM D, YYYY');
	}
</script>

<a href={`${blogPath}/${href}`} class:a-with-image={image}>
	<h2 class="title-large">{title}</h2>

	<div class="pill">
		<span>{author}</span> &bullet;
		{formatDate(date)}
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
