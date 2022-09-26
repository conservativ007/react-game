import React from 'react';
import { useSelector } from 'react-redux';

export default function Gamer({ elem }) {

  const gamer = useSelector(store => store.gameSettingsReducer);

  let o = <svg width="75" height="75">
    <circle cx="36" cy="36" r="18" stroke="white" strokeWidth="5" fill="transparent" />
  </svg>;

  if (elem === 'x' && gamer.isGamerStyleChanged === false) {
    return <div className='gamer-x-style1' >&times;</div>;
  } else if (elem === 'o' && gamer.isGamerStyleChanged === false) {
    return o;
  } else if (elem === 'x' && gamer.isGamerStyleChanged === true) {
    return <div className='gamer-x-style2'>
      <span></span>
      <span></span>
    </div>;
  }
  else if (elem === 'o' && gamer.isGamerStyleChanged === true) {
    return <div className='gamer-o-style2'>
      <span></span>
    </div>;
  }
  return null;
}