import React, { Component } from 'react';

export default class CommentCard extends Component {
  render() {
    const { message, email, rating} = this.props;
    return (
      <div>
        <h2 data-testid="review-card-email">{email}</h2>
        <p data-testid="review-card-evaluation">{message}</p>
        <p data-testid="review-card-rating">{rating}</p>
      </div>
    );
  }
}
