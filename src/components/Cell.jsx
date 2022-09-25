import React from 'react';
import Gamer from './Gamer.jsx';
import { useSelector } from 'react-redux';

export default function Cell({ clickHandler, index, elem }) {

  const board = useSelector(store => store.gameSettingsReducer);

  return (
    <div
      className={board.isBoardStyleChanged === false ? 'elem-board elem-board1' : 'elem-board elem-board2'}
      onClick={() => clickHandler(index)}
    >
      <Gamer elem={elem} />
    </div>
  )
}