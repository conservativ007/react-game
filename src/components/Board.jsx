import React, { useEffect } from 'react';
import { checkWinnerLines } from './function.js';
import Cell from "./Cell.jsx";

import { useDispatch, useSelector } from 'react-redux';
import { actionChangePlayer, actionEndGame, actionIncrement, actionSetDrow, actionSetPlayer, actionSetWinner, actionStartGame } from '../store/playersReducer.js';

import useSound from 'use-sound';
import soundClickFile from "../assets/sounds/click2.mp3";

import { getWinnerLines } from './function.js';

const Board = ({ arr, setArr }) => {

  const boardSettings = useSelector(store => store.gameSettingsReducer);
  const playersSettings = useSelector(store => store.playersReducer);
  const isAi = useSelector(store => store.aiSetingsRedicer);
  const dispatch = useDispatch();

  const [play] = useSound(soundClickFile);

  useEffect(() => {
    dispatch(actionSetPlayer("x"));
  }, []);

  useEffect(() => {
    let result = arr.every(i => i !== null);
    if (result === true && playersSettings.endGame === false) {
      dispatch(actionSetDrow(true));
      dispatch(actionEndGame(true));
    }
  }, [arr, playersSettings.endGame]);

  function gamerMove(index) {

    if (playersSettings.endGame === true) return;
    let copy = arr.slice();

    if (copy[index] !== null) return;
    copy[index] = playersSettings.whoMove;

    dispatch(actionChangePlayer(playersSettings.whoMove === "x" ? "o" : "x"));
    if (playersSettings.isGameStart === null) dispatch(actionStartGame(true));

    setArr(copy);

    let endGame = isWin(copy);
    if (endGame === true) return;

    isAIchousen(copy, playersSettings.whoPlayer);
  }

  function isAIchousen(copy, player) {
    if (isAi.ai !== true) return;

    let result = checkWinnerLines(copy, player);

    if (result === "end-game") {
      dispatch(actionEndGame(true));
      dispatch(actionSetDrow(true));
    }

    else if (typeof result === "number") {
      setTimeout(() => {
        copy.splice(result, 1, player === "x" ? "o" : "x");
        setArr(copy);
        dispatch(actionChangePlayer(player));
        isWin(copy);

        if (boardSettings.isSoundByClick === true) play();
        console.log(result);
      }, 400);
    }
  }

  function isWin(copy) {
    let x = null;
    let o = null;
    let win = false;

    let winnerLines = getWinnerLines();

    winnerLines.forEach(line => {
      x = line.every(i => copy[i] === "x");
      o = line.every(i => copy[i] === "o");

      if (o === true || x === true) {
        dispatch(actionEndGame(true));
        dispatch(actionSetWinner(o === true ? "o" : "x"));
        dispatch(actionIncrement(o === true ? "o" : "x"));
        dispatch(actionChangePlayer("x"));
        win = true;
      }
    });
    return win;
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
