module.exports = {
	content: ["./src/**/*.{js,jsx}"],
	theme: {
		extend: {
			colors: {
				gray: {
					800: "#717171",
					700: "#909090",
				},
			},
			animation: {
				wiggle: "wiggle1 700ms ease-in-out",
			},
			keyframes: {
				wiggle: {
					"0%, 100%": { transform: "rotate(0deg)" },
					"25%, 75%": { transform: "rotate(10deg)" },
					"50%": { transform: "rotate(-10deg)" },
				},
				wiggle1: {
					"0%": { transform: "rotate(0deg)" },
					"25%": { transform: "rotate(-45deg)" },
					"100%": { transform: "rotate(360deg)" },
				},
			},
		},
	},
	plugins: [],
};
