export const ADD_POST = 'ADD_POST'
export const RECEIVE_POST = 'RECEIVE_POST'
export const INCREMENT_POST_VOTE = 'INCREMENT_POST_VOTE'
export const DECREMENT_POST_VOTE = 'DECREMENT_POST_VOTE'
export const DELETE_POST = 'DELETE_POST'
const API_VOTE_TYPE = {
  upVote: 'upVote',
  downVote: 'downVote',
}

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

export const incrementPostVote = (postId) => (
  {
    type: INCREMENT_POST_VOTE,
    postId,
  }
)

export const decrementPostVote = (postId) => (
  {
    type: DECREMENT_POST_VOTE,
    postId,
  }
)

export const removePost = (postId) => (
  {
    type: DELETE_POST,
    postId
  }
)

/********************************/
// Asyncronous Actions Creators
/********************************/

export const fetchAllPosts = () => (dispatch) => {
  return fetch(`${process.env.REACT_APP_API_SERVER}/posts`, {
    headers: { 'Authorization': process.env.REACT_APP_AUTH_HEADER },
    method: 'GET'
  })
    .then(res => res.json())
    .then(response => dispatch(receivePosts(response)))
}

export const postNewPost = (post) => (dispatch) => {
  return fetch(`${process.env.REACT_APP_API_SERVER}/posts`, {
    headers: {
      'Authorization': process.env.REACT_APP_AUTH_HEADER,
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(post),
  })
    .then(dispatch(addPost(post)))
    .catch(err => console.log(err))
}

export const postVotePost = (postId, voteType) => (dispatch) => {
  return fetch(`${process.env.REACT_APP_API_SERVER}/posts/${postId}`, {
    headers: {
      'Authorization': process.env.REACT_APP_AUTH_HEADER,
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({option: voteType}),
  })
    .then(() => {
      switch (voteType) {
        case API_VOTE_TYPE.upVote:
          return dispatch(incrementPostVote(postId))
        case API_VOTE_TYPE.downVote:
          return dispatch(decrementPostVote(postId))
        default:
          return
      }
    })
    .catch(err => console.log(err))
}

export const deleteComment = (postId) => (dispatch) => {
  return fetch(`${process.env.REACT_APP_API_SERVER}/posts/${postId}`, {
    headers: {
      'Authorization': process.env.REACT_APP_AUTH_HEADER,
      'Content-Type': 'application/json',
    },
    method: 'DELETE',
  })
}