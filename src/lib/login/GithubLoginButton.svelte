<script lang="ts">
	import { supabase } from '$lib/Auth/SupabaseClient';
	import GithubIcon from './GithubIcon.svelte';

	export let disabled = false;

	async function githubSignin() {
		await supabase.auth.signInWithOAuth({
			provider: 'github',
			options: { redirectTo: window.location.href }
		});
	}
</script>

<button
	{disabled}
	type="button"
	on:click={githubSignin}
	class="active:bg-slate-400 hover:bg-slate-300 transition-colors flex w-full font-semibold text-slate-900 gap-2 justify-center items-center bg-slate-200 px-4 py-2 rounded"
>
	<div class="w-4 h-4"><GithubIcon /></div>
	<div>GitHub</div>
</button>
