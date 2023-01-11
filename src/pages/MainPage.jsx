import React from 'react';
import PropTypes from 'prop-types';
import navegation from '../services/navegation';
import { getProductsFromCategoryAndQuery, getCategories } from '../services/api';
import SearchInput from '../components/SearchInput';
import CategoryAside from '../components/CategoryAside';
import ProductList from '../components/ProductList';

class MainPage extends React.Component {
  state = {
    categories: [],
    products: [],
    query: '',
    firstSearch: false,
  };

  componentDidMount() {
    this.renderCategories();
  }

  getListProduct = async () => {
    const { query } = this.state;
    const { results } = await getProductsFromCategoryAndQuery('', query);
    this.setState({ products: results, firstSearch: true });
  };

  handleOnChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  renderCategories = async () => {
    const categories = await getCategories();
    this.setState({ categories });
  };

  render() {
    const { history } = this.props;
    const { categories, products, firstSearch } = this.state;
    return (
      <>
        <CategoryAside categories={ categories } />
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
