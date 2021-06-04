import React from "react";
import "./Button.scss";

export interface ButtonProps {
  label: string;
  onClick: (arg0: any) => void;
}

export const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <div className="button-container">
      <button className="button-container__button" onClick={onClick}>
        {label}
      </button>
    </div>
  );
};
