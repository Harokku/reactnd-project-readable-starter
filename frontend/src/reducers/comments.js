import { ADD_COMMENT, RECEIVE_COMMENTS_FOR_POST } from "../actions/comments";

const comments = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_COMMENTS_FOR_POST:
      return [
        ...state,
        ...action.comments
      ]
    case ADD_COMMENT:
      return [
        ...state,
        action.comment
      ]
    default:
      return state
  }
}

export default comments