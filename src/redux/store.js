import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";

const middleWsres = [logger];

const store = createStore(rootReducer, applyMiddleware(...middleWsres));

export default store;