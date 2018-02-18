import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import { Card } from "semantic-ui-react";

const Post = (props) => (
  <Card color='teal'>
    <Card.Content
      header={props.post.title}
      meta={'Author: ' + props.post.author + ' @ ' + moment(props.post.timestamp).format('Do MMM YYYY')}
    />
    <Card.Content
      meta={'Posted in ' + props.post.category}
      description={props.post.body}
    />
    <Card.Content>
      {props.children}
    </Card.Content>
    <Card.Content extra>
      {'Voted ' + props.post.voteScore + ' times'}
    </Card.Content>
  </Card>
)

Post.propTypes = {
  post: PropTypes.object.isRequired,
}

export default Post