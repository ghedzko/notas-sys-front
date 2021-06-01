import React, { useState } from "react";
import { Input } from "../../components/Input";

import "./Login.scss";

export interface LoginProps {}

export const Login: React.FC<LoginProps> = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handlerUserChange = (e: any) => {
    setUserName(e.target.value);
  };

  const handlerPasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  return (
    <div className="form-container">
      <form className="form-container__form" action="#">
        <Input
          label="Nombre de Usuario"
          id="username"
          autofocus
          value={userName}
          onChange={handlerUserChange}
        />

        <Input
          label="Password"
          id="password"
          value={password}
          onChange={handlerPasswordChange}
          type="password"
        />

        <button onClick={() => {}}>Ingresar</button>
      </form>
    </div>
  );
};
