import React, { useEffect, useState } from 'react'
import Componenta from './Componenta.jsx';
import Footer from './Footer.jsx';
import Head from './Head.jsx';
import Settings from './Settings.jsx';
import {Context} from './Context.jsx';



function App() {

  const [arr, setArr] = useState(Array(9).fill(null))
  let [counter, setCounter] = useState(0)
  let [a1, setA1] = useState('x')
  let [move, setMove] = useState(true);
  let [x, setX] = useState('-');
  let [o, setO] = useState('-');

  let [soundPlay, setSoundPlay] = useState(false);
  let [soundClick, setSoundClick] = useState(0.5);
  let [gamer, setGamer] = useState(true);
  let [board, setBoard] = useState(true);

  const winnerLines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

  // let styleBoard = ['board-1', 'board-2'];
  // useEffect(() => {
  //   if(board){

  //   }
  //   console.log(board)
  // }, [board])

  function clickHandler(index) {
    
    let copy = arr.slice();
    let element = counter % 2 === 0 ? 'x' : 'o';

    if(copy[index] !== null) return;
    if(!move) return;

    copy[index] = element;
    setA1(element === 'x' ? 'o' : 'x');

    setArr(copy);
    setCounter(counter += 1);
    
    isWin(element, copy)
  }


  function isWin(element, copy){

    let win = winnerLines.some(test => {
      if(copy[test[0]] === element 
        && copy[test[1]] === element
        && copy[test[2]] === element){
          return true;
        }
    })

    if(win) {
      console.log(element + ' winner')
      setA1('Игра окончена')
      setMove(false);

      if(element === 'x'){
        setX(x === '-' ? 1 : x += 1);
      } else if(element === 'o') {
        setO(o === '-' ? 1 : o += 1);
      }
       
    }
  }

  function resetGame(){
    setArr(Array(9).fill(null))
    setCounter(0)
    setA1('x')
    setMove(true)
  }

  let result = arr.map((elem, index) => {
    return <Componenta 
    key={index} 
    index={index} 
    elem={elem} 
    clickHandler={clickHandler}
    soundPlay={soundPlay}
    soundClick={soundClick}
    />
  })

  return (
    <>
      <Context.Provider value={{setGamer, gamer, board, setBoard}} >
        <Head elem={a1} x={x} o={o} />
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
    </>
  )
}

export default App;


