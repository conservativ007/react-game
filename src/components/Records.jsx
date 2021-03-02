import React, { useContext } from 'react';
import {saveRecord} from './function';
import {Context} from './Context.jsx';
import {records} from '../Styles/srecords.css';

export default function Records() {
  let records = saveRecord('abra-cadabra')

  return (
    <div className='table-records'>
      <div>всего игр сыграно: {records.x + records.o}</div>
      <div>x: {records.x}</div>
      <div>o: {records.o}</div>
    </div>
  )
}