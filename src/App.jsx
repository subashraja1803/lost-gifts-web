import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import RouteSwitch from "./pages/base/RouteSwitch";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import lostGiftsStore from "./store";

function App() {
  const store = configureStore({
    reducer: lostGiftsStore,
  });
  return (
    <BrowserRouter>
      <Provider store={store}>
        <RouteSwitch />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
