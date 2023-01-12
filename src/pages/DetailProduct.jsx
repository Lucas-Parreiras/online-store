import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { getProductById } from '../services/api';
import navegation from '../services/navegation';

export default class DetailProduct extends Component {
  state = {
    image: '',
    name: '',
    price: 0,
    id: ''
  };

  componentDidMount() {
    this.handleProductById();
  }

  handleProductById = async () => {
    const { match: { params } } = this.props;
    const product = await getProductById(params.id);
    this.setState({ name: product.title,
      image: product.thumbnail,
      id: params.id,
      price: product.price });
  };

  handleAddToCart = () => {
    const { image, price, name, id } = this.state;
    const products = {
      image,
      price,
      name,
      id,
    };
    if (!localStorage.getItem('cart')) {
      localStorage.setItem('cart', JSON.stringify([]));
      console.log(localStorage);
    }
    const localCart = localStorage.getItem('cart');
    const cartColection = JSON.parse(localCart);
    cartColection.push(products);
    localStorage.setItem('cart', JSON.stringify(cartColection));
  };

  render() {
    const { image, name, price } = this.state;
    const { history } = this.props;
    return (
      <div>
        <h2 data-testid="product-detail-name">
          {' '}
          {name}
          {' '}
        </h2>
        <img src={ image } alt="" data-testid="product-detail-image" />
        <p data-testid="product-detail-price">{price}</p>
        <button
          type="submit"
          data-testid="shopping-cart-button"
          onClick={ () => navegation('/shoppingcart', history) }
        >
          Finalizar compra
        </button>
        <button
          onClick={ this.handleAddToCart }
          type="submit"
          data-testid="product-detail-add-to-cart"
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

DetailProduct.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string }) }).isRequired,
};
