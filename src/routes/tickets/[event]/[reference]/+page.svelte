<script lang="ts">
	import type { Ticket } from '$lib/tickets/Ticket';
	import TicketView from '$lib/tickets/TicketView.svelte';

	export let data: { ticket: Ticket };

	$: ticket = data.ticket;
</script>

<div class="flex justify-center items-center bg-slate-700 h-full">
	<TicketView {ticket} />
</div>
