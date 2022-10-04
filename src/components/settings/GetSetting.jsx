import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionModifyBoard, actionModifyGamer, actionModifySound, actionPlayMusic } from '../../store/gameSettingsReducer.js';

import useSound from 'use-sound';
import soundClickFile from "../../assets/sounds/Orc-Theme.mp3";

const GetSetting = ({ value }) => {

  const elemOfSetting = useRef(null);
  const [play, { stop }] = useSound(soundClickFile);

  const dispatch = useDispatch();
  const boardSettings = useSelector(store => store.gameSettingsReducer);

  useEffect(() => {
    boardSettings.isSoundByMusic === true ? play() : stop();
  }, [boardSettings]);

  function changeSettings(e, value) {
    e.preventDefault();
    elemOfSetting.current.classList.toggle("setting-active");

    switch (value) {
      case "x, y":
        dispatch(actionModifyGamer());
        break;
      case "board":
        dispatch(actionModifyBoard());
        break;
      case "click":
        dispatch(actionModifySound());
        break;
      case "music":
        dispatch(actionPlayMusic());
        break;
    }
  }

  return (
    <div ref={elemOfSetting} onClick={(e) => changeSettings(e, value)} className="setting">
      <label>
        <input type="checkbox" />
        <span>{value}</span>
      </label>
    </div>
  );
}

export default GetSetting;
