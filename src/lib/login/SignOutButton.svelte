<script lang="ts">
	import { supabase } from '$lib/Auth/SupabaseClient';

	async function logout() {
		await supabase.auth.signOut();
	}
</script>

<button
	on:click={logout}
	class="active:bg-red-200 hover:bg-red-100 transition-colors flex font-semibold text-red-600 gap-2 justify-center items-center mt-4 w-60 bg-white px-4 py-2 rounded"
>
	<div>Sign out</div>
</button>
