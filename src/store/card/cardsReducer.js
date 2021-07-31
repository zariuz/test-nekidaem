import {ADD_CARDS, REMOVE_CARDS, REORDER_CARDS, SET_CARDS} from '../../actions/cards';
import {reorderCards} from '../../helpers/reorderCards';

const initialState = [];

export default function cardsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CARDS:
      return [
        ...state,
        {title: 'ON HOLD', cards: action.payload.filter((c) => c.row === '0')},
        {title: 'IN PROGRESS', cards: action.payload.filter((c) => c.row === '1')},
        {title: 'NEEDS REVIEW', cards: action.payload.filter((c) => c.row === '2')},
        {title: 'APPROVED', cards: action.payload.filter((c) => c.row === '3')},
      ];

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
              (_, filterIndex) => filterIndex !== action.payload.cardIndex,
            ),
          };
        }
        return item;
      });
    case REORDER_CARDS: {
      const {source, destination} = action.payload;
      return reorderCards({
        state,
        source,
        destination,
      });
    }
    default:
      return state;
  }
}
