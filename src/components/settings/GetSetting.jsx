import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionModifyBoard, actionModifyGamer, actionModifySound } from '../../store/gameSettingsReducer.js';


const GetSetting = ({ value }) => {

  const elemOfSetting = useRef(null);
  const dispatch = useDispatch();

  function print(e, value) {

    e.preventDefault();
    elemOfSetting.current.classList.toggle("setting-active");

    switch (value) {
      case "x, y":
        console.log("x, y");
        dispatch(actionModifyGamer());
        break;
      case "board":
        console.log("board");
        dispatch(actionModifyBoard());
        break;
      case "click":
        console.log("click");
        dispatch(actionModifySound());
        break;
    }

  }

  return (
    <div ref={elemOfSetting} onClick={(e) => print(e, value)} className="setting">
      <label>
        <input type="checkbox" />
        <span>{value}</span>
      </label>
    </div>
  );
}

export default GetSetting;
