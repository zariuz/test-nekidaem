import {instance} from './main';
import {logout, setUser} from '../actions/users';

export const registration = (username, email, password) => {
  return async (dispatch) => {
    try {
      const response = await instance.post(`users/create/`, {
        username,
        email,
        password,
      });
      alert('Регистрация прошла успешна!');
      dispatch(setUser());
      localStorage.setItem('token', response.data.token);
    } catch (e) {
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
      dispatch(setUser());
      localStorage.setItem('token', response.data.token);
    } catch (e) {
      console.log(e.response.data.message);
    }
  };
};

export const auth = () => {
  return async (dispatch) => {
    try {
      if (localStorage.getItem('token')) {
        dispatch(setUser());
      } else {
        dispatch(logout());
      }
    } catch (e) {
      localStorage.removeItem('token');
    }
  };
};
