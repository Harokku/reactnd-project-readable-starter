import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import combinedReducers from "./reducers/index";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { fetchCategories } from "./actions/categories";
import { fetchAllPosts } from "./actions/posts";
import { fetchCommentsForPost } from "./actions/comments";

let store = createStore(combinedReducers, applyMiddleware(thunk))

store.dispatch(fetchCategories())
store.dispatch(fetchAllPosts())
store.dispatch(fetchCommentsForPost('8xf0y6ziyjabvozdd253nd'))

setTimeout(() => {
    console.group('Sore state')
    console.log(store.getState());
    console.groupEnd()
}, 2500);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
