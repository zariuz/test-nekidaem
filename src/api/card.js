import {instance} from './main';
import {actionsCards} from '../actions/cards';

export const getCards = () => {
  return async (dispatch) => {
    try {
      const response = await instance.get(`cards/`, {
        headers: {Authorization: `JWT ${localStorage.getItem('token')}`},
      });
      console.log(response.data);
      dispatch(actionsCards.setCards(response.data));
    } catch (e) {
      alert(e.response.data);
    }
  };
};

export const addCard = () => {
  return async (dispatch) => {
    try {
      const response = await instance.post(`cards/`, {
        headers: {Authorization: `JWT ${localStorage.getItem('token')}`},
      });
      dispatch(actionsCards.addCard(response.data));
    } catch (e) {
      alert(e.response.data);
    }
  };
};

export const removeCard = () => {
  return async (dispatch) => {
    try {
      const response = await instance.post(`cards/`, {
        headers: {Authorization: `JWT ${localStorage.getItem('token')}`},
      });
      dispatch(actionsCards.removeCard(response.data));
    } catch (e) {
      alert(e.response.data);
    }
  };
};
