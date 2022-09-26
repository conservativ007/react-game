import React, { useEffect } from 'react';
import { saveRecord } from './function.js';
import Cell from "./Cell.jsx";

import { useDispatch, useSelector } from 'react-redux';
import { actionChangePlayer, actionEndGame, actionIncrement, actionSetDrow, actionSetWinner } from '../store/playersReducer.js';

const Board = ({ move, setMove, arr, setArr }) => {

  const boardSettings = useSelector(store => store.gameSettingsReducer);
  const playersSettings = useSelector(store => store.playersReducer);
  const dispatch = useDispatch();

  const winnerLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  useEffect(() => {
    let result = arr.every(i => i !== null);
    if (result === true && playersSettings.endGame === false) {
      dispatch(actionSetDrow(true));
      dispatch(actionEndGame(true));
    }
  }, [arr, playersSettings.endGame]);


  function gamerMove(index) {
    let copy = arr.slice();

    if (copy[index] !== null) return;
    if (!move) return;

    copy[index] = playersSettings.player;
    dispatch(actionChangePlayer(playersSettings.player === "x" ? "o" : "x"));

    setArr(copy);
    isWin(copy);
  }

  function isWin(copy) {

    let win = winnerLines.some(test => {
      if (copy[test[0]] === playersSettings.player
        && copy[test[1]] === playersSettings.player
        && copy[test[2]] === playersSettings.player) {
        return true;
      }
    })

    if (win) {
      console.log(playersSettings.player + ' winner');
      setMove(false);
      saveRecord(playersSettings.player);

      dispatch(actionIncrement(playersSettings.player));
      dispatch(actionEndGame(true));
      dispatch(actionSetWinner(playersSettings.player));
    }
  }


  let cells = arr.map((elem, index) => {
    return <Cell
      key={index}
      index={index}
      elem={elem}
      gamerMove={gamerMove}
    />
  })

  return (
    <div className={boardSettings.isBoardStyleChanged === false ? 'board board-1' : 'board board-2'}>
      <div className="tic-tac-toe">
        {cells}
      </div>
    </div>
  );
}

export default Board;
