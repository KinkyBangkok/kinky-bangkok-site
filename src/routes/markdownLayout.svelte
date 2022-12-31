<script lang="ts">
	import Navbar from './Navbar.svelte';
</script>

<div class="mt-8 mb-8">
  <Navbar />
</div>
<div class="flex justify-center">
  <div class="prose w-full max-w-4xl mx-12 px-8 py-8 bg-slate-100">
    <slot />
  </div>
</div>