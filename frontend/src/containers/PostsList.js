import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { fetchAllPosts, postNewPost } from "../actions/posts";

import { Card, Dropdown } from "semantic-ui-react";

import Post from "../components/Post";
import AddNewPost from "../components/AddNewPost";

class PostsList extends Component {
  state = {
    sortBy: 'noSort',
  }

  sortOptions = [
    {
      text: `Don't sort`,
      value: 'noSort',
    },
    {
      text: 'Vote Score',
      value: 'voteScore',
    },
    {
      text: 'Creation Time',
      value: 'timestamp',
    }
  ]

  componentDidMount() {
    this.props.dispatch(fetchAllPosts());
  }

  handleSortByChange = (e, { value }) => this.setState({ sortBy: value })

  sortPosts = (orderBy) => (
    this.props.posts.sort((a, b) => (a[orderBy] - b[orderBy]))
  )

  postNew = (post) => {
    this.props.dispatch(postNewPost(post))
  }

  render() {
    return (
      <div>
        <AddNewPost categories={this.props.categories} onAddPost={this.postNew} />

        <span>
          Order by: <Dropdown
            options={this.sortOptions}
            onChange={this.handleSortByChange}
            defaultValue={this.sortOptions[0].value}
          />
        </span>

        <Card.Group>
          {this.props.posts && this.sortPosts(this.state.sortBy).map(post => (
            <Post key={post.id} post={post}>
              {/*<CommentsList postId={post.id} />*/}
            </Post>
          ))}
        </Card.Group>
      </div>
    )
  }
}

PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired
}

const mapCategories = (categories) => (categories.map(category => category.name))

const mapStateToProps = state => (
  {
    posts: state.posts,
    categories: mapCategories(state.categories)
  }
)

export default connect(mapStateToProps)(PostsList)