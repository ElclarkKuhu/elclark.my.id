<script>
	let showModal = true;
	let closable = false;
</script>

{#if showModal}
	<div class="modal-overlay">
		<div class="modal-content">
			<h1>Website Maintenance</h1>
			<p>
				We are currently performing maintenance on our website to improve its performance and
				functionality. We apologize for any inconvenience this may cause and appreciate your
				patience while we work to improve your online experience.
			</p>
			<p>
				If you are interested in following our progress or contributing to the project, you can
				check out our
				<a href="https://github.com/ElclarkCodes/Elclark">GitHub repository</a>.
			</p>
			<p>We will be back online as soon as possible. Thank you for your understanding.</p>
			{#if closable}
				<div class="button-right">
					<button on:click={() => (showModal = false)}>Okay!</button>
				</div>
			{/if}
		</div>
	</div>
{/if}

<style>
	.modal-overlay {
		display: flex;
		align-items: center;
		justify-content: center;

		position: fixed;

		top: 0;
		left: 0;
		right: 0;
		bottom: 0;

		background-color: rgba(0, 0, 0, 0.25);
		z-index: 1000;
	}

	.modal-content {
		max-width: 32rem;
		margin: 1rem;
		padding: 2rem 3rem;

		border-radius: 2rem;
		background-color: rgb(32, 26, 26);
		box-shadow: 0 0 0.25rem rgba(32, 26, 26);
	}

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

	.button-right {
		width: 100%;
		text-align: right;
	}

	button {
		font-family: inherit;
		font-size: inherit;
		font-weight: 500;

		border: none;
		border-radius: 2rem;
		color: rgb(255, 179, 179);
		background-color: transparent;

		padding: 0.5rem 2rem;
		margin-top: 0.5rem;

		transition: background-color 200ms ease;
	}

	button:hover {
		background-color: rgba(237, 224, 223, 0.1);
	}
</style>
