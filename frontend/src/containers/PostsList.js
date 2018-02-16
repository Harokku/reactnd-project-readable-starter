import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { fetchAllPosts } from "../actions/posts";

import Post from "../components/Post";
import CommentsList from "../containers/CommentsList"

class PostsList extends Component {

  componentDidMount() {
    this.props.dispatch(fetchAllPosts());
  }

  render() {
    return (
      <div>
        <ol>
          {this.props.posts && this.props.posts.map(post => (
            <li key={post.id}>
              <Post post={post}>
                <CommentsList postId={post.id} />
              </Post>
            </li>
          ))}
        </ol>
      </div>
    )
  }
}

PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
}

const mapStateToProps = state => (
  { posts: state.posts }
)

export default connect(mapStateToProps)(PostsList)