<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import Guard from '$lib/Auth/guard.svelte';
	import { user } from '$lib/Auth/SessionStore';
	import Dropdown from '$lib/Dropdown/Dropdown.svelte';
	import SignOutButton from '$lib/login/SignOutButton.svelte';
	import HamburgerIcon from '$lib/sideMenu/HamburgerIcon.svelte';
	import SideMenu from '../../lib/sideMenu/sideMenu.svelte';

	let menuOpen = false;

	// Make sure the menu closes on navigation.
	$: if ($page.url) menuOpen = false;
</script>

<SideMenu bind:open={menuOpen}>
	<div class="side mx-2 flex flex-col h-full">
		<div class="grow pt-10 flex flex-col gap-2">
			<a href="/u" class="navlink">Admin Home</a>
			<a href="/u/tickets" class="navlink">Ticket Management</a>

			<hr class="border-slate-400">
			<a href="/" class="navlink">Home</a>
		</div>
		<div class="my-6">
			<a href="/">
				<img src="{base}/Logo_Vector_Red.png" class="m-auto w-24" alt="The Logo" />
			</a>
		</div>
	</div>
</SideMenu>

<Guard>
	<nav class="flex w-full max-w-4xl m-auto bg-slate-900 px-6 py-3 rounded">
		<!-- Normal Navbar, hidden on small screens -->
		<div class="hidden sm:block">
			<a href="/u/tickets" class="navlink">Ticket Management</a>
		</div>

		<!-- Hamburger -->
		<div class="sm:hidden">
			<button class="active:text-slate-400" on:click={() => (menuOpen = !menuOpen)}>
				<HamburgerIcon />
			</button>
		</div>

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

	.side .navlink {
		@apply text-slate-900 
		hover:text-slate-700
		active:text-slate-500
		hover:scale-100;
	}

	.dropdown-button {
		@apply transition-colors flex font-semibold text-slate-400 gap-2 justify-center items-center w-60 px-4 py-2 rounded hover:text-slate-200;
	}
</style>
