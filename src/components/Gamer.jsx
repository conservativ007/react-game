import React from 'react';
import { useSelector } from 'react-redux';

export default function Gamer({ elem }) {

  const gamer = useSelector(store => store.gameSettingsReducer);

  if (elem === 'x' && gamer.isGamerStyleChanged === false) {
    return <div className='gamer-x-style1' >&times;</div>;
  } else if (elem === 'o' && gamer.isGamerStyleChanged === false) {
    return <div className='gamer-o-style1' >&#9675;</div>;
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