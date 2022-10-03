import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import store from "./Redux/Store/store";
import { Provider } from "react-redux";

function Main() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
export default Main;
