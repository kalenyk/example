import React, {Fragment} from 'react';
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";

import {store} from "./config/store";
import {history} from "./config/history";

import MapComponent from "./Components/Map/";
import Authentication from "./Components/Authentication/";
import AboutAuthor from "./Components/AboutAuthor";
import Header from './Components/Header/';

import checkAuthorization from './Components/hocs/checkAuthorization';

ReactDOM.render(<Provider store={store}>
    <ConnectedRouter history={history}>
        <Fragment>
            <Route path='*' component={Header}/>
            <Route exact path="/" component={Authentication}/>
            <Route  path='/map' component={checkAuthorization(MapComponent)}/>
            <Route path="/about" component={checkAuthorization(AboutAuthor)}/>
        </Fragment>
    </ConnectedRouter>
</Provider>
,document.getElementById("app"));