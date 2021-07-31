import {instance} from './main';
import {actionsCards} from '../actions/cards';

const token = {
  headers: {Authorization: `JWT ${localStorage.getItem('token')}`},
};

export const getCards = () => {
  return async (dispatch) => {
    try {
      const response = await instance.get(`cards/`, token);
      dispatch(actionsCards.setCards(response.data));
    } catch (e) {
      alert(e.response.data);
    }
  };
};

export const addCard = (columnIndex, value) => {
  return async (dispatch) => {
    try {
      const response = await instance.post(
        `cards/`,
        {row: columnIndex, text: value},
        token,
      );
      dispatch(actionsCards.addCard(response.data));
    } catch (e) {
      alert(e.response.data);
    }
  };
};

export const updateCard = (id) => {
  return async (dispatch) => {
    try {
      const response = await instance.patch(`/cards/${id}/`, token);
      dispatch(actionsCards.addCard(response.data));
    } catch (e) {
      alert(e.response.data);
    }
  };
};

export const removeCard = (id, columnIndex, cardIndex) => {
  return async (dispatch) => {
    try {
      const response = await instance.delete(`/cards/${id}/`, token);
      dispatch(actionsCards.removeCard(columnIndex, cardIndex));
    } catch (e) {
      alert(e.response.data);
    }
  };
};
