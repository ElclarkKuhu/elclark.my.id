<script lang="ts">
	export let size: string | undefined = undefined
	export let width = size
	export let height = size
	export let color = 'currentColor'
	export let viewBox = '0 -960 960 960'
	export let style = ''
</script>

<svg {width} {height} {viewBox} {style}>
	<path fill={color} d="m304-82-56-57 343-343-343-343 56-57 400 400L304-82Z" />
</svg>

<!-- <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m304-82-56-57 343-343-343-343 56-57 400 400L304-82Z"/></svg> -->
