import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { saveProduct } from '../services/handlelocalstorage';
import FreeShipping from './FreeShipping';

export default class ProductCard extends Component {
  hundleClick = () => {
    const { image, price, title, id, updateCounter } = this.props;
    saveProduct({ image, price, title, id });
    updateCounter();
  };

  render() {
    const { image, price, title, id, freeShipping } = this.props;
    const link = `/product/${id}`;
    return (
      <>
        <Link to={ link } data-testid="product-detail-link">
          <div data-testid="product">
            <h2>{title}</h2>
            <img src={ image } alt="" />
            <FreeShipping freeShipping={ freeShipping } />
            <p>{price}</p>
          </div>
        </Link>
        <button
          type="submit"
          data-testid="product-add-to-cart"
          onClick={ this.hundleClick }
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
  freeShipping: PropTypes.bool.isRequired,
  updateCounter: PropTypes.func.isRequired,
};
