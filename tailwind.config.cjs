const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				'kbk-red': '#dc2626',
				'kbk-black': '#0f0f0f'
			},
			typography:
				(theme) => ({
					DEFAULT: {
						css: {
							'--tw-prose-bold': theme('colors.kbk-red'),
							'blockquote p:first-of-type::before': false,
							'blockquote p:last-of-type::after': false,
						},
					},
				}),
		}
	},

	plugins: [
		require('@tailwindcss/typography'),
	]
};

module.exports = config;
