import React, { useEffect } from 'react';
import '.././styles/head.css'

import { useSelector, useDispatch } from 'react-redux';
import { actionChangePlayer } from '../store/playersReducer';

export default function Head() {

  const playersSettings = useSelector(store => store.playersReducer);
  const dispatch = useDispatch();

  let result =
    <>
      <div onClick={() => dispatch(actionChangePlayer("x"))} className={playersSettings.player === 'x' ? "gamers-one active" : "gamers-one"}>
        <span>x</span>
        <span>{playersSettings.x === 0 ? "-" : playersSettings.x}</span>
      </div>
      <div onClick={() => dispatch(actionChangePlayer("o"))} className={playersSettings.player !== 'x' ? "gamers-two active" : "gamers-two"}>
        <span>o</span>
        <span>{playersSettings.o === 0 ? "-" : playersSettings.o}</span>
      </div>
    </>

  return (
    <div className='header'>
      <div className="gamers">
        {result}
      </div>
      <p className="show-winner">
        {playersSettings.endGame === true && playersSettings.drow === false ? "Игра окончена, победитель " + playersSettings.winner : null}
        {playersSettings.endGame === true && playersSettings.drow === true ? "Ничья!" : null}
      </p>
    </div>
  )
}