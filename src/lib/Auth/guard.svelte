<script lang="ts">
	import { LoginState, loginState, user } from '$lib/Auth/SessionStore';
	import GithubLoginButton from '../login/GithubLoginButton.svelte';
	import SignOutButton from '../login/SignOutButton.svelte';
</script>

{#if $loginState === LoginState.LOGGED_IN}
	Logged in as {$user.email}
	<SignOutButton />
	<slot />
{:else if $loginState === LoginState.UNKNOWN}
	Loading...
{:else}
	<slot name="no-auth">
		<div>
			Not Logged in.
			<GithubLoginButton />
		</div>
	</slot>
{/if}
