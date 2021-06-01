import React, { useState } from "react";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

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
  const handlerButtonClick = (e: any) => {
    console.log(userName, password);
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
        <Button label="Ingresar" onClick={handlerButtonClick} />
      </form>
    </div>
  );
};
