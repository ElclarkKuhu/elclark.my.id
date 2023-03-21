<script lang="ts">
	import dayjs from 'dayjs';
	import ripple from '../../lib/ripple.js';

	export let href = '/blog/why-rebuild-again';
	// export let type = 'blog'

	export let image = '/images/elclark.png';
	export let title = 'This website is currently still under construction, why?';
	export let author = 'Elclark Kuhu';
	export let date = '2022-08-20T21:27:47Z';

	function formatDate(date: string) {
		// check if date is the same year
		if (dayjs(date).format('YYYY') === dayjs().format('YYYY')) {
			return dayjs(date).format('MMMM D');
		}

		return dayjs(date).format('MMMM D, YYYY');
	}
</script>

<a {href} on:click={ripple}>
	<div>
		<h2 class="title-large">{title}</h2>
		<p>
			<span>{author}</span> &bullet;
			{formatDate(date)}
		</p>
	</div>

	<img src={image} alt={title} />
</a>

<style>
	a {
		display: grid;
		grid-template-columns: 1fr max-content;

		overflow: hidden;
		transition: none;
		border-radius: 1.5rem;

		position: relative;
		padding: 1.5rem;
		margin: 0.5rem auto;

		color: currentColor;
		background-color: var(--md-sys-color-surface-1);
	}

	a:hover {
		background-color: var(--md-sys-color-surface-3);
	}

	a:active {
		background-color: var(--md-sys-color-surface-2);
	}

	img {
		width: 6rem;
		height: 6rem;
		border-radius: 1rem;
		object-fit: cover;

		pointer-events: none;
	}

	div {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;

		pointer-events: none;
	}

	h2 {
		margin: 0;
	}

	p {
		display: inline-block;

		font-size: 0.875rem;
		font-weight: 300;
		line-height: 1rem;
		letter-spacing: 0.4px;

		padding: 0.25rem 1rem;
		margin: 0;
		margin-top: 0.1rem;

		border-radius: 1rem;

		background-color: var(--md-sys-color-surface-1);
	}

	span {
		font-weight: 500;
	}
</style>
