<script lang="ts">
	import type { Ticket } from './Ticket';
	import TicketView from './TicketView.svelte';

	export let data: { ticket: Ticket };

	$: ticket = data.ticket;
</script>

<TicketView {ticket} />
