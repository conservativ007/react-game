import React, { useState } from 'react';

import Footer from './Footer.jsx';
import Head from './Head.jsx';
import Settings from './settings/Settings.jsx';
import { Context } from './Context.jsx';
import { getArrayInLocalStorage, getA1InLocalStorage } from './function';

import Board from './Board.jsx';

function App() {

  let arrInLocal = getArrayInLocalStorage();
  let a1InLocal = getA1InLocalStorage();

  const [arr, setArr] = useState(arrInLocal ? arrInLocal : Array(9).fill(null));
  let [a1, setA1] = useState(a1InLocal ? a1InLocal : 'x');
  let [move, setMove] = useState(true);
  let [x, setX] = useState('-');
  let [o, setO] = useState('-');
  let [select, setSelect] = useState('x');

  let [winner, setWinner] = useState(false);

  function resetGame() {
    setArr(Array(9).fill(null))
    setA1(select)
    setMove(true)
    setWinner(false);
  }

  return (
    <Context.Provider value={{ setSelect, select, resetGame, setA1, a1, winner }} >
      <Head elem={a1} setA1={setA1} x={x} o={o} />
      <Board a1={a1} setA1={setA1} move={move} setMove={setMove} setWinner={setWinner} setX={setX} setO={setO} x={x} o={o} arr={arr} setArr={setArr} />
      <Settings />
      <Footer resetGame={resetGame} />
    </Context.Provider>
  )
}

export default App;


