<script lang="ts">
	import { version, dev } from '$app/environment'
</script>

<footer class="body-medium container body-small">
	<p>
		<a
			href="https://github.com/ElclarkKuhu/elclark.my.id"
			aria-label="Source Code"
			target="_blank"
			rel="noopener noreferrer"
		>
			Source Code
		</a>

		&bull;

		<span>v{version}</span>

		&bull;

		{#if dev}
			<span>Development</span>
		{:else}
			<span>Production</span>
		{/if}
	</p>
	<p>Copyright &copy; 2023 <a href="https://elclark.my.id/">Elclark</a></p>
</footer>

<style>
	footer {
		text-align: center;
		margin: 1rem auto;
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
