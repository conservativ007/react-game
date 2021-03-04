import React, {useEffect, useState, useContext} from 'react';
import soundfile from '../click2.mp3'; 
import Gamer from './Gamer.jsx';
import {Context} from './Context.jsx';

export default function Componenta({clickHandler, index, elem, soundPlay, soundClick}) {
  let context = useContext(Context)

  function sound() {
    if(soundPlay !== true) return;

    let audio = new Audio();
    audio.src = soundfile;
    audio.volume = soundClick;
    audio.play();
  }

  return (
    <div 
      className={context.board ? 'elem-board elem-board1' : 'elem-board elem-board2'} 
      onClick={() => clickHandler(index)}
      onMouseUp={sound}
    >
      <Gamer elem={elem} />
    </div>
  )
}