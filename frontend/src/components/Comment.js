import React from "react";
import PropTypes from "prop-types";

const Comment = (props) => (
  <div>
    {JSON.stringify(props.comment)}
  </div>
)

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
}

export default Comment