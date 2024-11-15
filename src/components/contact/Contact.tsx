// react libraries
import React, { useState, useEffect } from 'react';

// third-party libraries
import { Mail, Phone, MapPin } from 'lucide-react';

// styles
import './contact.css';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface NavLink {
  href: string;
  label: string;
}

interface SocialLink {
  name: string;
  url: string;
}

const ContactPage: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const socialLinks: SocialLink[] = [
    { name: 'LinkedIn', url: '#' },
    { name: 'GitHub', url: '#' },
    { name: 'Twitter', url: '#' }
  ];

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      <main className="main">
        <h1 className="page-title">Get in Touch</h1>
        <div className="contact-content">
          <div className="contact-info">
            <h2 className="section-title">Contact Information</h2>
            <div className="contact-details">
              <div className="contact-item">
                <Mail className="contact-icon" />
                <span>contact@devname.com</span>
              </div>
              <div className="contact-item">
                <Phone className="contact-icon" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <MapPin className="contact-icon" />
                <span>123 Web Dev Street, Internet City, 12345</span>
              </div>
            </div>
            <div className="social-section">
              <h3 className="social-title">Connect with me</h3>
              <div className="social-links">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    className="social-link"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  id="name"
                  type="text"
                  className="form-input"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  id="email"
                  type="email"
                  className="form-input"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  id="subject"
                  type="text"
                  className="form-input"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  className="form-textarea"
                  placeholder="Your message here..."
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </div>
              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
