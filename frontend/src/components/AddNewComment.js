import React, { Component } from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

import { Button, Input, Feed } from "semantic-ui-react";

class AddNewComment extends Component {
  state = {
    body: '',
    author: '',
    formValid: false,
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value }, () => {
      this.setState({
        formValid: ['body', 'author'].reduce((acc, curr) => acc && (this.state[curr] !== ''), true)
      })
    })
  }

  handleClearForm = () => this.setState({
    body: '',
    author: '',
    formValid: false,
  })

  handleAddComment = (e) => {
    const toPost = {
      body: this.state.body,
      author: this.state.author,
      id: v4(),
      timestamp: Date.now(),
    }
    this.props.onAddComment(toPost);
    this.handleClearForm();
  }

  render() {
    return (
      <Feed.Event>
        <Feed.Label icon='add circle' />
        <Feed.Content>
          <Feed.Summary>
            <Feed.User>Add comment here...</Feed.User>
          </Feed.Summary>
          <Feed.Extra><Input
            iconPosition='left'
            icon='user circle outline'
            placeholder='Author'
            name='author'
            value={this.state.author}
            onChange={this.handleChange}
          /></Feed.Extra>
          <Feed.Extra><Input
            iconPosition='left'
            icon='comment outline'
            placeholder='Comment'
            name='body'
            value={this.state.body}
            onChange={this.handleChange}
          /></Feed.Extra>
          <Feed.Meta>
            <Feed.Like>
              <Button
                disabled={!this.state.formValid}
                positive icon='add'
                content='Add comment'
                labelPosition='left'
                onClick={this.handleAddComment}
              />
            </Feed.Like>
          </Feed.Meta>
        </Feed.Content>
      </Feed.Event>
    )
  }
}

AddNewComment.propTypes = {
  onAddComment: PropTypes.func.isRequired,
}

export default AddNewComment