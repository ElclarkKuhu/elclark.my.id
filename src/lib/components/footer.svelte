<script lang="ts">
	import { version, dev } from '$app/environment';
	import { PUBLIC_PREVIEW } from '$env/static/public';
</script>

<footer class="body-medium">
	<p>
		<a
			href="https://github.com/ElclarkKuhu/elclark.my.id"
			target="_blank"
			rel="noopener noreferrer"
		>
			Source Code
		</a>

		&bull;

		<span>v{version}</span>

		&bull;

		{#if !dev}
			<span>Production</span>
		{:else if PUBLIC_PREVIEW === 'yes'}
			<span>Public Preview</span>
		{:else}
			<span>Development</span>
		{/if}
	</p>
	<p>Copyright &copy; 2023 <a href="https://elclark.my.id/">Elclark</a>.</p>
</footer>

<style>
	footer {
		text-align: center;
		margin: 1rem;
	}

	a {
		color: currentColor;
	}

	a:hover {
		text-decoration: underline;
	}

	p {
		margin: 0.25rem;
	}

	span {
		margin: 0 0.25rem;
	}
</style>
