import React, { useState } from 'react'
import Componenta from './Componenta.jsx';

function App() {

  const [arr, setArr] = useState(Array(9).fill(null))

  let result = arr.map((elem, index) => {
    return <Componenta 
    key={index} 
    index={index} 
    elem={elem} 
    />
  })

  return (
    <>
      <div className="board">
        <div className="tic-tac-toe">
          {result}
        </div>
      </div>
    </>
  )
}

export default App;


