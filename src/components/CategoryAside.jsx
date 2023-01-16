import React from 'react';
import PropTypes from 'prop-types';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

export default class CategoryAside extends React.Component {
  state = {
    categories: [],
  };

  componentDidMount() {
    this.renderCategories();
  }

  categoryRenderList = async (event) => {
    const { updateProducts } = this.props;
    const data = await getProductsFromCategoryAndQuery(event.target.id, '');
    updateProducts(data);
  };

  renderCategories = async () => {
    const categories = await getCategories();
    this.setState({ categories });
  };

  render() {
    const { categories } = this.state;

    return (
      <aside className="CategoryAside">
        <h2>Categorias:</h2>
        { categories.map(({ id, name }) => (
          <div key={ id }>
            <input
              type="radio"
              name="category"
              id={ id }
              onClick={ this.categoryRenderList }
            />
            <label htmlFor={ id } data-testid="category">{ name }</label>
          </div>
        )) }
      </aside>
    );
  }
}

CategoryAside.propTypes = {
  categoryRenderList: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
    }),
  ).isRequired,
};
