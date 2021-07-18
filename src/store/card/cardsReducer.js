import {ADD_CARDS, REMOVE_CARDS, REORDER_CARDS, SET_CARDS} from '../../actions/cards';
import {reorderCards} from '../../helpers/reorderCards';

const initialState = [
  {
    title: 'ON HOLD',
    cards: [
      'Пройти курс по React',
      'Отметить день рождения',
      'Записаться на курсы английского языка, чтобы уехать жить в Лондон',
    ],
  },
  {
    title: 'IN PROGRESS',
    cards: [
      'Записаться на курс по React',
      'Забронировать тир на субботу',
      'Накидать тем для статей в блог',
    ],
  },
  {
    title: 'NEEDS REVIEW',
    cards: [
      'Записаться на курс по React',
      'Забронировать тир на субботу',
      'Накидать тем для статей в блог',
    ],
  },
  {
    title: 'APPROVED',
    cards: [
      'Записаться на курс по React',
      'Забронировать тир на субботу',
      'Накидать тем для статей в блог',
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
            cards: [...item.cards, action.payload.text],
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
