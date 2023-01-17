<script lang="ts">
	import { LoginState, loginState } from '$lib/Auth/SessionStore';
	import GithubLoginButton from '../login/GithubLoginButton.svelte';
</script>

{#if $loginState === LoginState.LOGGED_IN}
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
