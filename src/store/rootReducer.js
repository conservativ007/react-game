import { legacy_createStore } from "redux";
import { combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import { gameSettingsReducer } from "./gameSettingsReducer.js";
import { playersReducer } from "./playersReducer.js";

const rootReducer = combineReducers({
  gameSettingsReducer,
  playersReducer
});

export const store = legacy_createStore(rootReducer, composeWithDevTools());