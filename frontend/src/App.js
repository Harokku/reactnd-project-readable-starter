import React, { Component } from 'react';
import { Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { fetchAllPosts } from "./actions/posts";

import PostsList from "./containers/PostsList";
import CategoriesMenu from "./containers/CategoriesMenu";

class App extends Component {

  componentDidMount() {
    this.props.dispatch(fetchAllPosts());
  }

  render() {
    return (
      <div>
        <CategoriesMenu />
        <Route exact path='/' render={() => (
          <PostsList />
        )} />
        <Route exact path='/posts/:category' render={(state) => (
          <PostsList filter={state.match.params.category}/>
        )} />
      </div>
    );
  }
}

export default withRouter(connect()(App));
