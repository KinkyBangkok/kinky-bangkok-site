<script lang="ts">
	import { fade } from 'svelte/transition';
	import { clickOutside } from './clickOutside';

	export let style: 'dark' | 'light' = 'dark';
	export let isOpen = false;
	export let align: 'left' | 'right' = 'left';
	// export let valign: 'top' | 'bottom' = 'top';

	const menuClick = (event: MouseEvent) => {
		const clickables = ['BUTTON', 'A'];
		if (event.target instanceof HTMLElement && clickables.includes(event.target.tagName)) {
			isOpen = false;
		}
	};
</script>

<div class="relative" use:clickOutside on:outclick={() => (isOpen = false)}>
	<button on:click={() => (isOpen = !isOpen)} type="button" class="btn btn-round">
		<slot name="label">DROPDOWN</slot>
	</button>

	{#if isOpen}
		<button
			transition:fade={{ duration: 100 }}
			on:click={menuClick}
			class="menu absolute left-0 border z-20 w-60 flex flex-col py-2 shadow rounded {style}"
			class:left-0={align === 'left'}
			class:right-0={align === 'right'}
		>
			<slot name="menu">
				<div class="">slot "menu"</div>
			</slot>
		</button>
	{/if}
</div>

<style>
	.dark {
		@apply border-neutral-600  bg-slate-900;
	}

	.light {
		@apply border-neutral-300  bg-neutral-50;
	}
</style>
