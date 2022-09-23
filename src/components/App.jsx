import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';

import Componenta from './Componenta.jsx';
import Footer from './Footer.jsx';
import Head from './Head.jsx';
import Settings from './Settings.jsx';
import { Context } from './Context.jsx';
import { saveRecord, getArrayInLocalStorage, getA1InLocalStorage } from './function';


function App() {

  let arrInLocal = getArrayInLocalStorage();
  let a1InLocal = getA1InLocalStorage();
  const [arr, setArr] = useState(arrInLocal ? arrInLocal : Array(9).fill(null));
  let [a1, setA1] = useState(a1InLocal ? a1InLocal : 'x')
  let [move, setMove] = useState(true);
  let [x, setX] = useState('-');
  let [o, setO] = useState('-');
  let [select, setSelect] = useState('x');

  let [soundPlay, setSoundPlay] = useState(false);
  let [soundClick, setSoundClick] = useState(0.5);
  let [gamer, setGamer] = useState(true);
  let [board, setBoard] = useState(true);
  let [winner, setWinner] = useState(false);


  useEffect(() => {
    localStorage.setItem("array", JSON.stringify(arr));
  }, [arr]);

  useEffect(() => {
    localStorage.setItem("a1", a1);
  }, [a1]);


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


  function resetGame() {
    setArr(Array(9).fill(null))
    setA1(select)
    setMove(true)
    setWinner(false);
  }

  useEffect(() => {
    let result = arr.every(i => i !== null)
    if (result && a1 !== 'Игра окончена') {
      setA1('ничья!');
    }
  }, [arr]);


  let result = arr.map((elem, index) => {
    return <Componenta
      key={index}
      index={index}
      elem={elem}
      clickHandler={clickHandler}
      soundPlay={soundPlay}
      soundClick={soundClick}
      a1={a1}
    />
  })

  return (
    <Router>
      <Context.Provider value={{ setGamer, gamer, board, setBoard, setSelect, select, resetGame, setA1, a1, winner }} >
        <Head elem={a1} setA1={setA1} x={x} o={o} />
        <div className={board ? 'board board-1' : 'board board-2'}>
          <div className="tic-tac-toe">
            {result}
          </div>
        </div>
        <Settings
          soundPlay={soundPlay}
          setSoundPlay={setSoundPlay}
          soundClick={soundClick}
          setSoundClick={setSoundClick}
        />
        <Footer resetGame={resetGame} />
      </Context.Provider>
    </Router>
  )
}

export default App;


