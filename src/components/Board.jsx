import React, { useEffect } from 'react';
import { checkWinnerLines, getIndexAiFirstMove } from './function.js';
import Cell from "./Cell.jsx";

import { useDispatch, useSelector } from 'react-redux';
import { actionChangePlayer, actionEndGame, actionIncrement, actionSetDrow, actionSetPlayer, actionSetWinner } from '../store/playersReducer.js';

import { winnerLinesTwo } from './function.js';

const Board = ({ arr, setArr }) => {

  const boardSettings = useSelector(store => store.gameSettingsReducer);
  const playersSettings = useSelector(store => store.playersReducer);
  const isAi = useSelector(store => store.aiSetingsRedicer);
  const dispatch = useDispatch();

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
    isWin(copy);

    if (copy[index] !== null) return;
    copy[index] = playersSettings.whoMove;
    dispatch(actionChangePlayer(playersSettings.whoMove === "x" ? "o" : "x"));

    setArr(copy);
    isAIchousen(copy, playersSettings.whoPlayer);
  }

  function isAIchousen(copy, player) {
    if (isAi.ai !== true) return;
    let result = checkWinnerLines(copy, player);

    if (result === "first move") {
      setTimeout(() => {
        let indexMove = getIndexAiFirstMove(copy);
        console.log("moved ai to index", indexMove);
        copy.splice(indexMove, 1, "o");
        setArr(copy);
        dispatch(actionChangePlayer("x"));
      }, 400);
    }

    else if (result === "end-game") {
      dispatch(actionEndGame(true));
    }

    else if (typeof result === "number") {
      copy.splice(result, 1, "o");
      setArr(copy);
      dispatch(actionChangePlayer("x"));
    }

    isWin(copy);
  }

  function isWin(copy) {
    let x = null;
    let o = null;
    winnerLinesTwo.forEach(line => {
      x = line.every(i => copy[i] === "x");
      o = line.every(i => copy[i] === "o");

      if (o === true || x === true) {
        dispatch(actionEndGame(true));
        dispatch(actionSetWinner(o === true ? "o" : "x"));
        dispatch(actionIncrement(o === true ? "o" : "x"));
        dispatch(actionChangePlayer("x"));
        console.log("winner: ", o === true ? o : x);
      }
    });
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
