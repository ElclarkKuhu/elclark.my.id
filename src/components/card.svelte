<script lang="ts">
	import dayjs from 'dayjs';
	import ripple from '../lib/ripple.js';

	export let href = '/journal/why-rebuild-again';
	// export let type = 'blog'

	export let image = '/images/elclark.png';
	export let title = 'This website is currently still under construction, why?';
	export let author = 'Elclark Kuhu';
	export let date = '2022-08-20T21:27:47Z';

	function formatDate(date: string) {
		// check if date is longger than a year
		if (dayjs().diff(date, 'year') > 0) {
			return dayjs(date).format('MMMM D, YYYY');
		}

		return dayjs(date).format('MMMM DD');
	}
</script>

<a {href} on:click={ripple}>
	<img src={image} alt={title} />
	<div>
		<h2>{title}</h2>
		<p>
			<span>{author}</span> &bullet;
			{formatDate(date)}
		</p>
	</div>
</a>

<style>
	a {
		display: grid;
		grid-template-columns: auto 1fr;

		overflow: hidden;
		transition: none;
		border-radius: 0.5rem;

		position: relative;
		padding: 0.25rem;
		margin: 0.5rem 0;

		color: currentColor;
		/* background-color: rgba(var(--raw-on-background), 0.1); */

		transition: background-color 200ms ease;
	}

	a:hover {
		filter: none;
		background-color: var(--md-sys-color-surface-1);
	}

	img {
		width: 5rem;
		height: 5rem;
		border-radius: 0.4rem;
		object-fit: cover;

		pointer-events: none;
	}

	div {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;

		padding: 0 1rem;

		pointer-events: none;
	}

	h2 {
		font-size: 1.25rem;
		font-weight: 500;
		line-height: 1.25rem;

		margin: 0;
		margin-top: 0.25rem;
	}

	p {
		display: inline-block;
		font-size: 0.875rem;
		font-weight: 300;

		padding: 0.25rem 1rem;
		margin: 0;
		margin-top: 0.25rem;
		margin-bottom: 0.25rem;

		border-radius: 1rem;

		background-color: var(--md-sys-color-surface-1);
	}

	span {
		font-weight: 500;
	}

	@media (min-width: 480px) {
		img {
			width: 6rem;
			height: 6rem;
		}
	}

	@keyframes scale {
		0% {
			width: 0;
			height: 0;
		}
		100% {
			width: 15rem;
			height: 15rem;
			opacity: 0;
		}
	}
</style>
