<script lang="ts">
	export let size: string | undefined = '24px'
	export let width = size
	export let height = size
	export let color = 'currentColor'
	export let viewBox = '0 -960 960 960'
	export let style = ''
</script>

<svg {width} {height} {viewBox} {style}>
	<path
		fill={color}
		d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm640-480L501-453q-5 3-10.5 4.5T480-447q-5 0-10.5-1.5T459-453L160-640v400h640v-400ZM480-520l320-200H160l320 200ZM160-640v10-59 1-32 32-.5 58.5-10 400-400Z"
	/>
</svg>
