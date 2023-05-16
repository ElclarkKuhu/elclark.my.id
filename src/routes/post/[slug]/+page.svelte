<!-- BLOG PAGE -->
<script lang="ts">
	import Meta from '$lib/components/meta.svelte';
	import Footer from '$lib/components/footer.svelte';
	import FloatingBar from '$lib/components/floating-bar.svelte';

	import Verified from '$lib/icons/verified.svelte';

	export let data;

	function formatDate(date: string) {
		const d = new Date(date);

		const pad = (n: number) => (n < 10 ? `0${n}` : n);

		const year = d.getFullYear();
		const month = d.toLocaleString('default', { month: 'long' });
		const day = pad(d.getDate());

		return `${month} ${day}, ${year}`;
	}
</script>

<Meta
	image={data.featured_image}
	title={`${data.title} - ${data.author.name.split(' ')[0]}`}
	keywords={['blog', ...data.tags]}
	categorys={data.categorys}
/>

<header>
	<h1>
		{data.title}
	</h1>

	{#if data.descriptions}
		<p>
			{data.descriptions}
		</p>
	{/if}

	<p class="meta">
		<span>
			{formatDate(data.date)}
		</span>

		&bull;

		<span>
			{data.reading_time} min read
		</span>
	</p>

	<div class="profile">
		<a href={`/user/${data.author.username}`} class="link">
			<img
				class="avatar"
				src={data.author.avatar}
				alt={`${data.author.name.split(' ')[0]}'s Avatar'`}
			/>
		</a>
		<a href={`/user/${data.author.username}`} class="name title-medium">
			{data.author.name}
			{#if data.author.verified}
				<span class="verified">
					<Verified />
				</span>
			{/if}
		</a>
		<span class="title body-small">{data.author.title}</span>
	</div>
</header>

{#if data.featured_image}
	<img class="featured" src={data.featured_image} alt={data.title} />
{/if}

<article>
	{@html data.content}
</article>

<FloatingBar mark={true} />
<Footer />

<style>
	.featured {
		max-width: 100%;
		aspect-ratio: 16 / 9;
		border-radius: 1rem;

		object-fit: cover;
	}

	.meta {
		margin: 0.5rem 0;

		display: flex;
		align-items: center;

		gap: 0.5rem;
	}

	.link {
		grid-area: avatar;
		display: flex;

		padding: 0.25rem;

		border-radius: 50%;
		background-color: var(--color-surface-1);
	}

	.link:hover {
		background-color: var(--color-surface-5);
	}

	.avatar {
		width: 3rem;
		height: 3rem;
		border-radius: 50%;
	}

	.profile {
		display: grid;

		width: max-content;

		column-gap: 0.75rem;

		grid-template-rows: 1fr 1fr;
		grid-template-columns: auto 1fr;
		grid-template-areas: 'avatar name' 'avatar date';

		padding: 0.5rem 0;
	}

	.name {
		width: max-content;

		grid-area: name;
		align-self: end;

		display: flex;
		align-items: center;

		gap: 0.25rem;
	}

	.verified {
		display: flex;
		align-items: center;
		justify-content: center;

		width: 1rem;
		height: 1rem;

		color: #8ab4f8;
		border-radius: 50%;
	}

	.title {
		grid-area: date;
		align-self: start;
	}

	a {
		color: var(--color-primary);
	}

	a:hover {
		text-decoration: underline;
	}

	h1 {
		margin: 0;
	}

	header {
		margin: 1rem 0;
	}

	article :global(img) {
		max-width: 100%;
		border-radius: 1.5rem;

		margin: 0 -1.5rem;
	}
</style>
