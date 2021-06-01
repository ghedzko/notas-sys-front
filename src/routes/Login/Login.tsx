import React from "react";
import "./Login.scss";
export interface LoginProps {}

export const Login: React.FC<LoginProps> = () => {
  return (
    <div className="form-container">
      <form className="form-container__form" action="#">
        <div>
          <label htmlFor="username">Nombre de Usuario</label>
          <input type="text" id="username" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="text" id="password" />
        </div>

        <button onClick={() => {}}>Ingresar</button>
      </form>
    </div>
  );
};
