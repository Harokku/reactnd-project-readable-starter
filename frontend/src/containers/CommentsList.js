import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { fetchCommentsForPost } from "../actions/comments";

import Comment from "../components/Comment";

class CommentsList extends Component {

  componentDidMount() {
    this.props.postId && this.props.dispatch(fetchCommentsForPost(this.props.postId))
  }

  renderCommentsForPost(comments, postId) {
    return comments && comments
      .filter(comment => (
        comment.parentId === postId
      ))
      .map(comment =>
        <li key={comment.id}>
          <Comment comment={comment} />
        </li>
      )
  }

  render() {
    return (
      <div>
        <ul>
          {this.renderCommentsForPost(this.props.comments, this.props.postId)}
        </ul>
      </div>
    )
  }
}

CommentsList.propTypes = {
  postId: PropTypes.string.isRequired,
  comments: PropTypes.array,
}

const mapStateToProps = state => (
  { comments: state.comments }
)

export default connect(mapStateToProps)(CommentsList)