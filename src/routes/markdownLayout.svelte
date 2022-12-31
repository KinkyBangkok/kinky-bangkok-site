<script lang="ts">
	import Navbar from './Navbar.svelte';
</script>

<div class="flex flex-col h-full">
	<div class="mt-8 mb-8">
		<Navbar />
	</div>

	<div class="flex justify-center">
		<div class="prose w-full max-w-4xl my-12 px-8 py-8 bg-slate-100">
			<slot />
		</div>
	</div>

	<div class="flex-1" />
	<div class="text-center py-4 text-sm text-slate-800">Kinky Bangkok - 2023</div>
</div>
