import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { fetchCategories } from "../actions/categories";

import Category from "../components/Category";

class CategoriesList extends Component {

  componentDidMount() {
    this.props.dispatch(fetchCategories());
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.categories && this.props.categories.map((category, index) => (
            <li key={index}>
              <Category category={category.name} redirUrl={category.path} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

CategoriesList.propTypes = {
  categories: PropTypes.array.isRequired,
}

const mapStateToProps = state => (
  {categories: state.categories}
)

export default connect(
  mapStateToProps,
)(CategoriesList)