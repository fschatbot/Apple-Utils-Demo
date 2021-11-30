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
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
