import Card from '../components/Card';
import {connect} from 'react-redux';
import removeCard from '../store/card/cardsReducer';

export default connect(
  ({columns}) => ({items: columns}),
  (dispatch) => ({
    onRemove: (columnIndex, cardIndex) => {
      if (global.confirm('Вы действительно хотите удалить?')) {
        dispatch(removeCard(columnIndex, cardIndex));
      }
    },
  }),
)(Card);
