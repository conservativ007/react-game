import React, {useEffect, useState, useContext} from 'react';
import {Context} from './Context.jsx';

export default function Gamer({elem}) {
  let styles;

  let [gamerStyles, setGamerStyles] = useState(styles)
  let context = useContext(Context)
  

  let a = null;
  if(elem === 'x' && context.gamer){
    a = <div className='gamer-x-style1' >&times;</div>;
  } else if (elem === 'o' && context.gamer) {
    a = <div className='gamer-o-style1' >&#9675;</div>;
  } else if (elem === 'x' && !context.gamer) {
    a = <div className='gamer-x-style2'>
          <span></span>
          <span></span>
        </div>;
  } else if (elem === 'o' && !context.gamer) {
    a = <div className='gamer-o-style2'>
          <span></span>
        </div>;
  }

  return a;
}