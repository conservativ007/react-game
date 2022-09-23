import React, { useEffect, useRef, useState } from 'react';
import '../styles/footer.css';

export default function Footer({ resetGame }) {

  let [isShowSettings, setIsShowSettings] = useState(false);
  let buttonOfSetting = useRef(null);

  function showSettings() {
    document.querySelector(".settings")
      .classList.toggle("show-settings");
    setIsShowSettings(prev => !prev);
  }

  useEffect(() => {
    isShowSettings === false ?
      buttonOfSetting.current.className = "animate-down" :
      buttonOfSetting.current.className = "animate-up";

  }, [isShowSettings]);

  return (
    <div className='footer'>
      <div className="author">
        <span>
          <a href="https://github.com/conservativ007">Conservativ</a>
        </span>
      </div>
      <div className="reset-game">
        <p onClick={() => resetGame()}>начать занаво</p>
        <div
          ref={buttonOfSetting}
          onClick={() => showSettings()} >&#187;</div>
      </div>
      <div className="link">
        <a target='blink' href="https://rs.school/js/">
          <img className='footer-img' src="https://rs.school/images/rs_school_js.svg" alt="rs_school" />
        </a>
        <span className='year'>2021</span>
      </div>
    </div>
  )
}