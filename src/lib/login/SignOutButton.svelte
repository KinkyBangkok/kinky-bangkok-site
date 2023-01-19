<script lang="ts">
	import { supabase } from '$lib/Auth/SupabaseClient';

	async function logout() {
		await supabase.auth.signOut();
	}
</script>

<button
	on:click={logout}
	class="transition-colors flex font-semibold text-red-600 gap-2 justify-center items-center w-60 px-4 py-2 rounded hover:text-red-500"
>
	<div>Sign out</div>
</button>
