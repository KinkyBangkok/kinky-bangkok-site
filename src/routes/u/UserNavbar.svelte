<script lang="ts">
	import Guard from '$lib/Auth/guard.svelte';
	import { user } from '$lib/Auth/SessionStore';
	import Dropdown from '$lib/Dropdown/Dropdown.svelte';
	import SignOutButton from '$lib/login/SignOutButton.svelte';
</script>

<Guard>
	<nav class="flex w-full max-w-4xl m-auto bg-slate-900 px-6 py-3 rounded">
		<a href="/u/tickets" class="navlink">Ticket Management</a>
		<span class="grow" />
		<div class="dropdown">
			<Dropdown align="right">
				<div slot="label" class="text-slate-500 hover:text-slate-300 transition-colors">
					{$user.email}
				</div>
				<svelte:fragment slot="menu">
					<a href="/u/password-reset" class="dropdown-button">Change Password</a>
					<SignOutButton />
				</svelte:fragment>
			</Dropdown>
		</div>
	</nav>
	<div slot="no-auth" />
</Guard>

<style>
	.navlink {
		@apply text-slate-300 py-1 px-2 rounded transition-all font-semibold items-center
		hover:text-slate-100 hover:scale-110 inline-block
		active:text-black;
	}

	.dropdown-button {
		@apply transition-colors flex font-semibold text-slate-400 gap-2 justify-center items-center w-60 px-4 py-2 rounded hover:text-slate-200;
	}
</style>
