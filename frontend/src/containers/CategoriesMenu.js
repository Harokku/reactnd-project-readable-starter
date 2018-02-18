import React, { Component } from 'react'
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCategories } from "../actions/categories";

import { Menu } from 'semantic-ui-react'

class CategoriesMenu extends Component {
  state = {
    activeItem: undefined,
  }

  componentDidMount() {
    this.props.categories.length > 0 || this.props.dispatch(fetchCategories());
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          as={Link}
          to='/'
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>
        {this.props.categories && this.props.categories.map((category, index) => (
          <Menu.Item
            as={Link}
            to={category.path}
            key={index}
            name={category.path}
            active={activeItem === category.path}
            onClick={this.handleItemClick}
          >
            {category.name}
          </Menu.Item>
        ))}
      </Menu>
    )
  }
}

CategoriesMenu.propTypes = {
  categories: PropTypes.array.isRequired,
}

const mapStateToProps = state => (
  { categories: state.categories }
)

export default connect(
  mapStateToProps,
)(CategoriesMenu)