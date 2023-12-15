<script lang="ts">
	import Meta from '$lib/components/meta.svelte'
	import Footer from '$lib/components/footer.svelte'
</script>

<Meta
	image="https://static.elclark.my.id/image/elclark.webp"
	keywords={['landing', 'home', 'homepage']}
/>

<section class="first">
	<div class="container center">
		<div class="hero">
			<span class="greeting body-large font-500 primary-text">Hello, it's me</span>
			<h1 class="name">Elclark Kuhu<span class="primary-text">.</span></h1>
			<p class="about">
				I'm a full-stack developer and designer. I'm passionate about technology and enjoy gaming
				and music in my free time. My goals is coming up with awesome solutions and using technology
				to help out those who need it.
			</p>

			<div class="buttons">
				<button class="primary">Contact Me</button>
				<button>Learn More</button>
			</div>
		</div>

		<div class="logo">
			<svg viewBox="0 0 1024 1024">
				<path
					d="M882.603 279.109L768.795 344.792C775.931 355.672 782.366 366.997 788.059 378.698L901.948 312.942C895.998 301.363 889.55 290.085 882.603 279.109ZM239.099 650.633L125.313 716.338C131.379 727.874 137.942 739.088 145 749.982L258.896 684.233C251.593 673.463 244.98 662.241 239.099 650.633ZM818.75 512.558C818.75 681.666 681.616 818.75 512.5 818.75C458.739 818.831 405.912 804.696 359.375 777.778L234.17 850.06C312.458 914.803 410.909 950.153 512.5 950C754.124 950 950 754.124 950 512.5C950.009 488.281 948.021 464.103 944.057 440.21L818.75 512.558ZM206.301 518.012C206.301 516.175 206.25 514.367 206.25 512.5C206.25 343.334 343.333 206.25 512.5 206.25C568.151 206.163 622.764 221.313 670.416 250.059L794.79 178.25C715.918 111.441 615.864 74.8456 512.5 75.0005C270.876 75.0005 75 270.876 75 512.5C74.9891 538.444 77.273 564.338 81.825 589.879L206.301 518.012Z"
					fill="#FFB3B3"
				/>
			</svg>
		</div>
	</div>
</section>

<Footer />

<style>
	.container {
		display: grid;
		grid-template-rows: 1fr;
		grid-template-columns: 1fr 1fr;

		gap: 0.5rem;
		padding: 0.5rem;
	}

	.first {
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: center;

		position: relative;

		width: 100%;
		max-width: 100vw;
		max-width: 100svw;
		height: 100vh;
		height: 100svh;

		overflow: hidden;
	}

	.logo {
		display: flex;
		align-items: center;
		justify-content: center;

		width: 100%;
		height: 100%;
	}

	svg {
		width: 32rem;
		height: 32rem;

		filter: drop-shadow(0 0 1.5rem var(--color-primary));
		animation: spinnin 40s linear infinite;
	}

	.hero {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: start;

		width: max-content;
		margin: 0;
		padding: 2.5rem 0;
	}

	/* .greeting {
		filter: drop-shadow(0 0 0.5rem var(--color-primary));
	} */

	.name {
		margin: 0.5rem 0 0 0;

		font-size: 4rem;
		line-height: 4rem;
		font-weight: 700;
		letter-spacing: 1px;
	}

	.about {
		margin: 0.5rem 0;
		max-width: 45ch;

		text-align: justify;
	}

	.buttons {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;

		gap: 0.5rem;
		margin-top: 1rem;
	}

	button {
		font: inherit;
		font-weight: 500;

		margin-top: 1rem;
		padding: 0.5rem 1.5rem;

		border: none;
		border-radius: 0.5rem;

		color: inherit;
		background-color: var(--color-surface-2);
		box-shadow: 0 0 0.25rem 1px var(--color-surface-2);

		transition: all 400ms ease;
	}

	button:hover {
		cursor: pointer;
		box-shadow: 0 0 0.75rem 0.15rem var(--color-surface-2);
		background-color: var(--color-surface-5);
	}

	button:active {
		transform: scale(0.98);
		transition: none;
	}

	button.primary {
		box-shadow: 0 0 0.25rem 1px var(--color-primary);

		color: var(--color-on-primary);
		background-color: var(--color-primary);
	}

	button.primary:hover {
		background-color: var(--color-primary);
		box-shadow: 0 0 0.75rem 0.15rem var(--color-primary);
	}

	@keyframes spinnin {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}
</style>
