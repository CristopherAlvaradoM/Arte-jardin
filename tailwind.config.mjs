/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,css}'],
	theme: {
		extend: {
			colors: {
				green_primary: "#2c473e",
				green_secondary: "#b0d182",
				green_tertiary: "#648e4e",
				black_primary: "#191919",
				white_primary: "#f4f1ea",
			},
			fontFamily: {
				secondary: ['Arpona', 'sans-serif'],
				sans: ['Montserrat', 'sans-serif'],
			}
		},
	},
	plugins: [],
}
