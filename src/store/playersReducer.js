const defaultStore = {
  x: 0,
  o: 0,
  whoMove: "x",
  whoPlayer: "x",
  winner: null,
  endGame: false,
  drow: false,
  isGameStart: null
}

const INCREMENT = "INCREMENT";
const CHANGE_PLAYER_WHO_MOVED = "CHANGE_PLAYER";
const SET_ENDGAME = "SET_ENDGAME";
const SET_WINNER = "SET_WINNER";
const SET_DROW = "SET_DROW";
const WHO_PLAYER = "WHO_PLAYER";
const START_GAME = "START_GAME";

export function playersReducer(store = defaultStore, action) {
  switch (action.type) {
    case INCREMENT:
      return customIncrement(store, action.payload);
    case CHANGE_PLAYER_WHO_MOVED:
      return { ...store, whoMove: action.payload };
    case WHO_PLAYER:
      return { ...store, whoPlayer: action.payload };
    case SET_ENDGAME:
      return { ...store, endGame: action.payload };
    case SET_WINNER:
      return { ...store, winner: action.payload };
    case SET_DROW:
      return { ...store, drow: action.payload };
    case START_GAME:
      return { ...store, isGameStart: action.payload };
    default: return store;
  }
}

function customIncrement(store, val) {
  if (val === "x") return { ...store, x: store.x += 1 }
  if (val === "o") return { ...store, o: store.o += 1 }
}

export const actionIncrement = (payload) => ({ type: INCREMENT, payload });
export const actionChangePlayer = (payload) => ({ type: CHANGE_PLAYER_WHO_MOVED, payload });
export const actionEndGame = (payload) => ({ type: SET_ENDGAME, payload });
export const actionSetWinner = (payload) => ({ type: SET_WINNER, payload });
export const actionSetDrow = (payload) => ({ type: SET_DROW, payload });
export const actionSetPlayer = (payload) => ({ type: WHO_PLAYER, payload });
export const actionStartGame = (payload) => ({ type: START_GAME, payload });