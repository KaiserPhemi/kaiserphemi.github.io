 // react libraries
import React from "react";

 // interface
 import { ButtonProps } from "./Button.interface";

 /**
  * 
  * @param param0 
  * @returns 
  */
 const Button: React.FC<ButtonProps> = ({
  variant = '',
  size = 'default',
  className = '',
  onClick,
  children,
  'aria-label': ariaLabel,
}) => (
  <button
    className={`button ${variant} ${size} ${className}`}
    onClick={onClick}
    aria-label={ariaLabel}
  >
    {children}
  </button>
);

export default Button;
