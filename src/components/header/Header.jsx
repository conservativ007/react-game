import React from 'react';
import '../.././styles/head.css'

import X from './X.jsx';
import O from './O.jsx';
import Select from './Select.jsx';
import Message from './Message.jsx';

export default function Header() {

  return (
    <div className='header'>
      <Select />
      <div className="gamers">
        <X />
        <O />
      </div>
      <Message />
    </div>
  )
}