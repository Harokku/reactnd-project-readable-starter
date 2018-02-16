import React from "react";
import PropTypes from "prop-types";

const Post = (props) => (
  <div>
    <b>{JSON.stringify(props.post)}</b>
    {props.children}
  </div>
)

Post.propTypes = {
  post: PropTypes.object.isRequired,
}

export default Post