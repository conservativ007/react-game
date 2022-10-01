import React from 'react';
import { useDispatch } from 'react-redux';
import { actionChoiceAi } from '../../store/aiSetingsRedicer';

const Select = () => {

  const dispatch = useDispatch();

  function choicePlayer(e) {
    if (e.target.value === "ai") {
      dispatch(actionChoiceAi(true));
    } else {
      dispatch(actionChoiceAi(false));
    }
  }

  return (
    <select onClick={(e) => choicePlayer(e)} className="choose-gamer">
      <option value="ai">играть с ботом</option>
      <option value="friend">играть с другом</option>
    </select>
  );
}

export default Select;
