import React from 'react';
import { Link } from 'react-router-dom';
import ProductCartList from '../components/ProductCartList';

class ShoppingCart extends React.Component {
  state = {
    productList: [],
  };

  componentDidMount() {
    const productList = JSON.parse(localStorage.getItem('cart'));
    if (productList) {
      this.setState({
        productList,
      });
    }
  }

  updateCart = (list) => {
    this.setState({
      productList: list,
    });
  };

  render() {
    const { productList } = this.state;
    const messageEmptyCart = 'Seu carrinho está vazio';
    const checkoutLink = '/checkout';
    return (
      <div>
        {
          productList.length !== 0 ? (
            <ProductCartList
              productList={ productList }
              updateCart={ this.updateCart }
            />
          ) : (
            <p data-testid="shopping-cart-empty-message">
              { messageEmptyCart }
            </p>
          )
        }
        <Link to={ checkoutLink }>
          <button
            data-testid="checkout-products"
            type="submit"
          >
            Finalizar Compra
          </button>
        </Link>
      </div>
    );
  }
}

export default ShoppingCart;
