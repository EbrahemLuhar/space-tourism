/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colours: {
				'primary': '#0B0D17',
				'secondary': '#D0D6F9',
			},
			fontFamily: {
				'sans': ['Barlow', 'sans-serif'],
				'serif': ['Bellefair', 'Georgia'],
				'barlow-condensed': ['"Barlow Condensed"', 'Georgia'],
			}
		},
	},
	plugins: [],
}
