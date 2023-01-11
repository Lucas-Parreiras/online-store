import PropTypes from 'prop-types';
import React from 'react';

class SearchInput extends React.Component {
  render() {
    const { getListProducts, handleOnChange } = this.props;
    return (
      <div>
        <input
          type="text"
          data-testid="query-input"
          name="query"
          onChange={ handleOnChange }
        />
        <button
          onClick={ getListProducts }
          type="submit"
          data-testid="query-button"
        >
          Lista Produtos
        </button>
      </div>
    );
  }
}

SearchInput.propTypes = {
  getListProducts: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,
};

export default SearchInput;
