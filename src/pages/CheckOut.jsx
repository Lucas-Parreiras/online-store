import PropTypes from 'prop-types';
import React, { Component } from 'react';
import CheckOutForm from '../components/CheckOutForm';
import CheckOutProducts from '../components/CheckOutProducts';
import navegation from '../services/navegation';

export default class CheckOut extends Component {
  state = {
    productList: [],
  };

  componentDidMount() {
    const productList = JSON.parse(localStorage.getItem('cart'));
    this.setState({ productList });
  }

  render() {
    const { history } = this.props;
    const { productList } = this.state;
    return (
      <div>
        <CheckOutProducts productList={ productList } />
        <CheckOutForm history={ history } />
        <button
          data-testid="shopping-cart-button"
          type="submit"
          onClick={ () => navegation('/shoppingcart', history) }
        >
          Carrinho
        </button>
      </div>
    );
  }
}

CheckOut.propTypes = {
  history: PropTypes.shape().isRequired,
};
