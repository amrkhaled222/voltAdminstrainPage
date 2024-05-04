/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {},
			gridTemplateColumns: {
				// added new 4 column grid as new4
				table: "repeat(1, minmax(0, 1fr))",
				autoFlow: " repeat(auto-fill, minmax(280px, 370px));",
				autoFlowMobile: " repeat(auto-fill, minmax(280px, 300px));",
			},
			colors: {
				darkGrey: "#232321",
				seconderyItemColor: "#70706E",
				darkBlue: "#003F62",
				overlay: "rgba(35, 35, 33, 0.2)",
				mainBg: " rgb(237 235 235)",
			},
		},
	},
	plugins: [],
};
