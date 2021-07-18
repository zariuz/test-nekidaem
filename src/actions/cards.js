export const SET_CARDS = 'SET_CARDS';
export const ADD_CARDS = 'ADD_CARDS';
export const REMOVE_CARDS = 'REMOVE_CARDS';
export const REORDER_CARDS = 'REORDER_CARDS';

export const actionsCards = {
  setCards: (cards) => ({
    type: SET_CARDS,
    payload: cards,
  }),
  addCard: (columnIndex, text) => ({
    type: ADD_CARDS,
    payload: {
      columnIndex,
      text,
    },
  }),
  removeCard: (columnIndex, cardIndex) => ({
    type: REMOVE_CARDS,
    payload: {
      columnIndex,
      cardIndex,
    },
  }),
  reorderCards: ({source, destination}) => ({
    type: REORDER_CARDS,
    payload: {
      source,
      destination,
    },
  }),
};
