import React from 'react';
import PropTypes from 'prop-types';
import SearchInput from '../components/SearchInput';
import navegation from '../services/navegation';

class MainPage extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <>
        <SearchInput />
        <button
          data-testid="shopping-cart-button"
          type="submit"
          onClick={ () => navegation('/shoppingcart', history) }
        >
          Carrinho
        </button>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </>
    );
  }
}

MainPage.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};

export default MainPage;
