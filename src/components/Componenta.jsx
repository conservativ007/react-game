import React, {useState} from 'react';
import soundfile from '../click2.mp3'; 

export default function Componenta({clickHandler, index, elem, soundPlay}) {

  let a = null;
  if(elem === 'x'){
    a = <div className='gamer-x'>&times;</div>;
  } else if(elem === 'o') {
    a = <div className='gamer-o'>&#9675;</div>;
  }

  function sound() {
    if(soundPlay !== true) return;
    // console.log(' sound ');
    // console.log(soundfile);

    let audio = new Audio();
    // audio.preload = 'auto';
    audio.src = soundfile;
    audio.play();
  }

  return (
    <div 
      className='elem-board' 
      onClick={() => clickHandler(index)}
      onMouseUp={sound}
    >
      {a}
    </div>
  )
}