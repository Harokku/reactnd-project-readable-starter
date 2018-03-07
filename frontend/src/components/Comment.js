import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import { Popup, Button, Grid, Feed } from "semantic-ui-react";

import VoteButton from "../components/VoteButton";

const Comment = (props) => (
  <Feed.Event>
    <Feed.Label icon='comment' />
    <Feed.Content>
      <Feed.Summary>
        <Popup
          trigger={
            <Button
              color='red'
              size='mini'
              circular
              icon='delete'
              onClick={() => props.onDelete(props.comment.id)} />
          }
          content='Click to delete comment'
        />
        <Feed.User>{props.comment.author}</Feed.User>
        <Feed.Date>{moment(props.comment.timestamp).format('Do MMM YYYY')}</Feed.Date>
      </Feed.Summary>
      <Feed.Extra text>{props.comment.body}</Feed.Extra>
      <Feed.Meta>
        <Feed.Like>
          <Grid verticalAlign='middle' columns='3' stretched>
            <Grid.Row>
              <Grid.Column width='9'>
                {'Voted ' + props.comment.voteScore + ' times'}
              </Grid.Column>
              <Grid.Column width='6' textAlign='left'>
                <VoteButton onVote={props.onVote} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Feed.Like>
      </Feed.Meta>
    </Feed.Content>
  </Feed.Event>
)

Comment.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onVote: PropTypes.func.isRequired,
  comment: PropTypes.object.isRequired,
}

export default Comment