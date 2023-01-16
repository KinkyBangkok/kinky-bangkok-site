<script lang="ts">
	import { supabase } from '$lib/Auth/SupabaseClient';
	import GithubIcon from './GithubIcon.svelte';

	async function githubSignin() {
		await supabase.auth.signInWithOAuth({
			provider: 'github',
			options: { redirectTo: window.location.href }
		});
	}
</script>

<button
	on:click={githubSignin}
	class="active:bg-red-200 hover:bg-red-100 transition-colors flex font-semibold text-red-600 gap-2 justify-center items-center mt-4 w-60 bg-white px-4 py-2 rounded"
>
	<div class="w-4 h-4"><GithubIcon /></div>
	<div>GitHub</div>
</button>
