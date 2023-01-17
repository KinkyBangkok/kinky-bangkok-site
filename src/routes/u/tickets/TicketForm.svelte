<script lang="ts">
	import { goto } from '$app/navigation';
	import { supabase } from '$lib/Auth/SupabaseClient';
	import Input from '$lib/Forms/Input.svelte';
	import Select from '$lib/Forms/Select.svelte';
	import HoldOn from '$lib/HoldOn.svelte';
	import { nanoidci } from '$lib/nanoidCi';
	import { TicketStatus, type Ticket } from '$lib/tickets/Ticket';

	let busy = false;
	let errors: string[] = [];

	export let ticket: Ticket = {
		id: undefined,
		created_at: undefined,
		person: '',
		reference: nanoidci(),
		status: TicketStatus.PENDING,
		event_name: 'valentines'
	};

	$: isNew = !ticket.id;

	function isValid(): boolean {
		errors = [];
		if (!ticket.person) {
			errors.push('Please add a Person');
		}
		if (!ticket.reference) {
			errors.push('Please set a reference');
		}

		return errors.length === 0;
	}

	async function submit() {
		if (!isValid()) return;
		busy = true;
		try {
			if (isNew) {
				await saveNew();
			} else {
				await update();
			}
		} catch (err) {
			console.error(err);
			errors.push('Could not save.');
		}

		busy = false;
	}

	async function saveNew() {
		const result = await supabase.from('ticket').insert(ticket);
		if (result.error) throw result.error;
		goto('/u/tickets');
	}

	async function update() {
		const result = await supabase.from('ticket').update(ticket).eq('id', ticket.id);
		if (result.error) throw result.error;
	}
</script>

<div class="relative">
	<form
		class="w-full max-w-xl transition-opacity opacity-100"
		novalidate
		on:submit|preventDefault={submit}
	>
		<fieldset disabled={busy} class="w-full ">
			<div class="md:flex md:items-baseline">
				<div class="md:w-1/3" />
				<div class="md:w-2/3">
					<h1 class="font-bold text-lg mb-4 mt-8">
						{#if isNew}
							Create New Ticket
						{:else}
							Update Ticket {ticket.reference}
						{/if}
					</h1>
				</div>
			</div>

			<div class="md:flex md:items-baseline mb-6">
				<div class="md:w-1/3">
					<label class="block text-gray-300 font-bold md:text-right mb-1 md:mb-0 pr-4" for="ref">
						Reference
					</label>
				</div>
				<div class="md:w-2/3 relative">
					<Input name="ref" bind:value={ticket.reference} readonly={true} />
				</div>
			</div>
			<div class="md:flex md:items-baseline mb-6">
				<div class="md:w-1/3">
					<label class="block text-gray-300 font-bold md:text-right mb-1 md:mb-0 pr-4" for="person">
						For Person
					</label>
				</div>
				<div class="md:w-2/3 relative">
					<Input bind:value={ticket.person} placeholder="e.g. Jacky" name="person" />
				</div>
			</div>
			<div class="md:flex md:items-start mb-6">
				<div class="md:w-1/3 mt-1">
					<label
						class="block text-gray-300 font-bold md:text-right mb-1 md:mb-0 pr-4"
						for="event-name"
					>
						Event
					</label>
				</div>
				<div class="md:w-2/3 relative">
					<Select bind:value={ticket.event_name} name="event-name" values={['valentines']} />
				</div>
			</div>
			<div class="md:flex md:items-start mb-6">
				<div class="md:w-1/3 mt-1">
					<label class="block text-gray-300 font-bold md:text-right mb-1 md:mb-0 pr-4" for="status">
						Status
					</label>
				</div>
				<div class="md:w-2/3 relative">
					<Select bind:value={ticket.status} name="status" values={Object.values(TicketStatus)} />
				</div>
			</div>

			<div class="md:flex md:items-baseline">
				<div class="md:w-1/3" />
				<div class="md:w-2/3">
					<div class="flex items-baseline gap-4">
						<button
							class="bg-kbk-red inline-block text-red-200 active:text-white font-bold uppercase text-base px-4 sm:px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
							type="submit"
						>
							{#if isNew}
								Create
							{:else}
								Update
							{/if}
						</button>
						<HoldOn show={busy} />
					</div>
					{#each errors as error}
						<div class="text-rose-500">{error}</div>
					{/each}
				</div>
			</div>
		</fieldset>
	</form>
</div>
