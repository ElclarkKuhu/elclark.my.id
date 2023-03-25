<!-- BLOG PAGE -->
<script lang="ts">
	import { onDestroy } from 'svelte';
	import Meta from '$lib/components/meta.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	let dateStr: string = formatDate(data.date);
	let updatedStr: string = formatDate(data.updated);

	const interval = setInterval(() => {
		dateStr = formatDate(data.date);
		updatedStr = formatDate(data.updated);
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

<Meta image={data.featuredImage} title={`Elclark - ${data.title}`} keywords={['blog']} />

<h1>
	{data.title}
</h1>

<p>
	{data.author.displayName} - {dateStr} -
	{#if data.updated}
		Updated {updatedStr}
	{/if}
</p>

{#if data.featuredImage}
	<img src={data.featuredImage} alt={data.title} />
{/if}

<article>
	{#if data.content}
		{@html data.content}
	{/if}
</article>

<style>
	:global(img) {
		max-width: 100%;
		border-radius: 1.5rem;
	}
</style>
