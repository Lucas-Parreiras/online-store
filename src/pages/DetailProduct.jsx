import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { getProductById } from '../services/api';
import navegation from '../services/navegation';
import saveProduct from '../services/handlelocalstorage';
import CommentForm from '../components/CommentForm';
import CommentSection from '../components/CommentSection';
import CategoryAside from '../components/CategoryAside';

export default class DetailProduct extends Component {
  INITIAL_FORM = {
    email: '',
    message: '',
    rating: '',
  };

  state = {
    image: '',
    name: '',
    price: 0,
    id: '',
    comments: [],
    formError: false,
    commentForm: this.INITIAL_FORM,
  };

  componentDidMount() {
    this.handleProductById();
    const { match: { params } } = this.props;
    const comments = JSON.parse(localStorage.getItem(params.id));
    if (!comments) {
      localStorage.setItem(params.id, '[]');
      return;
    }
    this.setState({ comments });
  }

  handleOnChange = ({ target: { name, value } }) => {
    this.setState((prevState) => ({
      commentForm: {
        ...prevState.commentForm,
        [name]: value,
      },
    }));
  };

  handleSaveComment = () => {
    const { commentForm, id } = this.state;
    this.setState({ formError: false });
    let comments = JSON.parse(localStorage.getItem(id));
    if (!comments) {
      localStorage.setItem(id, '[]');
      comments = JSON.parse(localStorage.getItem(id));
    }
    comments.push(commentForm);

    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isEmailValid = re.test(commentForm.email);
    const isMessageValid = commentForm.message !== '';
    if (!isEmailValid || !isMessageValid) {
      this.setState({ formError: true });
      return;
    }
    this.setState({ comments: [...this.state.comments, commentForm] });
    this.setState({ commentForm: this.INITIAL_FORM });
    localStorage.setItem(id, JSON.stringify(comments));
  };

  handleProductById = async () => {
    const { match: { params } } = this.props;
    const product = await getProductById(params.id);
    this.setState({ name: product.title,
      image: product.thumbnail,
      id: params.id,
      price: product.price });
  };

  updateProducts = (data) => {
    const { history } = this.props;
    history.push('/', data.results);
  };

  render() {
    const { image, name, price, id, comments, commentForm, formError } = this.state;
    const { email, message } = commentForm;
    const { history } = this.props;
    const errorInputMessage = <p data-testid="error-msg">Campos inválidos</p>;
    return (
      <div>
        <CategoryAside updateProducts={ this.updateProducts } />
        <h2 data-testid="product-detail-name">
          {' '}
          {name}
          {' '}
        </h2>
        <img src={ image } alt="" data-testid="product-detail-image" />
        <p data-testid="product-detail-price">{price}</p>
        <button
          type="submit"
          data-testid="shopping-cart-button"
          onClick={ () => navegation('/shoppingcart', history) }
        >
          Finalizar compra
        </button>
        <button
          onClick={ () => saveProduct({ image, price, title: name, id }) }
          type="submit"
          data-testid="product-detail-add-to-cart"
        >
          Adicionar ao Carrinho
        </button>
        <CommentForm
          id={ id }
          handleOnChange={ this.handleOnChange }
          handleSaveComment={ this.handleSaveComment }
          email={ email }
          message={ message }
        />
        <CommentSection comments={ comments } />
        {
          formError ? errorInputMessage : ''
        }
      </div>
    );
  }
}

DetailProduct.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string }) }).isRequired,
};
