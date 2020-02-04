import React from "react";
import { Provider } from "react-redux";

import store from "./src/reducer";

import Screen from "./src/Screen";

const App = () => (
  <Provider store={store}>
    <Screen />
  </Provider>
);

export default App;
