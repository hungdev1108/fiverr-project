import thunk from "redux-thunk";

import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { ManagerJobReducer } from "./reducers/ManagerJobReducer";
import { ManagerCommentReducer } from "./reducers/ManagerCommentReducer";
import { LoadingReducer } from "./reducers/LoadingReducer";
import { UserManagerReducer } from "./reducers/UserManagerReducer";

const rootReducer = combineReducers({
  // State
  LoadingReducer,
  ManagerJobReducer,
  ManagerCommentReducer,
  UserManagerReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
