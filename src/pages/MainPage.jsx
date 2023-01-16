import React from 'react';
import PropTypes from 'prop-types';
import navegation from '../services/navegation';
import { getProductsFromCategoryAndQuery } from '../services/api';
import SearchInput from '../components/SearchInput';
import CategoryAside from '../components/CategoryAside';
import ProductList from '../components/ProductList';

class MainPage extends React.Component {
  state = {
    // categories: [],
    products: [],
    query: '',
    firstSearch: false,
  };

  getListProduct = async () => {
    const { query } = this.state;
    const { results } = await getProductsFromCategoryAndQuery('', query);
    this.setState({ products: results, firstSearch: true });
  };

  // Função criadaa para desenvolvimento Requisito 06.

  handleOnChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  updateProducts = (data) => {
    this.setState({ products: data.results });
  };

  render() {
    const { history } = this.props;
    const { products, firstSearch } = this.state;
    return (
      <>
        <CategoryAside
          updateProducts={ this.updateProducts }
        />
        <SearchInput
          handleOnChange={ this.handleOnChange }
          getListProducts={ this.getListProduct }
        />
        <button
          data-testid="shopping-cart-button"
          type="submit"
          onClick={ () => navegation('/shoppingcart', history) }
        >
          Carrinho
        </button>
        {
          products.length === 0 ? (
            <p data-testid="home-initial-message">
              { firstSearch
                ? 'Nenhum produto foi encontrado'
                : 'Digite algum termo de pesquisa ou escolha uma categoria.'}
            </p>
          ) : <ProductList productList={ products } />
        }
      </>
    );
  }
}

MainPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default MainPage;
