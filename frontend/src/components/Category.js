import React from "react";
import PropTypes from "prop-types";

const Category = (props) => (
  <a href={props.redirUrl}>{props.category}</a>
)

Category.propTypes = {
  category: PropTypes.string.isRequired,
  redirUrl: PropTypes.string.isRequired,
}

export default Category