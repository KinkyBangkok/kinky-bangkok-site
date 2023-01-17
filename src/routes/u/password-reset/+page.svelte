<script lang="ts">
	import { fade } from 'svelte/transition';
	import { supabase } from '../../../lib/Auth/SupabaseClient';
	import Input from '../../../lib/Forms/Input.svelte';
	import HoldOn from '../../../lib/HoldOn.svelte';
	import ValidationMessage from '../../../lib/ValidationMessage.svelte';

	let password: string;
	let password2: string;
	let busy = false;
	let error = '';
	let done = false;

	async function updatePass() {
		done = false;
		error = '';
		if (password !== password2) error = 'Passwords do not match.';
		if (!password || !password2) error = 'Password cannot be empty.';
		if (password.length < 6) error = 'Password needs to be at least 6 characters.';

		if (error) return;

		busy = true;
		try {
			const result = await supabase.auth.updateUser({ password });
			if (result.error) throw result.error;
			done = true;
      setTimeout(() => {
        done = false;
      }, 2000);
		} catch (err) {
			console.error(err);
			error = 'Something went wrong.';
		}
		busy = false;
	}
</script>

<div class="flex w-full gap-4 justify-center">
	<form class="card relative" on:submit|preventDefault={updatePass}>
		<h1 class="text-center font-semibold text-xl mb-8">Update your password</h1>
		<div class="mt-4">
			<Input
				disabled={busy}
				name="password"
				type="password"
				bind:value={password}
				placeholder="A strong password"
			/>
		</div>
		<div class="mt-4">
			<Input
				disabled={busy}
				name="password2"
				type="password"
				bind:value={password2}
				placeholder="Repeat it"
			/>
		</div>
		<div class="mt-4">
			<button
				disabled={busy}
				type="submit"
				class="active:bg-slate-900 hover:bg-slate-700 transition-colors flex w-full font-semibold text-slate-200 gap-2 justify-center items-center mt-4 bg-slate-800 px-4 py-2 rounded"
			>
				<div>Change Password</div>
			</button>

			<ValidationMessage text={error} />
		</div>

		<div class="absolute">
			<HoldOn show={busy} />
			{#if done}
				<div out:fade in:fade={{ delay: 150 }}>Password has been updated!</div>
			{/if}
		</div>
	</form>
</div>

<style>
	.card {
		@apply border border-slate-400 bg-slate-900 p-12 rounded-xl w-96;
	}
</style>
