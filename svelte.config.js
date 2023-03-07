import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

const ci = process.argv.includes('CI');

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
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				// otherwise fail the build
				throw new Error(message);
			}
		},
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false,
			strict: true
		}),
		paths: {
			base: ci ? '/kinky-bangkok-site' : ''
		}
	}


};

export default config;
