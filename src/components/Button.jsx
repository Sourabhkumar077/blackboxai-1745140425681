import React from 'react';

const Button = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={
        'bg-white bg-opacity-30 backdrop-blur-md text-white px-6 py-3 rounded-lg shadow-lg hover:bg-opacity-50 transition ' +
        className
      }
    >
      {children}
    </button>
  );
};

export default Button;
