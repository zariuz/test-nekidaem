import {Card} from '../components/Card';
import {useDispatch, useSelector} from 'react-redux';
import {actionsCards} from '../actions/cards';

export default function CardContainer({columnIndex, cardIndex, children}) {
  const items = useSelector((state) => state.cards);
  const dispatch = useDispatch();

  const onRemove = (columnIndex, cardIndex) => {
    if (global.confirm('Вы действительно хотите удалить?')) {
      dispatch(actionsCards.removeCard(columnIndex, cardIndex));
    }
  };

  return (
    <Card
      children={children}
      items={items}
      cardIndex={cardIndex}
      columnIndex={columnIndex}
      onRemove={onRemove}
    />
  );
}
