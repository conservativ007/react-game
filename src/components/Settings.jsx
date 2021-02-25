import React, { useState } from 'react';
import '.././styles/settings.css';

export default function Settings({soundPlay, setSoundPlay}) {

 
  // function playSound() {
    
  //   setSound(sound = !sound); 
  //   console.log('play-sound', sound)

  //   let audio = new Audio();
  //   audio.preload = 'auto';
  //   audio.src = '../../public/sound/sound1.mp3';
  //   audio.play();
  // }

  // function playMusic() {
  //   console.log('play-music')
  // }

  return (
    <div className='settings'>

      {/* <div className='sound'>
        <input type='checkbox' id='s2' onClick={() => playSound()} />
        <label htmlFor="s2">включить музончик</label>
      </div> */}
      
      <div className='sound'>
        <input 
          id='s1' 
          type='checkbox' 
          onChange={() => setSoundPlay(soundPlay = !soundPlay)} 
        />
        <label htmlFor="s1">включить звуки</label>
      </div>
    </div>
  )
}