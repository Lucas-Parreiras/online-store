import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ProductCardCart from './ProductCardCart';

export default class ProductCartList extends Component {
  state = {
    grandTotal: 0,
  };

  componentDidMount() {
    const productList = JSON.parse(localStorage.getItem('cart'));
    let grandTotal = 0;
    productList.forEach((product) => {
      grandTotal += product.total;
    });
    this.setState({
      grandTotal,
    });
  }

  updateGrandTotal = (total) => {
    const { grandTotal } = this.state;
    const gTotal = grandTotal + total;
    this.setState({
      grandTotal: gTotal,
    });
    return gTotal;
  };

  render() {
    const { productList, updateCart } = this.props;
    const { grandTotal } = this.state;
    return (
      <div>
        {productList
          .map(({ id, image, price, title, quantity, total }) => (<ProductCardCart
            key={ id }
            id={ id }
            image={ image }
            price={ price }
            title={ title }
            quantity={ quantity }
            total={ total }
            updateCart={ updateCart }
            updateGrandTotal={ this.updateGrandTotal }
          />))}
        <h3>
          { `Total Geral: ${grandTotal}` }
        </h3>
      </div>
    );
  }
}

ProductCartList.propTypes = {
  updateCart: PropTypes.func.isRequired,
  productList: PropTypes.arrayOf(
    PropTypes.shape({
      map: PropTypes.func,
      id: PropTypes.string,
      image: PropTypes.string,
      price: PropTypes.number,
      title: PropTypes.string,
      quantity: PropTypes.number,
      total: PropTypes.number,
    }),
  ).isRequired,
};
