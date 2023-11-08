import React from 'react';
import './index.css';

const Button = ({ text, onClick  }) => {
  return <button className="button" onClick={onClick}>{text}</button>;
};

export default Button;
