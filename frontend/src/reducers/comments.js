import {
  ADD_COMMENT,
  RECEIVE_COMMENTS_FOR_POST,
  INCREMENT_COMMENT_VOTE,
  DECREMENT_COMMENT_VOTE,
  DELETE_COMMENT
} from "../actions/comments";

const comments = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_COMMENTS_FOR_POST:
      return [
        ...state.filter(comment => comment.parentId !== action.postId),
        ...action.comments
      ]
    case ADD_COMMENT:
      return [
        ...state,
        {
          ...action.comment,
          voteScore: 1,
          deleted: false,
          parentDeleted: false,
        }
      ]
    case INCREMENT_COMMENT_VOTE:
      return state.map(comment => (
        comment.id === action.commentId
          ? {
            ...comment,
            voteScore: comment.voteScore + 1,
          }
          : comment
      ))
    case DECREMENT_COMMENT_VOTE:
      return state.map(comment => (
        comment.id === action.commentId
          ? {
            ...comment,
            voteScore: comment.voteScore - 1,
          }
          : comment
      ))
    case DELETE_COMMENT:
      return state.filter(comment => (
        comment.id !== action.commentId
      ))
    default:
      return state
  }
}

export default comments