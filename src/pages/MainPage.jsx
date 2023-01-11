import React from 'react';
import PropTypes from 'prop-types';
import navegation from '../services/navegation';
import { getCategories } from '../services/api';
import SearchInput from '../components/SearchInput';
import CategoryAside from '../components/CategoryAside';

class MainPage extends React.Component {
  state = {
    categories: [],
  };

  componentDidMount() {
    this.renderCategories();
  }

  renderCategories = async () => {
    const categories = await getCategories();
    this.setState({ categories });
  };

  render() {
    const { history } = this.props;
    const { categories } = this.state;
    return (
      <>
        <CategoryAside categories={ categories } />
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
