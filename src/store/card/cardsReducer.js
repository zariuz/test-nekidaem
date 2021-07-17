const SET_CARD = 'SET_CARD';
const CREATE_CARD = 'CREATE_CARD';
const UPDATE_CARD = 'UPDATE_CARD';
const DELETE_CARD = 'DELETE_CARD';

const defaultState = {
  cards: [],
};

export default function cardsReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_CARD:
      return {
        ...state,
        cards: action.payload,
      };
    case CREATE_CARD:
      return {
        ...state,
        isAuth: false,
      };
    case UPDATE_CARD:
      return {
        ...state,
        isAuth: false,
      };
    case DELETE_CARD:
      return {
        ...state,
        isAuth: false,
      };
    default:
      return state;
  }
}

export const setCards = (cards) => ({type: SET_CARD, payload: cards});
export const createCard = (cards) => ({type: CREATE_CARD, payload: cards});
