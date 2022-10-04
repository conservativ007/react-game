import React, { useRef } from 'react';
import { actionChoiceAi } from '../../store/aiSetingsRedicer';

import { useDispatch, useSelector } from 'react-redux';

import "../../styles/dropdown.css";

const Select = () => {

  const dispatch = useDispatch();
  const isAi = useSelector(store => store.aiSetingsRedicer);

  const refDropdown = useRef(null);

  function changeName(e) {
    refDropdown.current.classList.toggle("dropdown-active");

    if (e.target.innerHTML === "bot") {
      dispatch(actionChoiceAi(true));
      refDropdown.current.firstChild.value = "bot";
    }

    if (e.target.innerHTML === "friend") {
      dispatch(actionChoiceAi(false));
      refDropdown.current.firstChild.value = "friend";
    }
  }

  return (
    <div ref={refDropdown} className="dropdown" onClick={(e) => changeName(e)}>
      <input type="text" className="text-box" value={isAi.ai === true ? "bot" : "friend"} onChange={() => console.log()} />
      <div className="option">
        <div>bot</div>
        <div>friend</div>
      </div>
    </div>
  );
}

export default Select;
