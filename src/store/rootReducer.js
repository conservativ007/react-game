import { legacy_createStore } from "redux";
import { combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import { gameSettingsReducer } from "./gameSettingsReducer.js";
import { playersReducer } from "./playersReducer.js";
import { aiSetingsRedicer } from "./aiSetingsRedicer.js";

const rootReducer = combineReducers({
  gameSettingsReducer,
  playersReducer,
  aiSetingsRedicer
});

export const store = legacy_createStore(rootReducer, composeWithDevTools());