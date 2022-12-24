<script>
	export let show = true;
	export let closable = '';
	export let onclose = () => {};

	function close() {
		show = false;
		onclose();
	}
</script>

{#if show}
	<div class="modal-overlay">
		<div class="modal-content">
			<slot />
			{#if closable}
				<div class="button-right">
					<button on:click={close}>{closable}</button>
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

		padding: 0.5rem 1.5rem;
		margin-top: 0.5rem;

		transition: background-color 200ms ease;
	}

	button:hover {
		background-color: rgba(237, 224, 223, 0.1);
	}
</style>
