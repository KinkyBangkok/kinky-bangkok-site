<script lang="ts">
	import { supabase } from '$lib/Auth/SupabaseClient';
	import type { Ticket } from '$lib/tickets/Ticket';
	import { onMount } from 'svelte';
	import TicketRow from './TicketRow.svelte';

	let tickets: Ticket[] = [];
	let loading = false;

	onMount(() => {
		getTickets();
	});

	async function getTickets() {
		loading = true;
		tickets = [];
		try {
			const result = await supabase.from('ticket').select();
			tickets = result.data;
		} catch (err) {
			console.error(err);
		}
		loading = false;
	}
</script>


<h1 class="font-bold text-lg mb-4 mt-8">Tickets</h1>

<div class="text-right">
	<a class="btn btn-primary" href="/u/tickets/create">Create Ticket</a>
</div>

{#if loading}
	<div>Getting tickets...</div>
{/if}

<div class="mt-8 flex flex-col gap-2">
	{#each tickets as ticket}
		<TicketRow {ticket} />
	{/each}
</div>

<style>
	.btn {
		@apply px-4 py-2 font-semibold bg-slate-600 text-slate-300 hover:bg-slate-500 hover:text-slate-200 rounded transition-colors;
	}

	.btn-primary {
		@apply bg-red-700 hover:bg-red-600;
	}
</style>
