import React from "react";

import "./Button.scss";

export const Button = ({ children, onClick, className }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};
