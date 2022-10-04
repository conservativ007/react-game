import React from 'react';
import { useSelector } from 'react-redux';

const Message = () => {

  const playersSettings = useSelector(store => store.playersReducer);

  if (playersSettings.endGame === false && playersSettings.isGameStart === null) {
    return (
      <p className="message">Начните игру или выберите игрока</p>
    )
  }

  if (playersSettings.isGameStart === true && playersSettings.endGame === false) {
    return (
      <p className="message">ходит: {playersSettings.whoMove}</p>
    )
  }

  return (
    <div className="message">
      <p className="message__show-winner">
        {playersSettings.endGame === true && playersSettings.drow === false ? "Игра окончена, победитель " + playersSettings.winner : null}
        {playersSettings.endGame === true && playersSettings.drow === true ? "Ничья!" : null}
      </p>
    </div>
  );
}

export default Message;
