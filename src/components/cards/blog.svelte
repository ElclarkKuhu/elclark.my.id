<script lang="ts">
	import dayjs from 'dayjs';
	import ripple from '../../lib/ripple.js';

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
		margin: 1rem auto;

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
		width: 5rem;
		height: 5rem;
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

		padding: 0.25rem 1rem;
		margin: 0;

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
