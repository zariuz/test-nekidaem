import React, { Fragment, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";

import { Column } from "../components/Column";
import { addCard, getCards, updateCard } from "../api/card";
import { initUser } from "../actions/users";

export const Columns = () => {
  const items = useSelector((state) => state.cards);
  const initApp = useSelector((state) => state.users.initial);
  const isAuth = useSelector((state) => state.users.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!initApp) dispatch(initUser());
    if (isAuth) dispatch(getCards());
  }, [isAuth, initApp, dispatch]);

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (
      !destination ||
      (source.droppableId === destination.droppableId &&
        source.index === destination.index)
    ) {
      return;
    }

    // Достаем координаты карточки
    const { index: sourceCardIndex, droppableId: sourceId } = source;
    const { index: destinationCardIndex, droppableId: destinationId } =
      destination;
    const sourceColumnIndex = parseInt(sourceId.replace("column-", ""));
    const destinationColumnIndex = parseInt(
      destinationId.replace("column-", "")
    );

    // Нашли у карточки ID и Text
    const { id, text } = items
      .find((i, index) => index === sourceColumnIndex)
      .cards.find((i, index) => index === sourceCardIndex);

    dispatch(
      updateCard(id, destinationColumnIndex, destinationCardIndex, text)
    );
  };

  const onAddCard = (columnIndex, value) => {
    dispatch(addCard(columnIndex, value));
  };

  return (
    <Fragment>
      <DragDropContext onDragEnd={onDragEnd}>
        {items.map((item, index) => (
          <Column
            {...item}
            key={index}
            columnIndex={index}
            onAddCard={onAddCard}
          />
        ))}
      </DragDropContext>
    </Fragment>
  );
};
