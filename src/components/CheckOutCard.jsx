import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class CheckOutCard extends Component {
  render() {
    const { image, price, title } = this.props;
    return (
      <div>
        <img src={ image } alt={ title } />
        <h2>{ title }</h2>
        <p>{ price }</p>
      </div>
    );
  }
}

CheckOutCard.propTypes = {
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
