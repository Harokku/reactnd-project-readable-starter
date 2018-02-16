import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { fetchCommentsForPost } from "../actions/comments";

import Comment from "../components/Comment";

class CommentsList extends Component {

  componentDidMount() {
    this.props.postId && this.props.dispatch(fetchCommentsForPost(this.props.postId))
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.comments && this.props.comments.map(comment =>
            <li key={comment.id}>
              <Comment comment={comment} />
            </li>
          )}
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