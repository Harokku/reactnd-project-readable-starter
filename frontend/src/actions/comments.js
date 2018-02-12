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

export const receiveCommentsForPost = (comments) => (
  {
    type: RECEIVE_COMMENTS_FOR_POST,
    comments
  }
)

/********************************/
// Asyncronous Actions Creators
/********************************/

export const fetchCommentsForPost = (postId) => (dispatch) => {
  return fetch(`http://127.0.0.1:3001/posts/${postId}/comments`, {
    headers: { 'Authorization': 'ixos-911' },
    method: 'GET'
  })
  .then(res => res.json())
  .then(response => dispatch(receiveCommentsForPost(response)))
}