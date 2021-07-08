import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { combinedReducers } from "./rootReducers";
export const store = createStore(
  combinedReducers,
  composeWithDevTools(applyMiddleware(thunk))
);
