import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { getProductById } from '../services/api';
import navegation from '../services/navegation';

export default class DetailProduct extends Component {
  state = {
    image: '',
    name: '',
    price: 0,
  };

  componentDidMount() {
    this.handleProductById();
  }

  handleProductById = async () => {
    const { match: { params } } = this.props;
    const product = await getProductById(params.id);
    this.setState({ name: product.title,
      image: product.thumbnail,
      price: product.price });
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
          Adicionar ao carrinho
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
