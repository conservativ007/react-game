import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionChangePlayer, actionSetPlayer } from "../../store/playersReducer.js";

const O = () => {

  const playersSettings = useSelector(store => store.playersReducer);
  const dispatch = useDispatch();

  function setPlayer() {
    dispatch(actionChangePlayer("o"));
    dispatch(actionSetPlayer("o"));
  }

  return (
    <div onClick={() => setPlayer()} className={playersSettings.whoMove !== 'x' ? "gamers-two active" : "gamers-two"}>
      <span>o</span>
      <span>{playersSettings.o === 0 ? "-" : playersSettings.o}</span>
    </div>
  );
}

export default O;
