import {instance} from './main';
import {setCards} from '../store/card/cardsReducer';

export const getCards = () => {
  return async (dispatch) => {
    try {
      const response = await instance.get(`cards/`, {
        headers: {Authorization: `JWT ${localStorage.getItem('token')}`},
      });
      console.log(response.data);
      dispatch(setCards(response.data));
    } catch (e) {
      alert(e.response.data);
    }
  };
};

export const createCard = () => {
  return async (dispatch) => {
    try {
      const response = await instance.post(`cards/`, {
        headers: {Authorization: `JWT ${localStorage.getItem('token')}`},
      });
      dispatch(setCards(response.data));
    } catch (e) {
      alert(e.response.data);
    }
  };
};
