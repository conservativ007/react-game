import React, {useContext, useEffect, useState} from 'react';
import '.././styles/head.css'
import {Context} from './Context.jsx';

export default function Head({elem, setA1, x, o}) {
  let context = useContext(Context)
  let winner = 'победитель - ';

  let [textWinner, setTextWinner] = useState(false);

  useEffect(() => {
    setTextWinner(context.winner);
  }, [context.winner])

  useEffect(() => {
    if(textWinner) {
      setTimeout(() => setTextWinner(false), 3000);
    }
  }, [textWinner]);

  let text = 'ходит: ';
  
  if(elem === 'Игра окончена' || elem === 'ничья!') text = '';
  let result;

    result = 
    <>
      <div className={context.a1 === 'x' ? "gamers-one active" : "gamers-one"}>
        <span>x</span>
        <span>{x}</span>
      </div>
      <div className={context.a1 !== 'x' ? "gamers-two active" : "gamers-two"}>
        <span>o</span>
        <span>{o}</span>
      </div>
    </>

  return (
    <div className='header'>
      <div className="gamers">
        {result}
      </div>
      <div className='move'>
        <div>
          <select value={context.a1} onChange={e => setA1(e.target.value)}>
            <option value="select-gamer" disabled>select gamer</option>
            <option value="x">x</option>
            <option value="o">o</option>
          </select>
        </div>
        <div>
          {text} {elem} {textWinner ? winner + textWinner : ''}
        </div>
      </div>
    </div>
  )
}