import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { fetchAllPosts } from "../actions/posts";

import { Dropdown } from "semantic-ui-react";

import Post from "../components/Post";
import CommentsList from "../containers/CommentsList"

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
    this.props.posts.sort( (a, b) => (a[orderBy] - b[orderBy]) )
  )

  render() {
    return (
      <div>
        <span>
          Order by: <Dropdown
            options={this.sortOptions}
            onChange={this.handleSortByChange}
            defaultValue={this.sortOptions[0].value}
          />
        </span>
        {this.props.posts && this.sortPosts(this.state.sortBy).map(post => (
          <Post key={post.id} post={post}>
            <CommentsList postId={post.id} />
          </Post>
        ))}
      </div>
    )
  }
}

PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
}

const mapStateToProps = state => (
  { posts: state.posts }
)

export default connect(mapStateToProps)(PostsList)