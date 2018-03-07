export const ADD_COMMENT = 'ADD_COMMENT'
export const RECEIVE_COMMENTS_FOR_POST = 'RECEIVE_COMMENTS_FOR_POST'
export const INCREMENT_COMMENT_VOTE = 'INCREMENT_COMMENT_VOTE'
export const DECREMENT_COMMENT_VOTE = 'DECREMENT_COMMENT_VOTE'
export const DELETE_COMMENT = 'DELETE_COMMENT'
const API_VOTE_TYPE = {
  upVote: 'upVote',
  downVote: 'downVote',
}

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

export const incrementCommentVote = (commentId) => (
  {
    type: INCREMENT_COMMENT_VOTE,
    commentId,
  }
)

export const decrementCommentVote = (commentId) => (
  {
    type: DECREMENT_COMMENT_VOTE,
    commentId
  }
)

export const removeComment = (commentId) => (
  {
    type: DELETE_COMMENT,
    commentId
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

export const postNewComment = (comment) => (dispatch) => {
  return fetch('http://127.0.0.1:3001/comments', {
    headers: {
      'Authorization': process.env.REACT_APP_AUTH_HEADER,
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(comment),
  })
    .then(dispatch(addComment(comment)))
    .catch(err => console.log(err))
}

export const postVoteComment = (commentId, voteType) => (dispatch) => {
  return fetch(`http://127.0.0.1:3001/comments/${commentId}`, {
    headers: {
      'Authorization': process.env.REACT_APP_AUTH_HEADER,
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ option: voteType }),
  })
    .then(() => {
      switch (voteType) {
        case API_VOTE_TYPE.upVote:
          return dispatch(incrementCommentVote(commentId))
        case API_VOTE_TYPE.downVote:
          return dispatch(decrementCommentVote(commentId))
        default:
          return
      }
    })
    .catch(err => console.log(err))
}

export const deleteComment = (commentId) => (dispatch) => {
  return fetch(`http://127.0.0.1:3001/comments/${commentId}`, {
    headers: {
      'Authorization': process.env.REACT_APP_AUTH_HEADER,
      'Content-Type': 'application/json',
    },
    method: 'DELETE',
  })
    .then((res) => res.json())
    .then(() => {
      return dispatch(removeComment(commentId))
    })
    .catch(err => console.log(err))
}