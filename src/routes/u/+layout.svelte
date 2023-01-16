<script lang="ts">
	import Guard from '../../lib/Auth/guard.svelte';
</script>

<div class="flex flex-col h-full w-full max-w-4xl m-auto">
  <Guard><slot /></Guard>
</div>