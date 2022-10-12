import thunk from "redux-thunk";

import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { ManagerJobReducer } from "./reducers/ManagerJobReducer";
import { ManagerCommentReducer } from "./reducers/ManagerCommentReducer";

const rootReducer = combineReducers({
  // State
  ManagerJobReducer,
  ManagerCommentReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
