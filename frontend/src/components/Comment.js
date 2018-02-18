import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import { Feed } from "semantic-ui-react";

const Comment = (props) => (
  <Feed.Event>
    <Feed.Label icon='comment' />
    <Feed.Content>
      <Feed.Summary>
        <Feed.User>{props.comment.author}</Feed.User>
        <Feed.Date>{moment(props.comment.timestamp).format('Do MMM YYYY')}</Feed.Date>
      </Feed.Summary>
      <Feed.Extra text>{props.comment.body}</Feed.Extra>
      <Feed.Meta>{'Voted ' + props.comment.voteScore + ' times'}</Feed.Meta>
    </Feed.Content>
  </Feed.Event>
)

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
}

export default Comment