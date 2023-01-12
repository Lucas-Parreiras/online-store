import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProductCard extends Component {
  render() {
    const { image, price, title, id } = this.props;
    const link = `/product/${id}`;
    return (
      <Link to={ link } data-testid="product-detail-link">
        <div data-testid="product">
          <h2>{title}</h2>
          <img src={ image } alt="" />
          <p>{price}</p>
        </div>
      </Link>
    );
  }
}

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
