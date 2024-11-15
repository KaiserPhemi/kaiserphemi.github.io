import React from 'react';

// interface
import { CardProps } from './BlogPage.interface';

export const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`card ${className}`}>{children}</div>
);

export const CardHeader: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`card-header ${className}`}>{children}</div>
);

export const CardContent: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`card-content ${className}`}>{children}</div>
);

export const CardFooter: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`card-footer ${className}`}>{children}</div>
);

export const CardTitle: React.FC<CardProps> = ({ children, className = '' }) => (
  <h3 className={`card-title ${className}`}>{children}</h3>
);
