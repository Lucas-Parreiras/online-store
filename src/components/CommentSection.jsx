import PropTypes from 'prop-types';
import React, { Component } from 'react';
import CommentCard from './CommentCard';

export default class CommentSection extends Component {
  render() {
    const { comments } = this.props;
    return (
      <div>
        comment section
        {comments.map(({ email, message, rating }, num) => (<CommentCard
          key={ num }
          email={ email }
          message={ message }
          rating={ rating }
        />))}
        ;
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
};
