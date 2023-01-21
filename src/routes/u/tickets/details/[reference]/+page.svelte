<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { supabase } from '$lib/Auth/SupabaseClient';
	import HoldOn from '$lib/HoldOn.svelte';
	import type { Ticket } from '$lib/tickets/Ticket';
	import TicketView from '$lib/tickets/TicketView.svelte';
	import { error } from '@sveltejs/kit';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import TicketForm from '../../TicketForm.svelte';

	let ticket: Ticket;
	let state: 'idle' | 'confirming' | 'deleting' = 'idle';

	onMount(async () => {
		if (!browser) return;

		const result = await supabase.from('ticket').select().eq('reference', $page.params.reference);
		if (result.error) {
			throw error;
		}

		if (result.data.length === 0) {
			throw 'Not found: ' + $page.params.reference;
		}

		ticket = result.data[0];
	});

	async function confirmDelete() {
		state = 'deleting';

		try {
			await supabase.from('ticket').delete().eq('id', ticket.id);
			goto('/u/tickets');
		} catch (err) {
			console.error(err);
		}

		console.log('Totally soing it.');
		state = 'idle';
	}
</script>

{#if ticket}
	<div class="flex flex-col gap-4 sm:flex-row">
		<div class="grow">
			<TicketForm {ticket} />
		</div>

		<div class="self-center">
			<a href="/tickets/{ticket.event_name}/{ticket.reference}">
				<TicketView {ticket} />
			</a>
		</div>
	</div>

	<div class="border-t border-slate-300 mt-4 pt-4 mb-4">
		<h2 class="text-red-500 text-xl font-semibold">Danger Zone</h2>

		{#if state === 'idle'}
			<div class="mt-4" in:fade={{ delay: 120, duration: 100 }} out:fade={{ duration: 100 }}>
				<button
					on:click={() => (state = 'confirming')}
					class="border border-kbk-red active:border-red-300 bg-slate-900 hover:bg-slate-700 active:bg-slate-800 inline-block text-red-500 active:text-red-300 font-bold uppercase text-base px-4 sm:px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
					>Delete Ticket</button
				> This cannot be undone.
			</div>
		{:else if state === 'confirming'}
			<div in:fade={{ delay: 120, duration: 100 }} out:fade={{ duration: 100 }}>
				<div>Are you sure you want to delete this ticket permanently?</div>
				<div class="mt-4 flex gap-16">
					<button
						on:click={() => (state = 'idle')}
						class="border border-kbk-red active:border-red-300 bg-slate-900 hover:bg-slate-700 active:bg-slate-800 inline-block text-red-500 active:text-red-300 font-bold uppercase text-base px-4 sm:px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
						>Cancel</button
					>
					<button
						on:click={confirmDelete}
						class="bg-kbk-red inline-block text-red-200 active:text-white font-bold uppercase text-base px-4 sm:px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
						>Confirm Delete</button
					>
				</div>
			</div>
		{:else}
			<HoldOn show={true} />
		{/if}
	</div>
{/if}
