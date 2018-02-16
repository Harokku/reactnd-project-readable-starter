import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware , compose} from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import combinedReducers from "./reducers/index";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(combinedReducers, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
