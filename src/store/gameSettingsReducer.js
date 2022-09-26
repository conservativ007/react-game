const defaultStore = {
  isGamerStyleChanged: false,
  isBoardStyleChanged: false,
  isSoundByClick: false,
  isSoundByMusic: false,
}

const MODIFY_GAMER = "MODIFY_GAMER";
const MODIFY_BOARD = "MODIFY_BOARD";
const SOUND_CLICK = "SOUND_CLICK";
const SOUND_MUSIC = "SOUND_MUSIC";

export function gameSettingsReducer(store = defaultStore, action) {
  switch (action.type) {
    case MODIFY_GAMER: {
      return { ...store, isGamerStyleChanged: !store.isGamerStyleChanged }
    }
    case MODIFY_BOARD: {
      return { ...store, isBoardStyleChanged: !store.isBoardStyleChanged }
    }
    case SOUND_CLICK: {
      return { ...store, isSoundByClick: !store.isSoundByClick }
    }
    case SOUND_MUSIC: {
      return { ...store, isSoundByMusic: !store.isSoundByMusic }
    }
    default: return store;
  }
}

export const actionModifyGamer = () => ({ type: MODIFY_GAMER });
export const actionModifyBoard = () => ({ type: MODIFY_BOARD });
export const actionModifySound = () => ({ type: SOUND_CLICK });
export const actionPlayMusic = () => ({ type: SOUND_MUSIC });