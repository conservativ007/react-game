import React from 'react';
import '.././styles/head.css'

export default function Head({elem, x, o}) {
  let text = 'ходит: ';
  if(elem === 'Игра окончена') text = '';
  let result;

  if(elem === 'x'){
    result = 
    <>
      <div className="gamers-one active">
        <span>x</span>
        <span>{x}</span>
      </div>
      <div className="gamers-two">
        <span>o</span>
        <span>{o}</span>
      </div>
    </>
  } else {
    result = 
    <>
      <div className="gamers-one">
        <span>x</span>
        <span>{x}</span>
      </div>
      <div className="gamers-two active">
        <span>o</span>
        <span>{o}</span>
      </div>
    </>
  }


  return (
    <div className='header'>
      <div className="gamers">
        {result}
      </div>
      <div className='move'>
        {text} {elem}
      </div>
      
    </div>
  )
}