<script lang="ts">
	import { fade } from 'svelte/transition';
	import HoldOn from './HoldOn.svelte';
	import ValidationMessage from './ValidationMessage.svelte';

	const emailRegex =
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

	export let subject = 'Contact Form';

	let name: string = '';
	let email: string = '';
	let message: string = '';

	let nameError: string = '';
	let emailError: string = '';
	let messageError: string = '';
	let error: string = '';

	let busy = false;
	let sent = false;

	function isEmailValid(email: string): boolean {
		if (!email) return true;
		return emailRegex.test(email);
	}

	async function submit() {
		if (!validateForm()) return;

		const data = new FormData();
		data.append('name', name);
		data.append('email', email);
		data.append('message', message);
		data.append('subject', subject);

		//Post with fetch
		busy = true;
		try {
			await fetch('/contact', { method: 'POST', body: data });
			sent = true;
		} catch (err) {
			error = 'Something went wrong sending your message... Please try again later.';
		}
		busy = false;
	}

	function validateForm(): boolean {
		error = '';
		nameError = '';
		emailError = '';
		messageError = '';

		if (!name) nameError = 'A name is required. You can use a fake name.';
		if (!email) emailError = 'Email is required.';
		if (!isEmailValid(email)) emailError = 'That email address looks wrong.';
		if (!message) messageError = 'At least type something!';

		if (nameError || emailError || messageError) return false;
		return true;
	}
</script>

<div class="relative">
	<form
		class="w-full max-w-xl transition-opacity opacity-100"
		class:opacity-0={sent}
		novalidate
		on:submit|preventDefault={submit}
		action="/?/sendContactForm"
	>
		<fieldset disabled={busy}>
			<div class="md:flex md:items-baseline mb-6">
				<div class="md:w-1/3">
					<label
						class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
						for="inline-full-name"
					>
						Name or Nickname
					</label>
				</div>
				<div class="md:w-2/3 relative">
					<input
						id="inline-full-name"
						bind:value={name}
						on:keydown={() => (nameError = '')}
						type="text"
						maxlength="150"
						placeholder="Jane Doe"
					/>
					<ValidationMessage text={nameError} />
				</div>
			</div>
			<div class="md:flex md:items-baseline mb-6">
				<div class="md:w-1/3">
					<label
						class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
						for="inline-email"
					>
						Email
					</label>
				</div>
				<div class="md:w-2/3 relative">
					<input
						id="inline-email"
						type="email"
						maxlength="150"
						bind:value={email}
						on:keydown={() => (emailError = '')}
						placeholder="jane@example.com"
					/>
					<ValidationMessage text={emailError} />
				</div>
			</div>
			<div class="md:flex md:items-start mb-6">
				<div class="md:w-1/3 mt-1">
					<label
						class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
						for="inline-message"
					>
						Message
					</label>
				</div>
				<div class="md:w-2/3 relative">
					<textarea
						id="inline-message"
						rows="5"
						maxlength="800"
						bind:value={message}
						on:keydown={() => (messageError = '')}
						placeholder="Start typing..."
					/>

					<ValidationMessage text={messageError} />
				</div>
			</div>
			<div class="md:flex md:items-baseline">
				<div class="md:w-1/3" />
				<div class="md:w-2/3">
					<div class="flex items-baseline gap-4">
						<button type="submit"> Send Message </button>
						<HoldOn show={busy} />
					</div>
					<div class="text-rose-500">{error}</div>
				</div>
			</div>
		</fieldset>
	</form>

	{#if sent}
		<div
			transition:fade
			class="font-semibold absolute w-full h-full top-0 left-0 flex flex-col justify-center"
		>
			<div class="text-center">
				<div class="py-3 px-4 bg-slate-300 rounded-xl inline-block m-auto">
					Thank you for your message. We will get in touch with you as soon as possible.
				</div>
			</div>
		</div>
	{/if}
</div>

<style>
	input,
	textarea {
		@apply bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500
		transition-colors;
	}

	button[type='submit'] {
		@apply shadow bg-purple-500 text-slate-100 font-bold py-2 px-4 rounded
		hover:bg-purple-400 
		disabled:bg-purple-300 disabled:hover:bg-purple-300 
		active:text-white
		transition-all;
	}
</style>
