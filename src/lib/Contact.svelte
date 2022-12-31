<script lang="ts">
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

{#if sent}
	<div class="font-semibold">
		Thank you for your message. We will get in touch with you as soon as possible.
	</div>
{:else}
	<form
		class="w-full max-w-xl"
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
				<div class="md:w-2/3">
					<input
						class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
						id="inline-full-name"
						bind:value={name}
						on:keydown={() => (nameError = '')}
						type="text"
						maxlength="150"
						placeholder="Jane Doe"
					/>
					<div class="text-rose-500">{nameError}</div>
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
				<div class="md:w-2/3">
					<input
						class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
						id="inline-email"
						type="email"
						maxlength="150"
						bind:value={email}
						on:keydown={() => (emailError = '')}
						placeholder="jane@example.com"
					/>
					<div class="text-rose-500">{emailError}</div>
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
				<div class="md:w-2/3">
					<textarea
						class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
						id="inline-message"
						rows="5"
						maxlength="800"
						bind:value={message}
						on:keydown={() => (messageError = '')}
						placeholder="Start typing..."
					/>
					<div class="text-rose-500">{messageError}</div>
				</div>
			</div>
			<div class="md:flex md:items-baseline">
				<div class="md:w-1/3" />
				<div class="md:w-2/3">
					<button
						class="shadow bg-purple-500 hover:bg-purple-400 disabled:bg-purple-300 disabled:hover:bg-purple-300 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
						type="submit"
					>
						{#if busy}
							Hold on...
						{:else}
							Send Message
						{/if}
					</button>
					<div class="text-rose-500">{error}</div>
				</div>
			</div>
		</fieldset>
	</form>
{/if}
