import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { postVotePost } from "../actions/posts";

import { Card } from "semantic-ui-react";

import Post from "../components/Post";
import CommentsList from "./CommentsList";

class PostsDetail extends Component {

  /** Increment or decrement post vote
   * Using currying to decouple actual voting component
   * @param {string} postId - The post to vote for
   * @param {string} voteType - upVote to increment or downVote to decrement vote score by 1
   */
  handleOnVote = (postId) => (voteType) => this.props.dispatch(postVotePost(postId, voteType));

  render() {
    return (
      <div>
        <Card.Group>
          {this.props.post && <Post post={this.props.post} onVote={this.handleOnVote(this.props.post.id)}>
            <CommentsList postId={this.props.post.id} />
          </Post>}
        </Card.Group>
      </div>
    )
  }
}

PostsDetail.propTypes = {
  postId: PropTypes.string.isRequired
}

const findPost = (posts, postId) => (posts.find(post => post.id === postId))

const mapStateToProps = (state, props) => (
  {
    post: findPost(state.posts, props.postId)
  }
)

export default connect(mapStateToProps)(PostsDetail)