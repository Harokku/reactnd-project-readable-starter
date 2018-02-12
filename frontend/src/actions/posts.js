export const ADD_POST = 'ADD_POST'
export const RECEIVE_POST = 'RECEIVE_POST'

/********************************/
// Syncronous Actions Creators
/********************************/

export const addPost = (post) => (
  {
    type: ADD_POST,
    post
  }
)

export const receivePosts = (posts) => (
  {
    type: RECEIVE_POST,
    posts
  }
)

/********************************/
// Asyncronous Actions Creators
/********************************/

export const fetchAllPosts = () => (dispatch) => {
  return fetch('http://127.0.0.1:3001/posts', {
    headers: { 'Authorization': 'ixos-911' },
    method: 'GET'
  })
    .then(res => res.json())
    .then(response => dispatch(receivePosts(response)) )
}