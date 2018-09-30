import React from 'react';
import PropTypes from 'prop-types';

const CommentItemTile = ({ item }) => {
  if (item.deleted) {
    return null;
  }

  return (
    <li>
      <h5>
        Author:&nbsp;
        { item.by }
      </h5>
      <p>
        { item.text }
      </p>
    </li>
  );
};

CommentItemTile.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CommentItemTile;
