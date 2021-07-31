import React, {useState} from 'react';
import './authorization.scss';
import {Input} from '../input/Input';
import {useDispatch} from 'react-redux';
import {login} from '../../api/user';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  return (
    <div className="authorization">
      <div className="authorization__header">Авторизация</div>
      <Input
        value={username}
        setValue={setUsername}
        type="text"
        placeholder="Введите имя..."
      />
      <Input
        value={password}
        setValue={setPassword}
        type="password"
        placeholder="Введите пароль..."
      />
      <button
        className="authorization__btn"
        onClick={() => dispatch(login(username, password))}>
        Войти
      </button>
    </div>
  );
};
