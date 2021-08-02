import React, { useState } from "react";
import "./authorization.scss";
import { Input } from "../input/Input";
import { registration } from "../../api/user";
import { useDispatch } from "react-redux";
import { Button } from "../Button";

export const Registration = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
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

  const setEmailCallback = (e) => {
    const emailTrim = e.currentTarget.value.trim();

    if (emailTrim) {
      setEmail(emailTrim);
      errorEmail && setErrorEmail("");
    } else {
      setEmail("");
      setErrorEmail("Необходимо ввести Email!");
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
    !email && setErrorEmail("Необходимо ввести Email!");
    !password && setErrorPassword("Необходимо ввести пароль!");
  };

  const addData = () => {
    dispatch(registration(username, email, password));
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="authorization">
      <div className="authorization__header">Регистрация</div>
      <Input
        value={username}
        onChange={setNameCallback}
        onBlur={setOnBlur}
        type="text"
        placeholder="Введите имя..."
        error={errorName}
      />
      <Input
        value={email}
        onChange={setEmailCallback}
        onBlur={setOnBlur}
        type="text"
        placeholder="Введите email..."
        error={errorEmail}
      />
      <Input
        value={password}
        onChange={setPasswordCallback}
        onBlur={setOnBlur}
        type="password"
        placeholder="Введите пароль..."
        error={errorPassword}
      />
      <Button className="authorization__btn" onClick={addData}>
        Зарегистрироваться
      </Button>
    </div>
  );
};
