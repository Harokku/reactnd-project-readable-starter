import React, { Component } from 'react';
import { Route } from "react-router-dom";

import PostsList from "./containers/PostsList";
import CategoriesMenu from "./containers/CategoriesMenu";

class App extends Component {
  render() {
    return (
      <div>
        <CategoriesMenu />
        <Route exact path='/' render={() => (
          <PostsList />
        )} />
        <Route exact path='/posts' render={() => (
          <div />
        )} />
      </div>
    );
  }
}

export default App;
