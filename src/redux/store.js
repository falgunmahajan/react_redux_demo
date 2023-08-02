import { applyMiddleware, combineReducers, createStore } from "redux";
import { cakeReducer } from "./cakes/cakeReducer";
import { iceCreamReducer } from "./iceCream/iceCreamReducer";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer } from "./user/userReducer";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  user: userReducer,
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);
export { store };
