const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				'kbk-red': '#ff1b1b',
				'kbk-black': '0f0f0f'
			}
		}
	},

	plugins: [
		require('@tailwindcss/typography'),
	]
};

module.exports = config;
