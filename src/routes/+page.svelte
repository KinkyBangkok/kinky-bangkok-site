<script lang="ts">
	import Navbar from './Navbar.svelte';
	import '../app.postcss';
</script>

<svelte:head>
	<title>Kinky Bangkok - modern BDSM community in Thailand</title>
	<meta
		name="description"
		content="We are a community based in Bangkok focused on Kink and BDSM. We are open to locals, expats, visitors and new faces from all around the world"
	/>
</svelte:head>

<main class="h-full flex justify-center text-center flex-col">
	<div class="text-center w-full mb-4">
		<img
			src="/Logo_Vector_Red.png"
			class="m-auto sm:max-w-[260px] max-w-[50%]"
			alt="The Logo"
		/>
	</div>

	<h1 class="text-white max-w-2xl mx-auto px-12 my-4">
		<b>Kinky Bangkok</b> - KBK for short - is a community based in Bangkok focused on Kink, BDSM and
		Sex. We are open to locals, expats, visitors and new faces from all around the world. We have regular
		play parties, bdsm workshops and fetish events in Bangkok.
	</h1>

	<Navbar />
</main>
