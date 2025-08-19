import React from "react";

const Button = ({ text, icon: Icon, className = "", ...props }) => {
  return (
    <button
      className={`btn-primary ${className}`}
      {...props}
    >
      <span>{text}</span>
      {Icon && <Icon />}
    </button>
  );
};

export default Button;
