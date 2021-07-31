import React, {Fragment} from 'react';
import {DragDropContext} from 'react-beautiful-dnd';
import {useDispatch, useSelector} from 'react-redux';

import {Column} from '../components/Column';
import {actionsCards} from '../actions/cards';
import {addCard} from '../api/card';

export const Columns = () => {
  const items = useSelector((state) => state.cards);
  const dispatch = useDispatch();

  const onDragEnd = (result) => {
    const {source, destination} = result;
    if (
      !destination ||
      (source.droppableId === destination.droppableId &&
        source.index === destination.index)
    ) {
      return;
    }
    dispatch(
      actionsCards.reorderCards({
        source,
        destination,
      }),
    );
  };

  const onAddCard = (columnIndex, value) => {
    dispatch(addCard(columnIndex, value));
  };

  return (
    <Fragment>
      <DragDropContext onDragEnd={onDragEnd}>
        {items.map((item, index) => (
          <Column {...item} key={index} columnIndex={index} onAddCard={onAddCard} />
        ))}
      </DragDropContext>
    </Fragment>
  );
};
