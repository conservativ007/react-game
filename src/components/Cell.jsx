import React from 'react';
import Gamer from './Gamer.jsx';
import { useSelector } from 'react-redux';

import useSound from 'use-sound';
import soundClickFile from "../assets/sounds/click2.mp3";

export default function Cell({ gamerMove, index, elem }) {

  const board = useSelector(store => store.gameSettingsReducer);
  const [play] = useSound(soundClickFile);

  function clickHandler(index) {
    gamerMove(index);
    if (board.isSoundByClick === true) play();
  }

  return (
    <div
      className={board.isBoardStyleChanged === false ? 'elem-board elem-board1' : 'elem-board elem-board2'}
      onClick={() => clickHandler(index)}
    >
      <Gamer elem={elem} />
    </div>
  )
}