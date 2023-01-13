import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { getProductById } from '../services/api';
import navegation from '../services/navegation';
import saveProduct from '../services/handlelocalstorage';
import FreeShipping from '../components/FreeShipping';

export default class DetailProduct extends Component {
  state = {
    image: '',
    name: '',
    price: 0,
    id: '',
  };

  componentDidMount() {
    this.handleProductById();
  }

  handleProductById = async () => {
    const { match: { params } } = this.props;
    const product = await getProductById(params.id);
    const { shipping } = product;
    this.setState({
      name: product.title,
      image: product.thumbnail,
      id: params.id,
      price: product.price,
      freeShipping: shipping.free_shipping,
    });
  };

  render() {
    const { image, name, price, id, freeShipping } = this.state;
    const { history } = this.props;
    return (
      <div>
        <h2 data-testid="product-detail-name">{name}</h2>
        <FreeShipping freeShipping={ freeShipping } />
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
          onClick={ () => saveProduct({ image, price, title: name, id }) }
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
