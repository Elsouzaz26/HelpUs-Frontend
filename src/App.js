import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import GlobalStyles from "./assets/styles/globalStyle";
import AppProvider from "./AppProvider";

import Routes from "./router";
import rootReducer from "./redux";
// import Socket from "./config/socket.config"
import "./index.css";
const store = configureStore({ reducer: rootReducer });

const App = () => (
  <Provider store={store}>
    <AppProvider>
      <>
        <GlobalStyles />
        <Routes />
      </>
    </AppProvider>
  </Provider>
);

export default App;

