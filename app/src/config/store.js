import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";

import {middleware} from "./history";
import reducers from "../reducers";

export const store = createStore(reducers,
    compose(
        applyMiddleware(thunk),
        applyMiddleware(middleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);
