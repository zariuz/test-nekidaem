import {instance} from './main';
import {logout, setUser} from '../actions/users';
import {getCards} from './card';

export const registration = (username, email, password) => {
  return async (dispatch) => {
    try {
      const response = await instance.post(`users/create/`, {
        username,
        email,
        password,
      });
      alert('Регистрация прошла успешна!');
      localStorage.setItem('token', response.data.token);
      dispatch(setUser());
    } catch (e) {
      alert('Вы ввели неправильные данные!');
      console.log(e.response.data);
    }
  };
};

export const login = (username, password) => {
  return async (dispatch) => {
    try {
      const response = await instance.post(`users/login/`, {
        username,
        password,
      });
      localStorage.setItem('token', response.data.token);
      dispatch(setUser());

      // setTimeout(dispatch(getCards()), 500);
    } catch (e) {
      alert('Вы ввели неправильное имя или пароль!');
      console.log(e.response.data);
    }
  };
};

export const auth = () => {
  return async (dispatch) => {
    try {
      if (localStorage.getItem('token')) {
        dispatch(setUser());
        // dispatch(getCards());
      } else {
        dispatch(logout());
      }
    } catch (e) {
      localStorage.removeItem('token');
    }
  };
};
