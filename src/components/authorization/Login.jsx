import React, { useState } from "react";
import "./authorization.scss";
import { Input } from "../input/Input";
import { useDispatch } from "react-redux";
import { login } from "../../api/user";
import { Button } from "../Button";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const dispatch = useDispatch();

  const setNameCallback = (e) => {
    const nameTrim = e.currentTarget.value.trim();

    if (nameTrim) {
      setUsername(nameTrim);
      errorName && setErrorName("");
    } else {
      setUsername("");
      setErrorName("Необходимо ввести имя!");
    }
  };

  const setPasswordCallback = (e) => {
    const passTrim = e.currentTarget.value.trim();

    if (passTrim) {
      setPassword(passTrim);
      errorPassword && setErrorPassword("");
    } else {
      setPassword("");
      setErrorPassword("Необходимо ввести пароль!");
    }
  };

  const setOnBlur = () => {
    !username && setErrorName("Необходимо ввести имя!");
    !password && setErrorPassword("Необходимо ввести пароль!");
  };

  const addData = () => {
    dispatch(login(username, password));
    setUsername("");
    setPassword("");
  };

  return (
    <div className="authorization">
      <div className="authorization__header">Авторизация</div>
      <Input
        value={username}
        onChange={setNameCallback}
        onBlur={setOnBlur}
        type="text"
        placeholder="Введите имя..."
        error={errorName}
      />
      <Input
        value={password}
        onChange={setPasswordCallback}
        onBlur={setOnBlur}
        type="password"
        placeholder="Введите пароль..."
        error={errorPassword}
      />
      <Button
        className="authorization__btn"
        onClick={addData}
        // disabled={!username}
      >
        Войти
      </Button>
    </div>
  );
};
