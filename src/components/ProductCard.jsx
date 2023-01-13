import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { saveProduct } from '../services/handlelocalstorage';

export default class ProductCard extends Component {
  render() {
    const { image, price, title, id } = this.props;
    const link = `/product/${id}`;
    return (
      <>
        <Link to={ link } data-testid="product-detail-link">
          <div data-testid="product">
            <h2>{title}</h2>
            <img src={ image } alt="" />
            <p>{price}</p>
          </div>
        </Link>
        <button
          type="submit"
          data-testid="product-add-to-cart"
          onClick={ () => saveProduct({ image, price, title, id }) }
        >
          Adicionar ao carrinho
        </button>
      </>
    );
  }
}

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
