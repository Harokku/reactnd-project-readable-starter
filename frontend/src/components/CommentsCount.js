import React from "react";
import PropTypes from "prop-types";

import { Icon, Statistic } from "semantic-ui-react";

const CommentsCount = (props) => (
  <Statistic>
    <Statistic.Label>Number of comments</Statistic.Label>
    <Statistic.Value>
      <Icon name='comments outline' />
      {props.comments.length}
    </Statistic.Value>
  </Statistic>
)

CommentsCount.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object),
}

export default CommentsCount