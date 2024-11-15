import React, { useState, useEffect } from "react";

// third-party libraries
import { Moon, Sun } from "lucide-react";

// interface
import { NavLink } from "./NavBar.interface";

// styles
import "./navbar.css";

const NavBar = () => {
	const [darkMode, setDarkMode] = useState<boolean>(false);

	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [darkMode]);

	/**
	 * Toggle dark mode
	 */
	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};

	const navLinks: NavLink[] = [
		{ href: "/", label: "Home" },
		{ href: "/about", label: "About" },
		{ href: "/portfolio", label: "Portfolio" },
		{ href: "/blog", label: "Blog" },
		{ href: "/contact", label: "Contact" },
	];
	return (
		<header className="header">
			<div className="header-container">
				<a href="/" className="logo">
					DevName
				</a>
				<nav className="nav">
					{navLinks.map((link) => (
						<a key={link.href} href={link.href} className="nav-link">
							{link.label}
						</a>
					))}
				</nav>
				<button
					className="theme-toggle"
					onClick={toggleDarkMode}
					aria-label="Toggle dark mode"
				>
					{darkMode ? (
						<Sun className="theme-icon" />
					) : (
						<Moon className="theme-icon" />
					)}
				</button>
			</div>
		</header>
	);
};

export default NavBar;
