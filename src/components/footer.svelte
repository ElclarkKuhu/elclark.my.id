<script lang="ts">
	import dayjs from 'dayjs';
	import { version, dev } from '$app/environment';

	function buildDate() {
		return dayjs().format('YYYY/MM/DD');
	}
</script>

<footer class="body-medium">
	<p>
		<a href="https://github.com/elclarkcodes/elclark" target="_blank" rel="noopener noreferrer"
			>Source Code</a
		>
		&bull;
		<span>v{version}</span>
		&bull;
		<span>{buildDate()}</span>
		&bull;
		{#if dev}
			<span>Development</span>
		{:else}
			<span>Produnction</span>
		{/if}
	</p>
	<p>Copyright &copy; 2023 <a href="https://elclark.my.id/">Elclark</a>.</p>
</footer>

<style>
	footer {
		text-align: center;
		margin: 1rem;
		padding-bottom: 2rem;
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
