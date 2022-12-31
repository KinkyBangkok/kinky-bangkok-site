<script lang="ts">
	import { fade } from 'svelte/transition';

	export let text: string = '';

	$: show = !!text;
</script>

{#if show}
	<div transition:fade={{ duration: 75 }} class="text-rose-500 absolute text-sm">{text}</div>
{/if}
