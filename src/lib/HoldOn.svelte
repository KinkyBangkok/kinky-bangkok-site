<script lang="ts">
	import { fade } from 'svelte/transition';

	export let show: boolean;

	let dots = '';
	let dotInterval: ReturnType<typeof setInterval>;

	$: if (show) startAnimation();
	$: if (!show) stopAnimation();

	function startAnimation() {
		dotInterval = setInterval(() => {
			dots += '.';
			if (dots.length === 4) dots = '';
		}, 250);
	}

	function stopAnimation() {
		if (dotInterval) {
			clearInterval(dotInterval);
			dotInterval = undefined;
		}
	}
</script>

{#if show}
	<div transition:fade>
		Hold on{dots}
	</div>
{/if}
