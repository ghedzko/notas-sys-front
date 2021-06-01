import React from "react";
import { Input } from "../../components/Input";

import "./Login.scss";

export interface LoginProps {}

export const Login: React.FC<LoginProps> = () => {
  return (
    <div className="form-container">
      <form className="form-container__form" action="#">
        <Input label="Nombre de Usuario" id="username" autofocus />

        <Input label="Password" id="password" />

        <button onClick={() => {}}>Ingresar</button>
      </form>
    </div>
  );
};
