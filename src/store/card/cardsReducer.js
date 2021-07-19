import {ADD_CARDS, REMOVE_CARDS, REORDER_CARDS, SET_CARDS} from '../../actions/cards';
import {reorderCards} from '../../helpers/reorderCards';

const initialState = [
  {
    title: 'ON HOLD',
    cards: [
      {id: 0, row: '1', seq_num: 100, text: 'Почитать книгу по React'},
      {id: 1, row: '1', seq_num: 101, text: 'Почитать книгу по JS'},
      {id: 2, row: '1', seq_num: 102, text: 'Почитать книгу по Vue'},
    ],
  },
  {
    title: 'IN PROGRESS',
    cards: [
      {id: 3, row: '2', seq_num: 103, text: 'Сходить в кино'},
      {id: 4, row: '2', seq_num: 104, text: 'Сходить в музей'},
      {id: 5, row: '2', seq_num: 105, text: 'Погулять в парке'},
    ],
  },
  {
    title: 'NEEDS REVIEW',
    cards: [
      {id: 3, row: '2', seq_num: 103, text: 'TypeScript'},
      {id: 4, row: '2', seq_num: 104, text: 'Redux'},
      {id: 5, row: '2', seq_num: 105, text: 'SCSS!'},
    ],
  },
  {
    title: 'APPROVED',
    cards: [
      {id: 3, row: '2', seq_num: 103, text: 'Hello'},
      {id: 4, row: '2', seq_num: 104, text: 'Test'},
      {id: 5, row: '2', seq_num: 105, text: 'Привет!'},
    ],
  },
];

export default function cardsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CARDS:
      return {
        ...state,
        ...action.payload.cards,
      };
    case ADD_CARDS:
      return state.map((item, index) => {
        if (action.payload.columnIndex === index) {
          return {
            ...item,
            cards: [
              ...item.cards,
              {id: 100, row: '2', seq_num: 105, text: action.payload.text},
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
