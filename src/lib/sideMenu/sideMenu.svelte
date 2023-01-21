<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { clickOutside } from '../Dropdown/clickOutside';

	export let open = false;
</script>

{#if open}
	<!-- Overlay -->
	<div
		transition:fade={{ duration: 50 }}
		class="fixed top-0 left-0 w-full bg-slate-800 opacity-70 h-full z-40"
	/>

	<!-- Content -->
	<div
		transition:fly={{ x: -200 }}
		class="fixed top-0 left-0 w-60 bg-slate-300 shadow h-full z-50 text-slate-900"
		use:clickOutside
		on:outclick={() => (open = false)}
	>
		<slot />
	</div>
{/if}
