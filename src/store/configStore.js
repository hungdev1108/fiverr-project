import thunk from "redux-thunk";

import { applyMiddleware, combineReducers, createStore } from "redux";

const rootReducer = combineReducers({
  // State
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
