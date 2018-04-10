import React from "react";
import PropTypes from "prop-types";

import { Popup, Button } from "semantic-ui-react";

const EditButton = (props) => (
  <Popup
    trigger={
      <Button
        color='blue'
        size={props.size}
        circular
        icon='edit'
        onClick={() => props.onEdit()} />
    }
    content={props.popup}
  />
)

EditButton.propTypes = {
  popup: PropTypes.string,
  size: PropTypes.oneOf(['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive']),
  onEdit: PropTypes.func.isRequired,
}

EditButton.defaultProps = {
  popup: 'Edit item',
  size: 'mini'
}

export default EditButton