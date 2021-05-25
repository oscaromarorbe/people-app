import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import axios from "axios";
import reducer from "./reducer/reducer";
import initialState from "./store/initialState";
import initializeStore from "./store/store";
import CardsList from "./components/CardsList";
import SearchForm from "./components/SearchForm";

const store = initializeStore(initialState);

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        {/* <SearchForm /> */}
        <CardsList />
      </div>
    </Provider>
  );
};

export default App;
