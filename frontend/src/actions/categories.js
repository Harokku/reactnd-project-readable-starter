export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'

/********************************/
// Syncronous Actions Creators
/********************************/

export const receiveCategories = (categories) => (
  {
    type: RECEIVE_CATEGORIES,
    categories
  }
)

/********************************/
// Asyncronous Actions Creators
/********************************/

export const fetchCategories = () => (dispatch) => {
  return fetch(`${process.env.REACT_APP_API_SERVER}/categories`, {
    headers: { 'Authorization': process.env.REACT_APP_AUTH_HEADER },
    method: 'GET'
  })
    .then(res => res.json())
    .then(response => dispatch(receiveCategories(response.categories)) )
}