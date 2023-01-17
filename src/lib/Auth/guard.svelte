<script lang="ts">
	import { LoginState, loginState } from '$lib/Auth/SessionStore';
	import LoginForm from './LoginForm.svelte';
</script>

{#if $loginState === LoginState.LOGGED_IN}
	<slot />
{:else if $loginState === LoginState.UNKNOWN}
	Loading...
{:else}
	<slot name="no-auth">
		<div>
			<LoginForm />
		</div>
	</slot>
{/if}
