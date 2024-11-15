// react libraries
import React from "react";

// third-party libraries
import { Moon, Sun } from "lucide-react";

// components
import NavLink from "../navbar/NavLink";
import Button from "../button/Button";

// interface
import { NavbarProps } from "./NavBar.interface";

// styles
import "./navbar.css";

/**
 * 
 * @param param0 
 * @returns 
 */
const NavBar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const navItems = [
    { href: '/#about', label: 'About' },
    { href: '/#services', label: 'Services' },
    { href: '/#portfolio', label: 'Portfolio' },
    { href: '/blog', label: 'Blog' },
    { href: '/#contact', label: 'Contact' },
  ];

  return (
    <header className="header">
      <div className="header-content">
        <a href="/" className="logo">DevName</a>
        <nav className="nav">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="header-actions">
          <a href="mailto:contact@devname.com" className="email-link">
            contact@devname.com
          </a>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <Sun className="icon" />
            ) : (
              <Moon className="icon" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
