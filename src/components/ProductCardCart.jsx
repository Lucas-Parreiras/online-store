import PropTypes from 'prop-types';
import React from 'react';

class ProductCardCart extends React.Component {
  render() {
    const { quantity, title, price, image } = this.props;

    return (
      <>
        <h2 data-testid="shopping-cart-product-name">{ title }</h2>
        <img src={ image } alt="" />
        <p>{ price }</p>
        <p data-testid="shopping-cart-product-quantity">{ quantity }</p>
      </>
    );
  }
}

ProductCardCart.propTypes = {
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default ProductCardCart;
