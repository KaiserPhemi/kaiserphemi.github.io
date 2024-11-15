// react libraries
import React, { useState, useEffect } from "react";

// styles
import "./AboutPage.css";

// interface(s)
import { Skill } from "./About.interface";

// About page component
const AboutPage: React.FC = ({ darkMode }: any) => {
	const skills: Skill[] = [
		{ id: "1", name: "JavaScript" },
		{ id: "2", name: "TypeScript" },
		{ id: "3", name: "React" },
		{ id: "4", name: "Node.js" },
		{ id: "5", name: "Next.js" },
		{ id: "6", name: "GraphQL" },
		{ id: "7", name: "AWS" },
		{ id: "8", name: "Docker" },
		{ id: "9", name: "CI/CD" },
	];

	return (
		<div className={`app ${darkMode ? "dark" : ""}`}>
			<main className="main">
				<h1 className="page-title">About Me</h1>
				<div className="content">
					<div className="profile-image">
						<img
							src="/placeholder.svg"
							alt="Profile Picture"
							className="image"
						/>
					</div>
					<div className="bio">
						<h2 className="bio-title">Hi, I'm DevName</h2>
						<p className="bio-text">
							I'm a passionate web developer with over 10 years of experience in
							creating innovative digital solutions. My journey in the world of
							technology began when I built my first website at the age of 15,
							and since then, I've been on a continuous learning path, always
							staying up-to-date with the latest trends and technologies.
						</p>
						<p className="bio-text">
							My expertise lies in full-stack development, with a particular
							focus on React, Node.js, and cloud technologies. I'm dedicated to
							crafting clean, efficient, and scalable code that not only meets
							but exceeds client expectations.
						</p>
						<p className="bio-text">
							When I'm not coding, you can find me contributing to open-source
							projects, mentoring aspiring developers, or exploring the great
							outdoors. I believe in the power of technology to make a positive
							impact on the world, and I'm always excited to take on new
							challenges that push the boundaries of what's possible in web
							development.
						</p>
						<h3 className="skills-title">Skills</h3>
						<div className="skills-container">
							{skills.map((skill) => (
								<span key={skill.id} className="skill-tag">
									{skill.name}
								</span>
							))}
						</div>
						<button className="cv-button">Download CV</button>
					</div>
				</div>
			</main>
		</div>
	);
};

export default AboutPage;
