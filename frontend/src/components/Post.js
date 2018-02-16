import React from "react";
import PropTypes from "prop-types";

const Post = (props) => (
  <div>
    {props.children}
    {JSON.stringify(props.post)}
  </div>
)

Post.propTypes = {
  post: PropTypes.object.isRequired,
}

export default Post