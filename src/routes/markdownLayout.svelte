<script lang="ts">
	import { fly } from 'svelte/transition';
	import Header from './Header.svelte';
	import Navbar from './Navbar.svelte';
</script>

<div class="flex flex-col h-full">
	<div class="mt-8">
		<Header />
		<Navbar />
	</div>

	<main class="flex justify-center">
		<article
			class="prose prose-invert prose-headings:text-kbk-red w-full max-w-4xl my-12 px-8 py-8 bg-kbk-black rounded-lg border-2 border-kbk-red"
			in:fly={{ y: -50, duration: 200, delay: 250 }}
			out:fly={{ y: 50, duration: 200 }}
		>
			<slot />
		</article>
	</main>

	<div class="flex-1" />
	<div class="text-center py-4 text-sm text-white">Kinky Bangkok - 2023</div>
</div>
