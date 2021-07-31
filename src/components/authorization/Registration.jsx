import React, {useState} from 'react';
import './authorization.scss';
import {Input} from '../input/Input';
import {registration} from '../../api/user';
import {useDispatch} from 'react-redux';

export const Registration = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  return (
    <div className="authorization">
      <div className="authorization__header">Регистрация</div>
      <Input
        value={username}
        setValue={setUsername}
        type="text"
        placeholder="Введите имя..."
      />
      <Input
        value={email}
        setValue={setEmail}
        type="text"
        placeholder="Введите email..."
      />
      <Input
        value={password}
        setValue={setPassword}
        type="password"
        placeholder="Введите пароль..."
      />
      <button
        className="authorization__btn"
        onClick={() => dispatch(registration(username, email, password))}>
        Зарегистрироваться
      </button>
    </div>
  );
};
