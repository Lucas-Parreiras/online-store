import React from 'react';
// import PropTypes from 'prop-types';

class ShoppingCart extends React.Component {
  render() {
    // const { productsList } = this.props;
    const messageEmptyCart = 'Seu carrinho está vazio';
    return (
      <p data-testid="shopping-cart-empty-message">{ messageEmptyCart }</p>
    );
  }
}

// ShoppingCart.propTypes = {
//   productList: PropTypes.array,
// };

// ShoppingCart.defaultProps = {
//   productList: [],
// };

export default ShoppingCart;
