import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import NavBar from './components/NavBar';
import LoginPage from './containers/LoginPage';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


//import logger from "redux-logger";
//import { applyMiddleware, createStore } from "redux";

// const store = createStore(reducers, applyMiddleware(logger()))


render(
    <MuiThemeProvider>
        <LoginPage />
    </MuiThemeProvider>,
    document.getElementById("app")
);