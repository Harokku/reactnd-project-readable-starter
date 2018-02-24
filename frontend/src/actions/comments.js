export const ADD_COMMENT = 'ADD_COMMENT'
export const RECEIVE_COMMENTS_FOR_POST = 'RECEIVE_COMMENTS_FOR_POST'


/********************************/
// Syncronous Actions Creators
/********************************/

export const addComment = (comment) => (
  {
    type: ADD_COMMENT,
    comment
  }
)

export const receiveCommentsForPost = (comments, postId) => (
  {
    type: RECEIVE_COMMENTS_FOR_POST,
    comments,
    postId,
  }
)

/********************************/
// Asyncronous Actions Creators
/********************************/

export const fetchCommentsForPost = (postId) => (dispatch) => {
  return fetch(`http://127.0.0.1:3001/posts/${postId}/comments`, {
    headers: { 'Authorization': process.env.REACT_APP_AUTH_HEADER },
    method: 'GET'
  })
  .then(res => res.json())
  .then(response => dispatch(receiveCommentsForPost(response, postId)))
}