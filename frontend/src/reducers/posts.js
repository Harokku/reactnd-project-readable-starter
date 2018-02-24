import {
  ADD_POST,
  RECEIVE_POST,
  INCREMENT_POST_VOTE,
  DECREMENT_POST_VOTE
} from "../actions/posts";

const posts = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_POST:
      return [...action.posts]
    case ADD_POST:
      return [
        ...state,
        {
          ...action.post,
          voteScore: 1,
          deleted: false,
          commentCount: 0,
        }
      ]
    case INCREMENT_POST_VOTE:
      return state.map(post => (
        post.id === action.postId
          ? {
            ...post,
            voteScore: post.voteScore + 1,
          }
          : post
      ))
    case DECREMENT_POST_VOTE:
      return state.map(post => (
        post.id === action.postId
          ? {
            ...post,
            voteScore: post.voteScore - 1,
          }
          : post
      ))
    default:
      return state
  }
}

export default posts