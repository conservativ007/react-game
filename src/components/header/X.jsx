import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionChangePlayer, actionSetPlayer } from "../../store/playersReducer.js";

const X = () => {
  const playersSettings = useSelector(store => store.playersReducer);
  const dispatch = useDispatch();

  function setPlayer() {
    dispatch(actionChangePlayer("x"));
    dispatch(actionSetPlayer("x"));
  }

  return (
    <div onClick={() => setPlayer()} className={playersSettings.whoMove === 'x' ? "gamers-one active" : "gamers-one"}>
      <span>x</span>
      <span>{playersSettings.x === 0 ? "-" : playersSettings.x}</span>
    </div>
  );
}

export default X;
