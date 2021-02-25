import React from 'react';

export default function Footer({resetGame}) {
  return (
    <div className='footer' onClick={() => resetGame()} >
      начать занаво
    </div>
  )
}