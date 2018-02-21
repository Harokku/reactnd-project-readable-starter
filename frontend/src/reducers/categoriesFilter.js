import { SET_CATEGORIES_FILTER } from "../actions/categoriesFilter";

const categoriesFilter = (state = 'all', action) => {
  switch (action.type) {
    case SET_CATEGORIES_FILTER:
      return action.filter
    default:
      return state
  }
}

export default categoriesFilter