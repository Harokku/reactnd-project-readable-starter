import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import moment from "moment";

import { Input, Grid, Card } from "semantic-ui-react";


import VoteButton from "./VoteButton";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

class Post extends Component {
  state = {
    isEditing: false
  }

  handleEditingPost = (e) => this.setState({ isEditing: !this.state.isEditing })

  render() {
    return (
      <Card color='teal'>
        <Card.Content>
          <Card.Header>
            <DeleteButton popup='Delete post' onDelete={this.props.onDelete} />
            {this.state.isEditing
              ?
              <Input size='mini' label='Title' placeholder={this.props.post.title} />
              :
              <Link to={`/posts/detail/${this.props.post.id}`}>
                {this.props.post.title}
              </Link>
            }
          </Card.Header>
          <Card.Meta>
            {'Author: ' + this.props.post.author + ' @ ' + moment(this.props.post.timestamp).format('Do MMM YYYY')}
          </Card.Meta>
        </Card.Content>
        <Card.Content>
          <Card.Meta>
            <EditButton popup='Edit post' onEdit={this.handleEditingPost} />
            {'Posted in ' + this.props.post.category}
          </Card.Meta>
          <Card.Description>
            {this.state.isEditing
              ?
              <Input size='mini' label='Body' placeholder={this.props.post.body} />
              :
              this.props.post.body
            }
          </Card.Description>
        </Card.Content>
        <Card.Content>
          {this.props.children}
        </Card.Content>
        <Card.Content extra>
          <Grid verticalAlign='middle' columns='3' stretched>
            <Grid.Row>
              <Grid.Column width='8'>
                {'Voted ' + this.props.post.voteScore + ' times'}
              </Grid.Column>
              <Grid.Column width='4' textAlign='right'>
                Vote
          </Grid.Column>
              <Grid.Column width='4' textAlign='left'>
                <VoteButton onVote={this.props.onVote} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Card.Content>
      </Card>
    )
  }
}

Post.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onVote: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
}

export default Post