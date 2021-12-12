module.exports = {
	content: ["./src/**/*.{js,jsx}"],
	theme: {
		extend: {
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
	plugins: [],
};
