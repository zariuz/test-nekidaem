import React from 'react';
import {Droppable} from 'react-beautiful-dnd';

import {AddForm} from '../../containers/AddForm';
import CardContainer from '../../containers/Card';
import './Column.scss';

export const Column = ({columnIndex, title, cards, onAddCard}) => {
  return cards ? (
    <Droppable type="CARDS" droppableId={`column-${columnIndex}`}>
      {(provided) => (
        <div className="column" {...provided.droppableProps} ref={provided.innerRef}>
          <div className="column__inner">
            {title && (
              <div className="column__title">
                <b>{title}</b>
              </div>
            )}
            <div className="column__items">
              {cards.map((card, index) => (
                <CardContainer key={index} columnIndex={columnIndex} cardIndex={index}>
                  {card.text}
                </CardContainer>
              ))}
              {provided.placeholder}
            </div>
            <AddForm
              isEmptyColumn={false}
              columnIndex={columnIndex}
              onAddCard={onAddCard}
            />
          </div>
        </div>
      )}
    </Droppable>
  ) : (
    <div className={'column column--empty'}>
      <div className="column__inner">
        <AddForm isEmptyColumn={true} columnIndex={columnIndex} onAddCard={onAddCard} />
      </div>
    </div>
  );
};
