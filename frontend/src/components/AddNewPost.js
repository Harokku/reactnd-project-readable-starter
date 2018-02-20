import React, { Component } from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

import { Form, Segment, Header, Button } from "semantic-ui-react";

class AddNewPost extends Component {
  state = {
    id: '',
    timestamp: '',
    title: '',
    body: '',
    author: '',
    category: '',
  }

  getCategoriesOption = (categories) => (
    categories.map(category => (
      {
        text: category,
        value: category,
      }
    ))
  )

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value }, () => {
      this.setState({
        formValid: ['title', 'body', 'author', 'category'].reduce((acc, curr) => acc && (this.state[curr] !== ''), true)
      })
    })
  }

  handleClearForm = () => this.setState({
    id: '',
    timestamp: '',
    title: '',
    body: '',
    author: '',
    category: '',
    formValid: false,
  })

  handleAddPost = (e) => {
    const toPost = {
      ...this.state,
      id: v4(),
      timestamp: Date.now(),
    }
    this.props.onAddPost(toPost);
    this.handleClearForm();
  }

  render() {
    return (
      <div>
        <Segment raised inverted tertiary color='grey' compact>
          <Header as='h2'>
            Add new post
          </Header>
          <Form>
            <Form.Group>
              <Form.Input placeholder='Title' name='title' value={this.state.title} onChange={this.handleChange} />
              <Form.Input placeholder='Author' name='author' value={this.state.author} onChange={this.handleChange} />
              <Form.Select placeholder='Category' options={this.getCategoriesOption(this.props.categories)} name='category' value={this.state.category} onChange={this.handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.TextArea width={12} placeholder='Post body' name='body' value={this.state.body} onChange={this.handleChange} />
            </Form.Group>
            <Button.Group>
              <Button onClick={this.handleClearForm}>Clear</Button>
              <Button.Or />
              <Button disabled={!this.state.formValid} positive onClick={this.handleAddPost}>Add</Button>
            </Button.Group>
          </Form>
        </Segment>
      </div>
    )
  }
}

AddNewPost.propTypes = {
  categories: PropTypes.array.isRequired,
  onAddPost: PropTypes.func.isRequired,
}

export default AddNewPost