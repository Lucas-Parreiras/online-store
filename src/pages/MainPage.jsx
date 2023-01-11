import React from 'react';
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
    const { categories } = this.state;
    return (
      <>
        <CategoryAside categories={ categories } />
        <SearchInput />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </>
    );
  }
}

export default MainPage;
