import PropTypes from 'prop-types';
import React from 'react';
import { removeProduct, getProduct } from '../services/handlelocalstorage';

class ProductCardCart extends React.Component {
  state = {
    qt: 0,
    total: 0,
  };

  componentDidMount() {
    const { quantity, total } = this.props;
    this.setState({
      qt: quantity,
      total,
    });
  }

  increaseProduct = (id) => {
    const { product, actualCart } = getProduct(id);
    product.quantity += 1;
    product.total = product.quantity * product.price;
    localStorage.setItem('cart', JSON.stringify(actualCart));
    this.setState({
      qt: product.quantity,
      total: product.total,
    });
  };

  decreaseProduct = (id) => {
    const { product, actualCart } = getProduct(id);
    if (product.quantity > 1) {
      product.quantity -= 1;
      product.total = product.quantity * product.price;
      localStorage.setItem('cart', JSON.stringify(actualCart));
      this.setState({
        qt: product.quantity,
        total: product.total,
      });
    }
  };

  render() {
    const { id, title, price, image, updateCart } = this.props;
    const { qt, total } = this.state;

    return (
      <>
        <h2 data-testid="shopping-cart-product-name">{ title }</h2>
        <img src={ image } alt="" />
        <p>{ price }</p>
        <p data-testid="shopping-cart-product-quantity">{ qt }</p>
        <button
          data-testid="remove-product"
          type="button"
          onClick={ () => updateCart(removeProduct(id)) }
        >
          X
        </button>
        <button
          data-testid="product-decrease-quantity"
          type="button"
          onClick={ () => this.decreaseProduct(id) }
        >
          -
        </button>
        <button
          data-testid="product-increase-quantity"
          type="button"
          onClick={ () => this.increaseProduct(id) }
        >
          +
        </button>
        <p>{ total }</p>
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
  total: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default ProductCardCart;
