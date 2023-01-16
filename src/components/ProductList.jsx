import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ProductCard from './ProductCard';

export default class ProductList extends Component {
  render() {
    const { productList, updateCounter } = this.props;
    return (
      <>
        {productList.map(({ id, thumbnail, price, title, shipping }) => (
          <ProductCard
            updateCounter={ updateCounter }
            key={ id }
            id={ id }
            image={ thumbnail }
            price={ price }
            title={ title }
            freeShipping={ shipping.free_shipping }
          />))}
      </>
    );
  }
}

ProductList.propTypes = {
  productList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      thumbnail: PropTypes.string,
      price: PropTypes.number,
      title: PropTypes.string,
    }),
  ).isRequired,
  updateCounter: PropTypes.func.isRequired,
};
