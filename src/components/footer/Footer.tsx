import React from 'react';

interface SocialLink {
  name: string;
  url: string;
}

const Footer = () => {

  const socialLinks: SocialLink[] = [
    { name: 'LinkedIn', url: '#' },
    { name: 'GitHub', url: '#' },
    { name: 'Twitter', url: '#' }
  ];
  return (
    <footer className="footer">
    <div className="footer-container">
      <p className="copyright">&copy; 2024 DevName. All rights reserved.</p>
      <div className="footer-links">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            className="footer-link"
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  </footer>
  )
}

export default Footer