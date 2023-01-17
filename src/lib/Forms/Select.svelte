<script lang="ts">
	import { nanoidci } from '../nanoidCi';
	import ValidationMessage from '../ValidationMessage.svelte';

	export let name = nanoidci(10);
	export let errorMessage = '';
	export let value: string;
	export let values: string[] = ['one', 'two'];
</script>

<select class="input" id={name} {name} bind:value on:change={() => (errorMessage = '')}>
	{#each values as value}
		<option {value}>{value}</option>
	{/each}
</select>

<ValidationMessage text={errorMessage} />

<style>
	.input {
		@apply bg-gray-200 border-gray-200 text-gray-700 appearance-none border-2 rounded w-full py-2 px-4 leading-tight transition-colors
      focus:outline-none focus:bg-white focus:border-purple-500
      read-only:focus:border-gray-200 read-only:focus:bg-white;
	}
</style>
