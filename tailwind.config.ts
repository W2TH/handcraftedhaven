import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		colors: {
			black: "#000",
			white: "#fff",
			primary: {
                // // cold
				// 100: "#D8DBE2",
				// 200: "#A9BCD0",
				// 300: "#58A4B0",
				// 400: "#373F51",
                // // Warm
                // 100: "#FFF3B0",
				// 200: "#E09F3E",
				// 300: "#9E2A2B",
				// 400: "#335C67",
                // retro
                100: "#F7FFF7",
				200: "#4ECDC4",
				300: "#FF6B6B",
				400: "#1A535C",
                // // vintage
                // 100: "#FAF5F0",
				// 200: "#F5EBE1",
				// 300: "#F0E2D3",
				// 400: "#EAD7C2",
                // // dark
                // 100: "#403F4C",
				// 200: "#2C2B3C",
				// 300: "#1B2432",
				// 400: "#121420",
			},
			warm: {
				100: "#FFF3B0",
				200: "#E09F3E",
				300: "#9E2A2B",
				400: "#335C67",
			},
			retro: {
				100: "#F7FFF7",
				200: "#4ECDC4",
				300: "#FF6B6B",
				400: "#1A535C",
			},
			vintage: {
				100: "#FAF5F0",
				200: "#F5EBE1",
				300: "#F0E2D3",
				400: "#EAD7C2",
			},
			dark: {
				100: "#403F4C",
				200: "#2C2B3C",
				300: "#1B2432",
				400: "#121420",
			},
		},
		fontFamily: {
			sans: ["Arial", "sans-serif"],
			serif: ["Cambria", "serif"],
			mono: ["Menlo", "monospace"],
		},
		extend: {
			spacing: {
				"1": "8px",
				"2": "12px",
				"3": "16px",
				"4": "24px",
				"5": "32px",
				"6": "48px",
			},
			borderRadius: {
				none: "0",
				sm: ".125rem",
				DEFAULT: ".25rem",
				lg: ".5rem",
				full: "9999px",
			},
		},
		plugins: [],
	},
};
export default config;
