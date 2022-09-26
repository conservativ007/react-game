const defaultStore = {
  x: 0,
  o: 0,
  player: "x",
  winner: null,
  endGame: false,
  drow: false
}

const INCREMENT = "INCREMENT";
const CHANGE_PLAYER = "CHANGE_PLAYER";
const SET_ENDGAME = "SET_ENDGAME";
const SET_WINNER = "SET_WINNER";
const SET_DROW = "SET_DROW";

export function playersReducer(store = defaultStore, action) {
  switch (action.type) {
    case INCREMENT:
      return customIncrement(store, action.payload);
    case CHANGE_PLAYER:
      return { ...store, player: action.payload };
    case SET_ENDGAME:
      return { ...store, endGame: action.payload };
    case SET_WINNER:
      return { ...store, winner: action.payload };
    case SET_DROW:
      return { ...store, drow: action.payload };
    default: return store;
  }
}

function customIncrement(store, val) {
  if (val === "x") return { ...store, x: store.x += 1 }
  if (val === "o") return { ...store, o: store.o += 1 }
}

export const actionIncrement = (payload) => ({ type: INCREMENT, payload });
export const actionChangePlayer = (payload) => ({ type: CHANGE_PLAYER, payload });
export const actionEndGame = (payload) => ({ type: SET_ENDGAME, payload });
export const actionSetWinner = (payload) => ({ type: SET_WINNER, payload });
export const actionSetDrow = (payload) => ({ type: SET_DROW, payload });