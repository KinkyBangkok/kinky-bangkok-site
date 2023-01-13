<script>
	import { base } from '$app/paths';
	import Navbar from './Navbar.svelte';
</script>

<svelte:head>
	<title>Kinky Bangkok</title>
	<meta name="description" content="Kinky Bangkok is a community for Kink, BDSM and fetish in Bangkok" />
</svelte:head>

<main class="h-full flex justify-center text-center flex-col">
	<div class="text-center w-full mb-4">
		<img src="{base}/Logo_Vector_Red.png" class="m-auto sm:max-w-[300px] max-w-[50%]" alt="The Logo" />
	</div>

	<article class="text-white max-w-2xl mx-auto px-12 my-4">
		<b>Kinky Bangkok</b> - KBK for short - is a community based in Bangkok focused on Kink, BDSM and
		Sex. We are open to locals, expats, visitors and new faces from all around the world. We have regular
		events in Bangkok.
	</article>

	<article class="text-white max-w-2xl mx-auto px-12 my-4">
		<h2 class="mb-4">Upcoming Event:</h2>
		<a class="bg-kbk-red inline-block text-black active:text-white font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
			type="button" href="/valentinedebauchery">Valentine Debauchery 11th&nbsp;February&nbsp;2023</a>
	</article>

	<Navbar />
</main>
