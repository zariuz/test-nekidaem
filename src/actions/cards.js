export const SET_CARDS = "SET_CARDS";
export const ADD_CARDS = "ADD_CARDS";
export const REMOVE_CARDS = "REMOVE_CARDS";

export const actionsCards = {
  setCards: (cards) => ({
    type: SET_CARDS,
    payload: cards,
  }),
  addCard: (card) => ({
    type: ADD_CARDS,
    payload: card,
  }),
  removeCard: (columnIndex, cardIndex) => ({
    type: REMOVE_CARDS,
    payload: {
      columnIndex,
      cardIndex,
    },
  }),
};
