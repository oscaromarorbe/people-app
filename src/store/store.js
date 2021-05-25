import { createStore } from "@reduxjs/toolkit";
import reducer from "../reducer/reducer";

const initializeStore = (initialState) => {
  let store = createStore(reducer, initialState);
  store.subscribe(() => console.log(store.getState()));
  return store;
};

export default initializeStore;
