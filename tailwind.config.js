/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
		fontFamily: {
			sans: ["manrope", "system-ui"],
			serif: ["Arapey", "serif"],
		},
		colors: {
			dark: "#FFEAEB", //light pink
			light: "#4F5561",
			dark_red: "#C43138",
			red: "#C43138",
			hoverlightred: "#a0484dff",
			lightred: "#7f2226ff",
			off_white: "#F2F2F2",
			white: "#FFFFFF",
			gray: "#999999",
			dark_gray: "#444444",
			green: "#ca7579ff",
			black: "#000000",
		},
		borderRadius: {
			full: "999px",
			rsm: "5px",
			rmd: "10px",
			rlg: "15px",
		},
		backgroundImage: {},
	},
	plugins: [],
};
