<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { tick } from 'svelte/internal';
	import { fly } from 'svelte/transition';

	let show = false;

	let active = '';
	$: active = $page.url.pathname.slice(1);

	let nav: HTMLElement;
	let helper: HTMLElement;

	function moveHelper() {
		const activeLink = nav.querySelector('a.active');

		if (activeLink) {
			// set the helper width & height to the active link's width & height
			helper.style.width = `${activeLink.clientWidth}px`;
			helper.style.height = `${activeLink.clientHeight}px`;

			// set the helper's position to the active link's position relative to the nav
			const { x, y } = activeLink.getBoundingClientRect();
			const { x: navX, y: navY } = nav.getBoundingClientRect();
			helper.style.transform = `translate(${x - navX}px, ${y - navY}px)`;

			setTimeout(() => {
				show = true;
				helper.style.transition = 'transform 200ms ease';
			}, 10);
		}
	}

	onMount(async () => {
		page.subscribe(async () => {
			await tick();
			moveHelper();
		});
	});
</script>

<div>
	<nav bind:this={nav} transition:fly style:opacity={show ? '1' : '0'}>
		<div bind:this={helper} class="helper" />

		<a href="/" class:active={active === ''}>Home</a>
		<a href="/about" class:active={active === 'about'}>About</a>
		<a href="/contact" class:active={active === 'contact'}>Contact</a>
		<a href="/projects" class:active={active === 'projects'}>Projects</a>
	</nav>
</div>

<style>
	div {
		position: sticky;
	}

	nav {
		display: flex;
		flex-direction: column;

		position: relative;

		min-width: 7.5rem;
		overflow-y: auto;

		margin: 2rem 0;
		/* margin-right: 1rem; */
		padding: 0.25rem;

		border-radius: 0.5rem;
		background-color: rgb(255, 179, 179);

		transition: opacity 200ms ease;
	}

	.helper {
		position: absolute;

		top: 0;
		left: 0;

		width: 0;
		height: 0;

		z-index: 1;

		border-radius: 0.5rem;
		pointer-events: none;
		background-color: rgba(96, 19, 26);
	}

	a {
		margin: 0;
		padding: 0.5rem 1rem;

		z-index: 2;

		font-size: 18px;
		font-weight: 500;
		color: rgb(96, 19, 26);

		text-align: center;
		border-radius: 0.5rem;
		text-decoration: none;

		transition: color 200ms ease, background-color 200ms ease;
	}

	a.active {
		color: rgb(255, 179, 179);
	}
</style>
