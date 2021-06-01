import React from "react";
import "./Input.scss";

export interface InputProps {
  label: string;
  id: string;
  autofocus?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  id,
  autofocus = false,
}) => {
  return (
    <div className="input-container">
      <label className="input-container__label" htmlFor={id}>
        {label}
      </label>
      <input
        className="input-container__input"
        type="text"
        id={id}
        autoFocus={autofocus}
      />
    </div>
  );
};
