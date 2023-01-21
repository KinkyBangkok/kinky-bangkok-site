<script lang="ts">
	import Guard from '$lib/Auth/guard.svelte';
	import UserNavbar from './UserNavbar.svelte';
</script>

<div class="h-full py-0  sm:py-10 md:py-20">
	<UserNavbar />

	<div class="w-11/12 max-w-4xl mt-8 m-auto">
		<Guard>
			<slot />
		</Guard>
	</div>
</div>
