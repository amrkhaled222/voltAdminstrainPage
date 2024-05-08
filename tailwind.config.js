/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				montserrat: ["Montserrat", "sans-serif"],
				plusj: ["Plus Jakarta Sans", "sans-serif"],
				rubik: ["Rubik", "sans-serif"],
				openSans: ["Open Sans", "sans-serif"],
			},
			backgroundImage: {
				uploasImg: "url(./_assets/image.png)",
				pcMainModels: "url(./_assets/pcModelsPic.jpg)",
				HeroImage: "url(./_assets/HeroImage.png)",
				MainModels: "url(./_assets/ModelsPic.png)",
				casual: "url('./_assets/casual.png')",
				mobileCasual: "url('./_assets/mobile-casual.png')",
				formal: "url('./_assets/formal.png')",
				mobileFormal: "url('./_assets/mobile-formal.png')",
				party: "url('./_assets/party.png')",
				mobileParty: "url('./_assets/mobile-party.png')",
				gym: "url('./_assets/gym.png')",
				mobileGym: "url('./_assets/mobile-gym.png')",
			},
			gridTemplateColumns: {
				// added new 4 column grid as new4
				table: "repeat(1, minmax(0, 1fr))",
				orderStats: " repeat(auto-fill, minmax(280px, 300px));",
				autoFlow: " repeat(auto-fill, minmax(280px, 370px));",
				autoFlowMobile: " repeat(auto-fill, minmax(280px, 300px));",
			},
			gridTemplateRows: {
				layout: "100px 1fr",
			},
			colors: {
				darkGrey: "#232321",
				seconderyItemColor: "#70706E",
				darkBlue: "#003F62",
				overlay: "rgba(35, 35, 33, 0.2)",
				mainBg: " rgb(237 235 235)",

				lightgrey: "#f0f0f0",
				hrColor: "#00000",
				discountColor: "#FF3333",
				main_gray: "#F2F0F1",
				dark_grey: "#232321",
				brown_grey: "#70706E",
			},
		},
	},
	plugins: [],
};
