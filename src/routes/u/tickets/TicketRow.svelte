<script lang="ts">
	import type { Ticket } from '$lib/tickets/Ticket';

	export let ticket: Ticket;
</script>

<a
  href="/u/tickets/details/{ticket.reference}"
	class="bg-slate-700 border border-slate-100 rounded px-4 py-2 text-left hover:bg-slate-800 hover:border-slate-600 transition-colors flex gap-4 items-center"
>
	<!-- Col 1 -->
	<div class="w-20">
		<div class="font-bold font-mono">
			{ticket.reference}
		</div>
	</div>

	<!-- col 2 -->
	<div class="grow">
		<div>
			<span class="label">Assigned to:</span>
			{ticket.person}
		</div>
		<div>
			<span class="label">Event:</span>
			{ticket.event_name}
		</div>
	</div>
	<div class="text-right">
    <div class="px-2 py-0.5 rounded text-sm {ticket.status}">
      {ticket.status}
    </div>
	</div>
</a>

<style>
	.label {
		@apply text-sm text-slate-400;
	}

  .paid {
    @apply bg-green-700 text-white;
  }

  .new {
    @apply bg-red-500 text-white;
  }

  .pending {
    @apply bg-orange-500 text-white;
  }

  .canceled {
    @apply bg-slate-600 text-white;
  }
</style>
