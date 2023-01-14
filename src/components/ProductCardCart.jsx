import PropTypes from 'prop-types';
import React from 'react';
import { removeProduct } from '../services/handlelocalstorage';

class ProductCardCart extends React.Component {
  render() {
    const { id, quantity, title, price, image, updateCart } = this.props;

    return (
      <>
        <h2 data-testid="shopping-cart-product-name">{ title }</h2>
        <img src={ image } alt="" />
        <p>{ price }</p>
        <p data-testid="shopping-cart-product-quantity">{ quantity }</p>
        <button
          data-testid="remove-product"
          type="button"
          onClick={ () => updateCart(removeProduct(id)) }
        >
          X
        </button>
        <button data-testid="product-decrease-quantity" type="button">-</button>
        <button data-testid="product-increase-quantity" type="button">+</button>
      </>
    );
  }
}

ProductCardCart.propTypes = {
  updateCart: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default ProductCardCart;
