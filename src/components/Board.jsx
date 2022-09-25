import React, { useEffect } from 'react';
import { saveRecord } from './function.js';
import Cell from "./Cell.jsx";
import { useSelector } from 'react-redux';

const Board = ({ a1, setA1, move, setMove, setWinner, setO, setX, x, o, arr, setArr }) => {

  const boardSettings = useSelector(store => store.gameSettingsReducer);

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
    localStorage.setItem("a1", a1);
  }, [a1]);

  useEffect(() => {
    localStorage.setItem("array", JSON.stringify(arr));
  }, [arr]);

  useEffect(() => {
    let result = arr.every(i => i !== null)
    if (result && a1 !== 'Игра окончена') {
      setA1('ничья!');
    }
  }, [arr]);

  function clickHandler(index) {

    let copy = arr.slice();

    if (copy[index] !== null) return;
    if (!move) return;

    copy[index] = a1;
    setA1(a1 === 'x' ? 'o' : 'x');

    setArr(copy);
    isWin(a1, copy);
  }

  function isWin(element, copy) {

    let win = winnerLines.some(test => {
      if (copy[test[0]] === element
        && copy[test[1]] === element
        && copy[test[2]] === element) {
        return true;
      }
    })

    if (win) {
      console.log(element + ' winner');
      setWinner(element);
      setA1('Игра окончена');
      setMove(false);
      saveRecord(element);

      if (element === 'x') {
        setX(x === '-' ? 1 : x += 1);
      } else if (element === 'o') {
        setO(o === '-' ? 1 : o += 1);
      }
    }
  }

  let result = arr.map((elem, index) => {
    return <Cell
      key={index}
      index={index}
      elem={elem}
      clickHandler={clickHandler}
    />
  })

  return (
    <div className={boardSettings.isBoardStyleChanged === false ? 'board board-1' : 'board board-2'}>
      <div className="tic-tac-toe">
        {result}
      </div>
    </div>
  );
}

export default Board;
