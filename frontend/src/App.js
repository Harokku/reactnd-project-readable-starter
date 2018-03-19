import React, { Component } from 'react';
import { Route, withRouter, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { fetchAllPosts } from "./actions/posts";

import PostsList from "./containers/PostsList";
import PostDetail from "./containers/PostDetail";
import CategoriesMenu from "./containers/CategoriesMenu";
import Error404 from "./components/Error404";

class App extends Component {

  componentDidMount() {
    this.props.dispatch(fetchAllPosts());
  }

  render() {
    return (
      <div>
        <CategoriesMenu />
        <Switch>
          <Route exact path='/' render={() => (
            <PostsList />
          )} />
          <Route exact path='/posts/category/:category' render={(state) => (
            <PostsList filter={state.match.params.category} />
          )} />
          <Route exact path='/posts/detail/:postId' render={(state) => (
            <PostDetail postId={state.match.params.postId} />
          )} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect()(App));
