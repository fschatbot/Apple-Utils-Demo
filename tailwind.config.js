module.exports = {
	mode: "jit",
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				gray: {
					800: "#717171",
					700: "#909090",
				},
			},
			animation: {
				wiggle: "wiggle 500ms ease-in-out",
			},
			keyframes: {
				wiggle: {
					"0%, 100%": { transform: "rotate(0deg)" },
					"25%, 75%": { transform: "rotate(10deg)" },
					"50%": { transform: "rotate(-10deg)" },
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
