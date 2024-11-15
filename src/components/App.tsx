// react libraries
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import Footer from "./footer/Footer";
import NavBar from "./navbar/NavBar";
import Landing from "./landing/Landing";

// styles
import "./App.css";

/**
 * MAin app component
 * @returns
 */
const App: React.FC = () => {
	const [darkMode, setDarkMode] = useState(false);

	//
	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [darkMode]);

	/**
	 * Toggles theme
	 */
	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};
	
	return (
		<Router>
			<div className={`app ${darkMode ? "dark" : ""}`}>
				<NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
				<main>
					<Routes>
						<Route path="/" element={<Landing />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
