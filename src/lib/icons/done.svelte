<script lang="ts">
	export let size: string | undefined = undefined;
	export let className: string | undefined = undefined;
	export let width = size;
	export let height = size;
	export let color = 'currentColor';
	export let viewBox = '0 96 960 960';
</script>

<svg {width} {height} {viewBox} class={className}>
	<path
		fill={color}
		d="M378 815q-9 0-17.5-3.5T345 801L164 620q-14-14-14-34t14-34q14-14 33.5-14t34.5 14l146 146 350-349q14-14 33.5-14.5T795 349q14 14 14 34t-14 34L411 801q-7 7-15.5 10.5T378 815Z"
	/>
</svg>
