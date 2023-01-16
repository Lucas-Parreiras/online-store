import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class CommentForm extends Component {
  // state = {
  //   email: '',
  //   message: '',
  //   rating: 0,
  //   id: '',
  // };

  // handleSaveComment = (id) => {
  //   const comment = this.state;
  //   let comments = JSON.parse(localStorage.getItem(id));
  //   if (!comments) {
  //     localStorage.setItem(id, '[]');
  //     comments = JSON.parse(localStorage.getItem(id));
  //   }
  //   comments.push(comment);
  //   localStorage.setItem(id, JSON.stringify(comments));
  //   setState({ email: '', message: '', rating: 0, id: '' });
  // };

  // handleOnChange = ({ target: { name, value } }) => {
  //   // console.log(target);
  //   if (parseInt(value, 10) !== 'NaN') {
  //     this.setState({ [name]: value });
  //   }
  //   this.setState({ [name]: value }, this.validationFields);
  // };

  render() {
    const { id, handleOnChange, handleSaveComment, email, message } = this.props;
    return (
      <div>
        <label htmlFor="email">
          e-mail
          <br />
          <input
            type="text"
            name="email"
            value={ email }
            id=""
            data-testid="product-detail-email"
            onChange={ handleOnChange }
          />
        </label>
        <br />
        <label htmlFor="message">
          message:
          <br />
          <input
            type="text"
            value={ message }
            data-testid="product-detail-evaluation"
            name="message"
            id=""
            onChange={ handleOnChange }
          />
        </label>
        <br />
        <label htmlFor="rating">
          rating:
          <input
            type="radio"
            name="rating"
            value="1"
            id="rating1"
            data-testid="1-rating"
            onChange={ handleOnChange }
          />
          <input
            type="radio"
            name="rating"
            value="2"
            id="rating2"
            data-testid="2-rating"
            onChange={ handleOnChange }
          />
          <input
            type="radio"
            name="rating"
            value="3"
            id="rating3"
            data-testid="3-rating"
            onChange={ handleOnChange }
          />
          <input
            type="radio"
            name="rating"
            value="4"
            id="rating4"
            data-testid="4-rating"
            onChange={ handleOnChange }
          />
          <input
            type="radio"
            name="rating"
            value="5"
            id="rating5"
            data-testid="5-rating"
            onChange={ handleOnChange }
          />
        </label>
        <button
          type="submit"
          data-testid="submit-review-btn"
          onClick={ () => handleSaveComment(id) }
        >
          Enviar
        </button>
      </div>
    );
  }
}
