import React from "react";
import PropTypes from "prop-types";

import { Popup, Button } from "semantic-ui-react";

const DeleteButton = (props) => (
  <Popup
    trigger={
      <Button
        color='red'
        size={props.size}
        circular
        icon='delete'
        onClick={() => props.onDelete()} />
    }
    content={props.popup}
  />
)

DeleteButton.propTypes = {
  popup: PropTypes.string,
  size: PropTypes.oneOf(['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive']),
  onDelete: PropTypes.func.isRequired,
}

DeleteButton.defaultProps = {
  popup: 'Delete item',
  size: 'mini'
}

export default DeleteButton