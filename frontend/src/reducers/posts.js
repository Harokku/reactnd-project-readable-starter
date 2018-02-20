import { ADD_POST, RECEIVE_POST } from "../actions/posts";

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
    default:
      return state
  }
}

export default posts