import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import moment from "moment";

import { Grid, Card } from "semantic-ui-react";

import VoteButton from "./VoteButton";

const Post = (props) => (
  <Card color='teal'>
    <Card.Content>
      <Card.Header>
        <Link
        to={`/posts/detail/${props.post.id}`}
        >
        {props.post.title}
        </Link>
      </Card.Header>
      <Card.Meta>
        {'Author: ' + props.post.author + ' @ ' + moment(props.post.timestamp).format('Do MMM YYYY')}
      </Card.Meta>
    </Card.Content>
    <Card.Content
      meta={'Posted in ' + props.post.category}
      description={props.post.body}
    />
    <Card.Content>
      {props.children}
    </Card.Content>
    <Card.Content extra>
      <Grid verticalAlign='middle' columns='3' stretched>
        <Grid.Row>
          <Grid.Column width='8'>
            {'Voted ' + props.post.voteScore + ' times'}
          </Grid.Column>
          <Grid.Column width='4' textAlign='right'>
            Vote
          </Grid.Column>
          <Grid.Column width='4' textAlign='left'>
            <VoteButton onVote={props.onVote} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Card.Content>
  </Card>
)

Post.propTypes = {
  onVote: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
}

export default Post