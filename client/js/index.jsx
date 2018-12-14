import React from "react";
import ReactDOM from "react-dom";
import Test from "./Test";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
    <Provider store={store}>
        <Test />
    </Provider>,
    document.getElementById("content")
);