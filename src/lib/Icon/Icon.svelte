<script>
	export let icon = '';
	export let rotate = 0;
	export let size = '';
</script>

<svg
	class="c-icon"
	aria-hidden="true"
	class:rotate180={rotate === 180}
	class:c-icon--small={size === 'small'}
>
	<use xlink:href={`/__spritemap#sprite-icon-${icon}`}></use>
</svg>

<style lang="scss">
	svg {
		display: block;
		inline-size: 1.5rem;
		block-size: 1.5rem;
		fill: currentcolor;
		transform-origin: center;
		transition: rotate var(--base-transition-duration-short) var(--base-timing-function);
	}

	.rotate180 {
		rotate: 180deg;
	}

	.c-icon--small {
		inline-size: var(--space-small);
		block-size: var(--space-small);
	}
</style>
