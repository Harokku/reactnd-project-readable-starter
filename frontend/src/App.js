import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CategoriesList from "./containers/CategoriesList";
import PostsList from "./containers/PostsList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <hr />

        <CategoriesList />

        <PostsList />
      </div>
    );
  }
}

export default App;
