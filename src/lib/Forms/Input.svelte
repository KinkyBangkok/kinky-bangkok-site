<script lang="ts">
	import { nanoidci } from '../nanoidCi';
	import ValidationMessage from '../ValidationMessage.svelte';

  export let name = nanoidci(10);
  export let placeholder = 'Enter some text...'
  export let errorMessage = '';
  export let value: string;
  export let readonly = false;
  export let maxlength = 150;

</script>
<input
	class="input"
  id="{name}"
  {name}
	bind:value
	on:keydown={() => (errorMessage = '')}
	type="text"
  {readonly}
	{maxlength}
	{placeholder}
/>
<ValidationMessage text={errorMessage} />

<style>
  .input {
    @apply bg-gray-200 border-gray-200 text-gray-700 appearance-none border-2 rounded w-full py-2 px-4 leading-tight transition-colors
      focus:outline-none focus:bg-white focus:border-purple-500
      read-only:focus:border-gray-200 read-only:focus:bg-white;
  }
</style>