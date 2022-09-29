import React, { useState } from 'react';

import Header from './header/Header.jsx';
import Board from './Board.jsx';
import Settings from './settings/Settings.jsx';
import Footer from './Footer.jsx';

function App() {

  const [arr, setArr] = useState(Array(9).fill(null));

  function resetGame() {
    setArr(Array(9).fill(null));
  }

  return (
    <>
      <Header />
      <Board arr={arr} setArr={setArr} />
      <Settings />
      <Footer resetGame={resetGame} />
    </>
  )
}

export default App;