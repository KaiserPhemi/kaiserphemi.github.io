// react libraries
import React from "react";

// interface
import { ServiceCardProps } from "./Landing.interface";

/**
 *
 * @param param0
 * @returns
 */
const ServiceCard: React.FC<ServiceCardProps> = ({
	icon,
	title,
	description,
}) => (
	<div className="service-card">
		<div className="icon-container">{icon}</div>
		<h3 className="service-title">{title}</h3>
		<p className="service-description">{description}</p>
	</div>
);

export default ServiceCard;
