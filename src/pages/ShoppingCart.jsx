import React from 'react';
import ProductCartList from '../components/ProductCartList';

class ShoppingCart extends React.Component {
  state = {
    productList: [],
  };

  componentDidMount() {
    const productList = JSON.parse(localStorage.getItem('cart'));
    this.setState({ productList });
  }

  render() {
    const { productList } = this.state;
    const messageEmptyCart = 'Seu carrinho está vazio';
    return (
      <div>
        {
          productList ? (
            <ProductCartList
              productList={ productList }
            />
          ) : (
            <p data-testid="shopping-cart-empty-message">
              { messageEmptyCart }
            </p>
          )
        }
      </div>
    );
  }
}

export default ShoppingCart;
