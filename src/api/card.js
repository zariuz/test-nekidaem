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
      alert(e.response.data.text[0]);
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

export const updateCard = (id, destinationColumnIndex, destinationCardIndex, text) => {
  return async (dispatch) => {
    try {
      const response = await instance.patch(
        `/cards/${id}/`,
        {row: destinationColumnIndex, seq_num: destinationCardIndex, text: text},
        token,
      );
      dispatch(getCards());

      // dispatch(
      //   actionsCards.reorderCards({
      //     source,
      //     destination,
      //   }),
      // );
    } catch (e) {
      alert(e.response.data);
    }
  };
};
