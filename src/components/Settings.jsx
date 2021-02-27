import React, { useState, useEffect, useContext } from 'react';
import '.././styles/settings.css';
import soundfile from '../Orc-Theme.mp3'; 
import Input from './Input.jsx';
import {Context} from './Context.jsx';

export default function Settings({soundPlay, setSoundPlay, setSoundClick, soundClick}) {
  
  let [musicPlay, setMusicPlay] = useState(false);
  let [audioVolume, setAudioVolume] = useState(0.5);
  
  useEffect(() => {

    let audio = document.querySelector('.audio-trac');
    if(musicPlay) {
      audio.play();
      audio.volume = audioVolume;
    } else {
      audio.pause();
    }
    
  }, [musicPlay, audioVolume])

  let context = useContext(Context)
  

  function changeSettingsGamer() {
    let setGamer = context.setGamer;
    let gamer = context.gamer;
    setGamer(!gamer)
  }

  function changeSettingsBoard() {
    let board = context.board;
    let setBoard = context.setBoard;
    setBoard(!board)
  }

  

  return (
    <div className='settings'>

      <div className='sound'>
        <div>
          <audio className='audio-trac' src={soundfile}></audio>
          <input 
            id='s2'
            type='checkbox' 
            onChange={() => setMusicPlay(!musicPlay)}
          />

          <output htmlFor='fader'>{audioVolume * 10}</output>  
          <Input setAudioVolume={setAudioVolume} />
          <label htmlFor="s2">music</label>
        </div>
        
        <div>
          <input 
            id='s1'
            type='checkbox' 
            onChange={() => setSoundPlay(!soundPlay)} 
          />
          <output htmlFor='fader'>{soundClick * 10}</output> 
          <Input setSoundClick={setSoundClick} />
          <label htmlFor="s1">click</label>
        </div>
      </div>

      <div className="set-gamer">
        <div>
          <input id='s3' type="checkbox" onChange={changeSettingsGamer}/>
          <label htmlFor="s3">change x, y</label>
        </div>
        
        <div>
          <input id='s4' type="checkbox" onChange={changeSettingsBoard} />
          <label htmlFor="s4">change board</label>
        </div>
      </div>
    </div>
  )
}