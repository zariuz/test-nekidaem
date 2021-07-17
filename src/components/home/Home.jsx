import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getCards} from '../../api/card';

export const Home = () => {
  const cards = useSelector((state) => state.cards.cards);
  const dispatch = useDispatch();

  return (
    <div>
      <div>{cards.map((c) => c.text)}</div>
      <button onClick={() => dispatch(getCards())}>Получить карточки</button>
    </div>
  );
};
