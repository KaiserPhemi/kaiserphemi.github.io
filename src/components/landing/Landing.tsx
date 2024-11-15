// react libraries
import React, { useState, useEffect } from "react";

// third-party libraries
import {
	ArrowRight,
	Mail,
	MonitorSmartphone,
	Paintbrush,
	Code,
	Moon,
	Sun,
} from "lucide-react";

// components
import Button from "../button/Button";

import "./landing.css";


const Landing: React.FC = () => {
	const services = [
		{
			icon: <MonitorSmartphone className="service-icon" />,
			title: "UX & UI Design",
			description:
				"Creating intuitive and visually appealing interfaces that enhance user engagement and satisfaction.",
		},
		{
			icon: <Paintbrush className="service-icon" />,
			title: "Web & Mobile Apps",
			description:
				"Developing responsive and feature-rich applications for web and mobile platforms.",
		},
		{
			icon: <Code className="service-icon" />,
			title: "Custom Development",
			description:
				"Building tailored solutions to address your specific business challenges and requirements.",
		},
		{
			icon: <Mail className="service-icon" />,
			title: "Consultation",
			description:
				"Providing expert advice on technology stack, architecture, and best practices for your projects.",
		},
	];

	return (
			<div className="main">
				<section id="about" className="about-section">
					<div className="profile-container">
						<div className="profile-image">
							<img src="/placeholder.svg" alt="DevName" className="avatar" />
							<div className="badge">Senior Developer</div>
						</div>
						<h1 className="title">
							Crafting <span className="highlight">innovative</span> digital
							solutions for <span className="highlight">modern businesses</span>
						</h1>
						<p className="subtitle">
							With over a decade of experience, I specialize in creating robust,
							scalable, and user-centric web applications that drive business
							growth.
						</p>
						<Button className="primary-button">
							View My Work
							<ArrowRight className="icon" />
						</Button>
					</div>
				</section>

				<section id="clients" className="clients-section">
					<h2 className="section-title">Trusted by Industry Leaders</h2>
					<div className="client-grid">
						{[1, 2, 3, 4, 5, 6].map((num) => (
							<img
								key={num}
								src="/placeholder.svg"
								alt={`Client ${num}`}
								className="client-logo"
							/>
						))}
					</div>
				</section>
				<section id="services" className="services-section">
					<div className="section-header">
						<h2 className="section-title">
							Comprehensive <span className="highlight">Web Development</span>{" "}
							Services
						</h2>
						<p className="section-subtitle">
							Delivering end-to-end solutions tailored to your unique business
							needs
						</p>
					</div>
					<div className="services-grid">
						{services.map((service, index) => (
							<div key={index} className="service-card">
								<div className="icon-container">{service.icon}</div>
								<h3 className="service-title">{service.title}</h3>
								<p className="service-description">{service.description}</p>
							</div>
						))}
					</div>
				</section>

				<section id="contact" className="contact-section">
					<div className="contact-content">
						<h2 className="section-title">Let's Bring Your Vision to Life</h2>
						<p className="section-subtitle">
							Ready to start your next project? Get in touch and let's discuss
							how we can work together.
						</p>
						<div className="button-group">
							<Button className="primary-button">
								Schedule a Call
								<Mail className="icon" />
							</Button>
							<Button variant="outline" className="secondary-button">
								View Portfolio
							</Button>
						</div>
					</div>
				</section>
			</div>

	);
};

export default Landing;
