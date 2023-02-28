<div>
	<slot />
</div>

<style>
	div {
		max-width: 420px;
		padding: 0 1rem;
		margin: 0 auto;
	}

	@media (min-width: 768px) {
		div {
			max-width: 720px;
		}
	}
</style>
