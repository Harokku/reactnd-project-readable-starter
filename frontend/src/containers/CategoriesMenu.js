import React, { Component } from 'react'
import PropTypes from "prop-types";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCategories } from "../actions/categories";

import { Menu } from 'semantic-ui-react'

class CategoriesMenu extends Component {

  componentDidMount() {
    this.props.categories.length > 0 || this.props.dispatch(fetchCategories());
  }

  render() {
    return (
      <Menu>
        <Menu.Item
          exact
          as={NavLink}
          to='/'
          name='home'
        >
          Home
        </Menu.Item>
        {this.props.categories && this.props.categories.map((category, index) => (
          <Menu.Item
            exact
            as={NavLink}
            to={'/posts/' + category.path}
            key={index}
            name={category.path}
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

export default withRouter(connect(
  mapStateToProps,
)(CategoriesMenu));