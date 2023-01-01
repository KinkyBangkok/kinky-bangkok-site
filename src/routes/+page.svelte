<script>
	import { base } from '$app/paths';
	import Navbar from './Navbar.svelte';
</script>

<svelte:head>
	<title>Kinky Bangkok</title>
	<meta
		name="description"
		content="Kinky Bangkok is a community for Kink, BDSM and fetish in Bangkok"
	/>
</svelte:head>

<main class="h-full flex justify-center text-center flex-col">
	<div class="text-center w-full mb-4">
		<img src="{base}/logo.png" class="m-auto" alt="The Logo" />
	</div>

	<article class="max-w-2xl mx-auto px-12 my-4">
		<b>Kinky Bangkok</b> - KBKK for short - is a community based in Bangkok focused on Kink, BDSM and Sex.
		We are open to locals, expats, visitors and new faces from all around the world. We have regular
		events in Bangkok.
	</article>

	<Navbar />
</main>
