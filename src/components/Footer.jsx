import React from 'react';
import footer from '../Styles/footer.css';

export default function Footer({resetGame}) {
  return (
    <div className='footer'>
      <div className="author">
        <span>
          <a href="https://github.com/conservativ007">Conservativ</a>
        </span>
      </div>
      <div className="reset-game" onClick={() => resetGame()}>
        начать занаво
      </div>
      <div className="link">
        <a target='blink' href="https://rs.school/js/">
          <img className='footer-img' src="https://rs.school/images/rs_school_js.svg" alt="rs_school"/>
        </a>
        <span className='year'>2021</span>
      </div>
    </div>
  )
}