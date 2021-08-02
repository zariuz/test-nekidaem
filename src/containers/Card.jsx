import { Card } from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { removeCard } from "../api/card";

export const CardContainer = ({
  columnIndex,
  cardIndex,
  children,
  cardID,
  cardSeqNum,
}) => {
  const items = useSelector((state) => state.cards);
  const dispatch = useDispatch();

  const onRemove = () => {
    if (global.confirm("Вы действительно хотите удалить?")) {
      dispatch(removeCard(cardID, columnIndex, cardIndex));
    }
  };

  return (
    <Card
      children={children}
      items={items}
      cardIndex={cardIndex}
      columnIndex={columnIndex}
      onRemove={onRemove}
      cardID={cardID}
      cardSeqNum={cardSeqNum}
    />
  );
};
