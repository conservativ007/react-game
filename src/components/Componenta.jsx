import React, {useEffect, useState} from 'react';
import soundfile from '../click2.mp3'; 
import Gamer from './Gamer.jsx';

export default function Componenta({clickHandler, index, elem, soundPlay, soundClick}) {

  function sound() {
    if(soundPlay !== true) return;

    let audio = new Audio();
    audio.src = soundfile;
    audio.volume = soundClick;
    audio.play();
  }

  return (
    <div 
      className='elem-board' 
      onClick={() => clickHandler(index)}
      onMouseUp={sound}
    >
      <Gamer elem={elem} />
    </div>
  )
}