<script>
	import Modal from '$lib/modal.svelte';
	import Navigation from '$lib/navigation.svelte';
</script>

<Modal closable="Okay!">
	<h1>Website Maintenance</h1>
	<p>
		We are currently performing maintenance on our website to improve its performance and
		functionality. We apologize for any inconvenience this may cause and appreciate your patience
		while we work to improve your online experience.
	</p>
	<p>
		If you are interested in following our progress or contributing to the project, you can check
		out our
		<a href="https://github.com/ElclarkCodes/Elclark">GitHub repository</a>.
	</p>
	<p>We will be back online as soon as possible. Thank you for your understanding.</p>
</Modal>

<Navigation />

<slot />

<style>
	h1 {
		margin-top: 0;
		color: rgb(255, 179, 179);
	}

	a {
		color: currentColor;

		transition: color 200ms ease;
	}

	a:hover {
		color: rgb(255, 179, 179);
	}
</style>
