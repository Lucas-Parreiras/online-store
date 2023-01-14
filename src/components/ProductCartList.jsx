import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ProductCardCart from './ProductCardCart';

export default class ProductCartList extends Component {
  render() {
    const { productList, updateCart } = this.props;
    // test();
    return (
      <div>
        {productList.map(({ id, image, price, title, quantity }) => (<ProductCardCart
          key={ id }
          id={ id }
          image={ image }
          price={ price }
          title={ title }
          quantity={ quantity }
          updateCart={ updateCart }
        />))}
      </div>
    );
  }
}

ProductCartList.propTypes = {
  updateCart: PropTypes.func.isRequired,
  productList: PropTypes.shape({
    map: PropTypes.func,
    id: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    title: PropTypes.string,
    quantity: PropTypes.number,
  }).isRequired,
};
