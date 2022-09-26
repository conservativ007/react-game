import React, { useState } from 'react';

import Footer from './Footer.jsx';
import Head from './Head.jsx';
import Settings from './settings/Settings.jsx';
import Board from './Board.jsx';

function App() {

  const [arr, setArr] = useState(Array(9).fill(null));
  let [move, setMove] = useState(true);

  function resetGame() {
    setArr(Array(9).fill(null));
    setMove(true);
  }

  return (
    <>
      <Head />
      <Board move={move} setMove={setMove} arr={arr} setArr={setArr} />
      <Settings />
      <Footer resetGame={resetGame} />
    </>
  )
}

export default App;


