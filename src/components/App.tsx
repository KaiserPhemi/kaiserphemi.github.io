// react libraries
import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import Footer from "./footer/Footer";
import NavBar from "./navbar/NavBar";
import Landing from "./landing/Landing";

const App: React.FC = () => {
	return (
		<Router>
			<div className="app">
				<NavBar />
				<main>
					<Routes>
						<Route path="/" element={<Landing />} />
						{/* <Route path="/home" element={<Home />} /> */}
						{/* <Route path="/about" element={<About />} /> */}
						{/* Add more routes as needed */}
					</Routes>
				</main>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
