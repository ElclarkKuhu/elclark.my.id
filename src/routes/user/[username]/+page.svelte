<script lang="ts">
	import { PUBLIC_CDN } from '$env/static/public';

	import Meta from '$lib/components/meta.svelte';
	import Footer from '$lib/components/footer.svelte';
	import Post from '$lib/components/cards/blog.svelte';
	import FloatingBar from '$lib/components/floating-bar.svelte';

	import Verified from '$lib/icons/verified.svelte';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	export let data;

	async function getPosts() {
		const res = await fetch(`${PUBLIC_CDN}/user/posts/${data.username}.json`);
		const json = await res.json();

		return json;
	}

	let posts: any;

	onMount(async () => {
		posts = await getPosts();
	});
</script>

<Meta
	image={data.avatar}
	title={`Elclark - ${data.name}`}
	keywords={['user', 'users', data.name, data.username]}
/>

<div class="profile">
	<div class="banner">
		<!-- TODO: Customazible Banner -->
		<div class="info">
			<img class="avatar" src={data.avatar} alt={data.name} />
			<div class="meta">
				<h1 class="name headline-medium font-bold">{data.name}</h1>
				{#if data.verified}
					<span class="verified" aria-label="Verified User">
						<Verified size="1.75rem" />
					</span>
				{/if}
				<span class="username">@{data.username}</span>
			</div>
		</div>
	</div>
</div>

{#if data.bio}
	<h2 class="headline-small">About Me</h2>
	<div class="about">
		<p>
			{data.bio}
		</p>
	</div>
{/if}

{#if posts}
	<h2 class="headline-small" in:fly>My Posts</h2>
	<div class="posts" in:fly>
		{#each posts as post}
			<Post {...post} author={data} />
		{/each}
	</div>
{:else}
	<!-- TODO: Loading Spinner/Skeleton -->
{/if}

<FloatingBar />

<Footer />

<style>
	.about {
		background-color: var(--color-surface-1);
		padding: 1.5rem;
		border-radius: 1.5rem;
		margin: 0.5rem 0;
	}

	.about p {
		margin: 0;
	}

	h2 {
		margin: 1rem;
		margin-bottom: 0.5rem;
	}

	.banner {
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: flex-end;

		width: 100%;
		height: 17.5rem;
		border-radius: 1.5rem;
		margin-top: 1rem;
		background-color: var(--color-primary-container);
	}

	.info {
		display: flex;
		align-items: end;

		gap: 1rem;
		padding: 1rem;
	}

	.info .avatar {
		width: 7.5rem;
		height: 7.5rem;
		border-radius: 1rem;
		object-fit: cover;
	}

	.info .meta {
		column-gap: 0.5rem;
		display: grid;
		grid-template-areas: 'name verified' 'username username';
		padding: 1rem 0;
	}

	.info .meta .name {
		grid-area: name;
		margin: 0;

		line-height: 1.75rem;
	}

	.info .meta .verified {
		grid-area: verified;

		display: flex;
		align-items: center;
		color: #8ab4f8;
	}

	.info .meta .username {
		grid-area: username;

		font-size: 1.25rem;
		font-weight: 300;
		line-height: 1.25rem;

		opacity: 0.9;
	}
</style>
