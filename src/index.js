import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Toaster } from "react-hot-toast";
import "./index.css";

ReactDOM.render(
	<React.StrictMode>
		<App />
		<Toaster position="top-right" />
	</React.StrictMode>,
	document.getElementById("root")
);

if (
	localStorage.theme === "dark" ||
	(!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
	document.documentElement.classList.add("dark");
} else {
	document.documentElement.classList.remove("dark");
}
