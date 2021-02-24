import React, {useState} from 'react';
// import {Howl, Howler} from 'howler';

export default function Componenta({clickHandler, index, elem, soundPlay}) {

  let a = null;
  if(elem === 'x'){
    a = <div className='gamer-x'>&times;</div>;
  } else if(elem === 'o') {
    a = <div className='gamer-o'>&#9675;</div>;
  }

  return (
    <div 
      className='elem-board' 
      onClick={() => clickHandler(index)}
    >
  {/* сдесь в дальнейшем будет обработка аудио */}
    {/* <audio className='eee'> */}
      {/* <source src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"/> */}
      {/* <source src="./click3.m4a" type="audio/mpeg" /> */}
    {/* </audio> */}
      {a}
    </div>
  )
}