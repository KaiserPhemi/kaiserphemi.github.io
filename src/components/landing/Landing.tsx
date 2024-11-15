import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// styles
import './landing.css';

export default function Page() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className="min-h-screen bg-light text-dark dark:bg-dark dark:text-light transition-colors duration-300">


      <main className="container mx-auto px-4">
        <section id="about" className="py-20 text-center">
          <div className="relative w-32 h-32 mx-auto mb-8">
            <img src="/placeholder.svg" alt="DevName" className="profile-img" />
            <div className="badge">Senior Developer</div>
          </div>
          <h1 className="title">Crafting <span className="highlight">innovative</span> digital solutions for <span className="highlight">modern businesses</span></h1>
          <p className="description">
            With over a decade of experience, I specialize in creating robust, scalable, and user-centric web applications that drive business growth.
          </p>
          <button className="main-btn">
            View My Work <span className="arrow">➡️</span>
          </button>
        </section>

        {/* Additional sections like "Trusted by Industry Leaders", "Services", and "Contact" follow similar structure */}
      </main>


    </div>
  );
}
