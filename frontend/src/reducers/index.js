import { combineReducers } from "redux";
import posts from "./posts";
import categories from "./categories";
import categoriesFilter from "./categoriesFilter";
import comments from "./comments";

const combinedReducers = combineReducers({
    categories,
    categoriesFilter,
    posts,
    comments,
})

export default combinedReducers;