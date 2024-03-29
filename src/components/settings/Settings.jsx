import React from 'react';
import '../../styles/settings.css';
import '../../styles/gamers.css';
import GetSetting from './GetSetting.jsx';

export default function Settings() {

  return (
    <div className='settings'>
      <GetSetting value={"music"} />
      <GetSetting value={"click"} />
      <GetSetting value={"x, y"} />
      <GetSetting value={"board"} />

      <div className="bottom-line"></div>
    </div>
  )
}