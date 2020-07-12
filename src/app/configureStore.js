import { createStore, compose, applyMiddleware } from "redux";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";

export default function configureStore(initialState) {
  const composeEnhancer =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // This will add support to redux devtools
  return createStore(
    rootReducer,
    initialState,
    //  reduxImmutableStateInvariant: This middleware is used to make sure no one update the state directly.
    //  thunk: is middle ware used to handle async api handling. it automaitcally inject dispatch in action creator
    composeEnhancer(applyMiddleware(thunk, reduxImmutableStateInvariant()))
  );
}
