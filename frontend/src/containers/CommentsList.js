import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { fetchCommentsForPost, postVoteComment, postNewComment } from "../actions/comments";

import { Feed } from "semantic-ui-react";
import AddNewComment from "../components/AddNewComment";
import Comment from "../components/Comment";
import CommentsCount from "../components/CommentsCount";

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
        <Comment key={comment.id} comment={comment} onVote={this.handleOnVote(comment.id)} />
      )
  }

  handleOnVote = (commentId) => (voteType) => this.props.dispatch(postVoteComment(commentId, voteType));

  postNew = (postId) => (comment) => {
    console.group('Working item')
    console.log(postId)
    console.log(comment)
    console.info({...comment, parentId: postId})
    console.groupEnd()
    this.props.dispatch(postNewComment({...comment, parentId: postId}))
  }

  render() {
    return (
      <div>
        {
          this.props.countOnly
            ? <CommentsCount comments={this.props.comments} />
            : <Feed>
              {this.renderCommentsForPost(this.props.comments, this.props.postId)}
              <AddNewComment onAddComment={this.postNew(this.props.postId)}/>
            </Feed>
        }
      </div>
    )
  }
}

CommentsList.propTypes = {
  countOnly: PropTypes.bool,
  postId: PropTypes.string.isRequired,
  comments: PropTypes.array,
}

const mapStateToProps = state => (
  { comments: state.comments }
)

export default connect(mapStateToProps)(CommentsList)