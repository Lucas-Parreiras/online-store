import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { getProductById } from '../services/api';
import navegation from '../services/navegation';
import { saveProduct } from '../services/handlelocalstorage';
import CommentForm from '../components/CommentForm';
import CommentSection from '../components/CommentSection';
import CategoryAside from '../components/CategoryAside';
import cart from '../services/cart';

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
    cartCounter: 0,
  };

  componentDidMount() {
    this.updateCounter();
    this.handleProductById();
    const { match: { params } } = this.props;
    const comments = JSON.parse(localStorage.getItem(params.id));
    if (!comments) {
      localStorage.setItem(params.id, '[]');
      return;
    }
    this.setState({ comments });
  }

  updateCounter = () => {
    this.setState({
      cartCounter: cart(),
    });
  };

  handleOnChange = ({ target: { name, value } }) => {
    this.setState((prevState) => ({
      commentForm: {
        ...prevState.commentForm,
        [name]: value,
      },
    }));
  };

  handleSaveComment = () => {
    const { commentForm, id, comments } = this.state;
    this.setState({ formError: false });
    let commentsLocalStorage = JSON.parse(localStorage.getItem(id));
    if (!commentsLocalStorage) {
      localStorage.setItem(id, '[]');
      commentsLocalStorage = JSON.parse(localStorage.getItem(id));
    }
    commentsLocalStorage.push(commentForm);

    // const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isEmailValid = re.test(commentForm.email);
    if (!isEmailValid || commentForm.rating === '') {
      this.setState({ formError: true });
      return;
    }
    this.setState({ comments: [...comments, commentForm] });
    this.setState({ commentForm: this.INITIAL_FORM });
    localStorage.setItem(id, JSON.stringify(commentsLocalStorage));
  };

  handleProductById = async () => {
    const { match: { params } } = this.props;
    const product = await getProductById(params.id);
    // const { shipping } = product;
    this.setState({
      name: product.title,
      image: product.thumbnail,
      id: params.id,
      price: product.price,
      // freeShipping: shipping.free_shipping,
    });
  };

  updateProducts = (data) => {
    const { history } = this.props;
    history.push('/', data.results);
  };

  hundleClick = () => {
    const { image, price, name: title, id } = this.state;
    saveProduct({ image, price, title, id });
    this.updateCounter();
  };

  render() {
    const {
      image, name, price, id, comments, commentForm, formError, cartCounter,
    } = this.state;
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
          <p data-testid="shopping-cart-size">{cartCounter}</p>
          Finalizar compra
        </button>
        <button
          onClick={ this.hundleClick }
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
