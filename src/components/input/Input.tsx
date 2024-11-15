// react libraries
import React from 'react';

// interface
import { InputProps } from './Input.interface';

 const Input: React.FC<InputProps> = ({ className = '', ...props }) => (
  <input
    className={`input ${className}`}
    {...props}
  />
);

export default Input;
