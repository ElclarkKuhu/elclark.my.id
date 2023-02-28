<script>
	import Modal from '$lib/modal.svelte';
	import Container from '$lib/container.svelte';
	import Trailer from '$lib/trailer.svelte';
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

<Container>
	<slot />
</Container>

<Trailer />
