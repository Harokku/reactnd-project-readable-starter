import React from "react";
import PropTypes from "prop-types";

import { Input, Card } from "semantic-ui-react";

const EditPost = (props) => (
  <div>
    <Card.Content>
      <Card.Header>
        <DeleteButton popup='Delete post' onDelete={props.onDelete} />
        <Link to={`/posts/detail/${props.post.id}`}>
          <Input label='Title' placeholder={props.title} />
        </Link>
      </Card.Header>
      <Card.Meta>
        {'Author: ' + props.post.author + ' @ ' + moment(props.post.timestamp).format('Do MMM YYYY')}
      </Card.Meta>
    </Card.Content>
    <Card.Content>
      <Card.Meta>
        <EditButton popup='Edit post' onEdit={this.handleEditingPost} />
        {'Posted in ' + props.post.category}
      </Card.Meta>
      <Card.Description>
        <Input label='Body' placeholder={props.body} />
      </Card.Description>
    </Card.Content>
  </div>
)

EditPost.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired
}

export default EditPost