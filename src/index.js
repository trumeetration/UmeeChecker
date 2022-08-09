import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "./redux/rootRecuder";
import thunk from "redux-thunk";
import {Provider} from "react-redux";

const store = createStore(rootReducer, compose(
    applyMiddleware(
        thunk
    )
))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);

