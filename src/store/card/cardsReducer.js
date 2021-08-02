import { ADD_CARDS, REMOVE_CARDS, SET_CARDS } from "../../actions/cards";

const initialState = [
  {
    title: "ON HOLD",
    cards: [],
  },
  {
    title: "IN PROGRESS",
    cards: [],
  },
  {
    title: "NEEDS REVIEW",
    cards: [],
  },
  {
    title: "APPROVED",
    cards: [],
  },
];

export default function cardsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CARDS:
      return state.map((item, index) => {
        return {
          ...item,
          cards: [...action.payload.filter((c) => c.row === `${index}`)],
        };
      });
    case ADD_CARDS:
      return state.map((item, index) => {
        if (+action.payload.row === index) {
          return {
            ...item,
            cards: [
              ...item.cards,
              {
                id: action.payload.id,
                row: action.payload.row,
                seq_num: action.payload.seq_num,
                text: action.payload.text,
              },
            ],
          };
        }
        return item;
      });
    case REMOVE_CARDS:
      return state.map((item, columnIndex) => {
        if (action.payload.columnIndex === columnIndex) {
          return {
            ...item,
            cards: item.cards.filter(
              (_, filterIndex) => filterIndex !== action.payload.cardIndex
            ),
          };
        }
        return item;
      });
    default:
      return state;
  }
}
