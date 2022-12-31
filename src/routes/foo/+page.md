<script lang="ts">
  /* Typescript goes here */
  import Contact from '$lib/Contact.svelte';
</script>

<!-- Stuff for the head tag can go here (or anywhere) -->
<svelte:head>
	<title>Title of the page (Optional)</title>
</svelte:head>


This is a demo page to show the use of Markdown.
---

Here is some text

# Here is a header!

## And a subheader

## And so an and so forth.

- Yo dawg, I heard you like lists
- So I put  alist
  - Inside your list
    - So you can list things
    - While you list things

[links](https://www.youtube.com/watch?v=dQw4w9WgXcQ) work exactly how you expect them to.

Images can be dumped in the static folder. Then linked like this:

![alt text](logo.png "A logo")

# It is also HTML / Svelte

Just adding any old svelte stuff works. For example <b>Bold tags work</b>, But so does the markdown **like this**.

Svelte components can also just be added like so:

<Contact />