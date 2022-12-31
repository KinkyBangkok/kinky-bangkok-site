import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		preprocess({ postcss: true }), 
		mdsvex({ extensions: ['.svx', '.md'], layout: './src/routes/markdownLayout.svelte' }),
	],

	extensions: ['.svelte', '.svx', '.md'],

	kit: {
		adapter: adapter()
	},
	
};

export default config;
