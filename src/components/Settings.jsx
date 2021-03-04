import React, { useState, useEffect, useContext } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import '.././styles/settings.css';
import soundfile from '../Orc-Theme.mp3'; 
import Input from './Input.jsx';
import Records from './Records.jsx';
import {Context} from './Context.jsx';
import useKeypress from 'react-use-keypress';

export default function Settings({soundPlay, setSoundPlay, setSoundClick, soundClick}) {
  
  let [musicPlay, setMusicPlay] = useState(false);
  let [audioVolume, setAudioVolume] = useState(0.5);

  let [s1, setS1] = useState(localStorage.getItem('s1') === 'true' ? true : false);
  let [s2, setS2] = useState(localStorage.getItem('s2') === 'true' ? true : false);
  let [s3, setS3] = useState(localStorage.getItem('s3') === 'true' ? true : false);
  let [s4, setS4] = useState(localStorage.getItem('s4') === 'true' ? true : false);
  
  let context = useContext(Context)


  useEffect(() => {

    let audio = document.querySelector('.audio-trac');
    if(musicPlay) {
      audio.play();
      audio.volume = audioVolume;
    } else {
      audio.pause();
    }
    
  }, [musicPlay, audioVolume])  

  useEffect(() => {
    s1 === true ? setSoundPlay(true) : setSoundPlay(false);
    s2 === true ? setMusicPlay(true) : setMusicPlay(false);
    s3 === true ? context.setGamer(false) : context.setGamer(true);
    s4 === true ? context.setBoard(false) : context.setBoard(true);
  }, [])

  function loadSettingsSound(e) {
    let id = e.target.id;
    if(id === 's1'){
      setS1(!s1)
      setSoundPlay(!soundPlay)
      localStorage.setItem('s1', !s1)
    }
    
    if(id === 's2'){
      setS2(!s2)
      setMusicPlay(!musicPlay)
      document.addEventListener('DOMContentLoaded', () => {
        setMusicPlay(s2 === true ? true : false)
      })
      localStorage.setItem('s2', !s2)
    }
    console.log(e.target.id)
  }


  useKeypress('q', () => {
    setMusicPlay(!musicPlay);
    document.querySelector('#s2').checked = !musicPlay;
  });
  
  useKeypress('w', () => {
    setSoundPlay(!soundPlay);
    document.querySelector('#s1').checked = !soundPlay;
  });
  
  useKeypress('e', () => {
    changeSettingsGamer();
    document.querySelector('#s3').checked = context.gamer;
  });
  
  useKeypress('r', () => {
    changeSettingsBoard();
    document.querySelector('#s4').checked = context.board;
  });
 
  useKeypress('t', () => {
    context.resetGame();
  });
  
  useKeypress('y', () => {
    context.setA1(context.a1 === 'x' ? 'o' : 'x')
  });


  function changeSettingsGamer() {
    setS3(!s3)
    localStorage.setItem('s3', !s3)
    let setGamer = context.setGamer;
    let gamer = context.gamer;
    setGamer(!gamer)
  }

  function changeSettingsBoard() {
    setS4(!s4)
    localStorage.setItem('s4', !s4)
    let board = context.board;
    let setBoard = context.setBoard;
    setBoard(!board)
  }


  return (
    <div className='settings'>

      <div className='sound'>
        <div className='set-range'>
          <audio className='audio-trac' src={soundfile}></audio>
          <input 
            className='input-settings'
            id='s2'
            type='checkbox' 
            onChange={(e) => loadSettingsSound(e)}
            checked={s2}
          />

          <output htmlFor='s2'>{audioVolume * 10}</output>  
          <Input setAudioVolume={setAudioVolume} />
          <label htmlFor="s2">music</label>
        </div>
        
        <div className='set-range'>
          <input 
            className='input-settings'
            id='s1'
            type='checkbox' 
            onChange={(e) => loadSettingsSound(e)}
            checked={s1}
          />
          <output htmlFor='s1'>{soundClick * 10}</output> 
          <Input setSoundClick={setSoundClick} />
          <label htmlFor="s1">click</label>
        </div>
      </div>

      <div className="set-gamer">
        <div>
          <input 
            id='s3' 
            type="checkbox" 
            onChange={changeSettingsGamer}
            checked={s3}
          />
          <label htmlFor="s3">change x, y</label>
        </div>
        
        <div>
          <input 
            id='s4' 
            type="checkbox" 
            onChange={changeSettingsBoard} 
            checked={s4}
          />
          <label htmlFor="s4">change board</label>
        </div>
      </div>

      <div className="records">
        <a href="/records">show records</a>
        <a href="/">hide records</a>
      </div>
    </div>
  )
}