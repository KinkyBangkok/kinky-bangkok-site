<script lang="ts">
	import { base } from '$app/paths';
	import type { Ticket } from '$lib/tickets/Ticket';
	import QRCode from 'qrcode';
	import { onMount } from 'svelte';

	export let ticket: Ticket;

	let canvas: HTMLCanvasElement;

	onMount(() => {
		const url = `https://kinkybangkok.com/tickets/${ticket.event_name}/${ticket.reference}`;
		QRCode.toCanvas(canvas, url, function (error) {
			if (error) console.error(error);
		});
	});
</script>

<div class="ticket">
	<div class="p-4 bg-white">
		<canvas bind:this={canvas} id="canvas" class="m-auto" />

		<div class="text-sm text-slate-600">{ticket.reference.toUpperCase()}</div>
	</div>
	<div class="bg-slate-900 p-4 text text-slate-100">
		<div class="text-lg font-semibold leading-5">
			<!-- TODO Make this dynamic -->
			Valentine Debauchery
		</div>
		<div class="text-slate-300 text-sm">11 February 2023</div>
	</div>
	<div class="bg-white py-6">
		<img src="{base}/logo.png" class="w-24 m-auto py-4" alt="The Logo" />
	</div>
</div>

<style>
	.ticket {
		@apply border rounded shadow border-slate-700 inline-block text-center overflow-hidden m-auto;
	}
</style>
