<script lang="ts">
	import Input from '../Forms/Input.svelte';
	import GithubLoginButton from '../login/GithubLoginButton.svelte';
	import ValidationMessage from '../ValidationMessage.svelte';
	import { supabase } from './SupabaseClient';

	let email: string;
	let password: string;
	let busy = false;
	let error = '';

	async function passwordLogin() {
		error = '';
		if (!password) error = 'Password cannot be empty';
		if (!email) error = 'Email is required';

		if (error) return;

		busy = true;
		try {
			const result = await supabase.auth.signInWithPassword({ email, password });
      if (result.error) throw result.error;
			console.log(result);
		} catch (err) {
			console.error(err);
			error = 'Username or Password Incorrect';
		}
		busy = false;
	}
</script>

<div class="flex w-full gap-4 justify-center">
	<form class="card" on:submit|preventDefault={passwordLogin}>
		<h1 class="text-center font-semibold text-xl mb-8">Please log in</h1>
		<div>
			<Input disabled={busy} name="email" bind:value={email} placeholder="Email Address" />
		</div>
		<div class="mt-4">
			<Input
				disabled={busy}
				name="password"
				type="password"
				bind:value={password}
				placeholder="Password"
			/>
		</div>
		<div class="mt-4">
			<button
				disabled={busy}
				type="submit"
				class="active:bg-slate-900 hover:bg-slate-700 transition-colors flex w-full font-semibold text-slate-200 gap-2 justify-center items-center mt-4 bg-slate-800 px-4 py-2 rounded"
			>
				<div>Login with Email</div>
			</button>

      <ValidationMessage text={error} />
      <a
        href="/password-reset-request"
				type="button"
				class="hover:text-slate-100 text-slate-300 font-semibold block text-center mt-6 pt-2 text-sm"
			>
				<div>forgot password</div>
			</a>

		</div>
		<div class="mt-8 pt-8 border-t border-white">
			<GithubLoginButton disabled={busy} />
		</div>
	</form>
</div>

<style>
	.card {
		@apply border border-slate-400 bg-slate-900 p-12 rounded-xl w-96;
	}
</style>
