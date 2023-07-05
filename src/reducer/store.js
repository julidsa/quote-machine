import { combineReducers, createStore } from "redux";
import quoteReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  quote: quoteReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
