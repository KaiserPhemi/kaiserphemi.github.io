// BlogPage.tsx
// React libraries
import React, { useState } from "react";

// third-party libraries
import { ArrowRight, Search } from "lucide-react";

// components
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from "./Cards";
import Button from "../button/Button";
import Input from "../input/Input";

// interface
import { BlogPost } from "./BlogPage.interface";
import "./BlogPage.css";

const blogPosts = [
	{
		title: "The Future of Web Development",
		date: "March 1, 2024",
		excerpt:
			"Exploring emerging trends and technologies shaping the web development landscape.",
		image: "/placeholder.svg",
		category: "Technology",
	},
	{
		title: "Designing for Accessibility",
		date: "February 15, 2024",
		excerpt:
			"Best practices for creating inclusive digital experiences for all users.",
		image: "/placeholder.svg",
		category: "Design",
	},
	{
		title: "Optimizing Performance in React Applications",
		date: "January 30, 2024",
		excerpt:
			"Techniques and tools for improving the speed and efficiency of your React apps.",
		image: "/placeholder.svg",
		category: "Development",
	},
	{
		title: "The Rise of AI in UX Design",
		date: "January 15, 2024",
		excerpt:
			"How artificial intelligence is transforming the field of user experience design.",
		image: "/placeholder.svg",
		category: "AI & UX",
	},
];

const BlogPage: React.FC = () => {
	const [searchQuery, setSearchQuery] = useState("");

	return (
		<div className="blog-page">
			<div className="container">
				<h1 className="page-title">Insights & Articles</h1>
				<div className="search-container">
					<div className="search-wrapper">
						<Input
							type="search"
							placeholder="Search articles..."
							className="search-input"
							value={searchQuery}
							onChange={(evt: any) => setSearchQuery(evt.target.value)}
						/>
						<Search className="search-icon" size={18} />
					</div>
				</div>

				<div className="blog-grid">
					{blogPosts.map((post, index) => (
						<Card key={index} className="blog-card">
							<CardHeader className="blog-card-header">
								<img
									src={post.image}
									alt={post.title}
									className="blog-card-image"
								/>
							</CardHeader>
							<CardContent className="blog-card-content">
								<div className="blog-card-meta">
									<span className="blog-category">{post.category}</span>
									<span className="blog-date">{post.date}</span>
								</div>
								<CardTitle className="blog-title">{post.title}</CardTitle>
								<p className="blog-excerpt">{post.excerpt}</p>
							</CardContent>
							<CardFooter className="blog-card-footer">
								<Button variant="link" className="read-more-button">
									Read Article <ArrowRight className="arrow-icon" />
								</Button>
							</CardFooter>
						</Card>
					))}
				</div>
				<div className="load-more">
					<Button className="load-more-button">Load More Articles</Button>
				</div>
			</div>
		</div>
	);
};

export default BlogPage;
