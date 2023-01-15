import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FreeShipping extends Component {
  render() {
    const { freeShipping } = this.props;

    // se tiver frete grátis "freeShipping renderiza o parágrafo, senão não renderiza nada
    if (freeShipping) {
      return <p data-testid="free-shipping">Frete Grátis</p>;
    }
    return null;
  }
}

FreeShipping.propTypes = {
  freeShipping: PropTypes.bool.isRequired,
};
