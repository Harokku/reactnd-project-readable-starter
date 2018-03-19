import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { postNewPost, postVotePost } from "../actions/posts";

import { Card, Dropdown } from "semantic-ui-react";

import Post from "../components/Post";
import AddNewPost from "../components/AddNewPost";
import CommentsList from "./CommentsList";

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

  handleSortByChange = (e, { value }) => this.setState({ sortBy: value });

  /** Increment or decrement post vote
   * Using currying to decouple actual voting component
   * @param {string} postId - The post to vote for
   * @param {string} voteType - upVote to increment or downVote to decrement vote score by 1
   */
  handleOnVote = (postId) => (voteType) => this.props.dispatch(postVotePost(postId, voteType));

  postNew = (post) => this.props.dispatch(postNewPost(post));

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
          {this.props.filter
            ? this.props.posts
              .filter(post => post.category === this.props.filter)
              .sort((a, b) => (a[this.state.sortBy] - b[this.state.sortBy]))
              .map(post => (
                <Post key={post.id} post={post} onVote={this.handleOnVote(post.id)}>
                  <CommentsList countOnly postId={post.id} />
                </Post>
              ))
            : this.props.posts
              .sort((a, b) => (a[this.state.sortBy] - b[this.state.sortBy]))
              .map(post => (
                <Post key={post.id} post={post} onVote={this.handleOnVote(post.id)}>
                  <CommentsList countOnly postId={post.id} />
                </Post>
              ))}
        </Card.Group>
      </div>
    )
  }
}

PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  filter: PropTypes.string,
}

const mapCategories = (categories) => (categories.map(category => category.name))

const mapStateToProps = state => (
  {
    posts: state.posts,
    categories: mapCategories(state.categories)
  }
)

export default connect(mapStateToProps)(PostsList)