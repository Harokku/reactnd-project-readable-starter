import React, { Component } from 'react';

import CategoriesList from "./containers/CategoriesList";
import PostsList from "./containers/PostsList";

class App extends Component {
  render() {
    return (
      <div>
        <CategoriesList />

        <PostsList />
      </div>
    );
  }
}

export default App;
