import React from "react";
import PropTypes from "prop-types";

import { Button } from "semantic-ui-react";

const VoteButton = (props) => (
  <Button.Group size='mini' basic vertical>
    <Button icon='arrow up' onClick={() => props.onVote('upVote')}/>
    <Button icon='arrow down' onClick={() => props.onVote('downVote')}/>
  </Button.Group>
)

VoteButton.propTypes = {
  onVote: PropTypes.func.isRequired,
}

export default VoteButton