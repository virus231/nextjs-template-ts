/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/components/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
		extend: {
			colors: {
				primary: "#FF7652",
				purple: "#6C5ECF",
				"light-blue": "#32A8E2",
				gray: {
					400: "#9898ad",
					500: "#8c8ca4",
					600: "#707081",
					700: "#55556 2",
					800: "#353340",
					900: "#272532"
				}
			}
		}
	},
	plugins: []
}
