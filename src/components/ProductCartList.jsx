import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ProductCardCart from './ProductCardCart';

export default class ProductCartList extends Component {
  render() {
    const { productList, updateCart } = this.props;
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
          />))}
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
// ProductList.propTypes = {
//   productList: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string,
//       thumbnail: PropTypes.string,
//       price: PropTypes.number,
//       title: PropTypes.string,
//     }),
//   ).isRequired,
// };
