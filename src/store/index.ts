import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";

import systemReducer from "./system/reducer";
import authReducer from "./auth/reducer";
import camerasReducer from "./cameras/reducer";
import lensesReducer from "./lenses/reducer";

const rootReducer = combineReducers({
  system: systemReducer,
  auth: authReducer,
  cameras: camerasReducer,
  lenses: lensesReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector


const middlewares = [thunkMiddleware];
const middleWareEnhancer = applyMiddleware(...middlewares);

const store = createStore(
  rootReducer,
  composeWithDevTools(middleWareEnhancer)
);


export type AppDispatch = typeof store.dispatch

export default store;