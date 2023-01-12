import React from 'react';
import PropTypes from 'prop-types';

export default class CategoryAside extends React.Component {
  render() {
    const { categories, categoryRenderList } = this.props;

    return (
      <aside className="CategoryAside">
        <h2>Categorias:</h2>
        { categories.map(({ id, name }) => (
          <div key={ id }>
            <input
              type="radio"
              name="category"
              id={ id }
              onClick={ categoryRenderList }
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
