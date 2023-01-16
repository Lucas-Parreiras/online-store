import PropTypes from 'prop-types';
import React, { Component } from 'react';
import CheckOutCard from './CheckOutCard';

export default class CheckOutProducts extends Component {
  render() {
    const { productList } = this.props;
    return (
      <div>
        {productList.map(({ id, title, image, price }) => (<CheckOutCard
          key={ id }
          title={ title }
          image={ image }
          price={ price }
        />))}
      </div>
    );
  }
}

CheckOutProducts.propTypes = {
  productList: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
};
