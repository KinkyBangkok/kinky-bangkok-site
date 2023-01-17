<script lang="ts">
	import { page } from '$app/stores';
	import { supabase } from '../../lib/Auth/SupabaseClient';
	import Input from '../../lib/Forms/Input.svelte';
	import HoldOn from '../../lib/HoldOn.svelte';
	import ValidationMessage from '../../lib/ValidationMessage.svelte';

	let email: string;
	let error = '';
	let state: 'idle' | 'requesting' | 'done' = 'idle';

	$: redirectTo = $page.url.origin + '/u/password-reset';

	async function reset() {
		error = '';
		if (!email) error = 'Email is required';

		if (error) return;

		console.log(redirectTo);

		state = 'requesting';
		try {
			const result = await supabase.auth.resetPasswordForEmail(email, {
				redirectTo
			});
			if (result.error) throw result.error;
			state = 'done';
		} catch (err) {
			console.error(err);
			error = "That didn't work";
			state = 'idle';
		}
	}
</script>

<div class="flex w-full gap-4 justify-center">
	{#if state === 'idle'}
		<form class="card" on:submit|preventDefault={reset}>
			<h1 class="text-center font-semibold text-xl mb-8">Request Password Reset</h1>
			<div>
				<Input name="email" bind:value={email} placeholder="Email Address" />
			</div>
			<div class="mt-4">
				<button
					type="submit"
					class="active:bg-slate-900 hover:bg-slate-700 transition-colors flex w-full font-semibold text-slate-200 gap-2 justify-center items-center mt-4 bg-slate-800 px-4 py-2 rounded"
				>
					<div>Send Email</div>
				</button>
				<ValidationMessage text={error} />
			</div>
		</form>
	{:else if state === 'requesting'}
		<HoldOn show={true} />
	{:else}
		<div class="text-lg font-semibold">Please check your email</div>
	{/if}
</div>

<style>
	.card {
		@apply border border-slate-400 bg-slate-900 p-12 rounded-xl w-96;
	}
</style>
