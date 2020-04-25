import React from "react";
import { Provider } from "react-redux";

import Main from "./src/pages/Main";

import store from "./src/store";

import axios from "axios";

axios.defaults.baseURL = 'http://192.168.1.100:9000/api'

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default App;
