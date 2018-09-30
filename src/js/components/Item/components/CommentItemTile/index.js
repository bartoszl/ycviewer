import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ItemTileWrapper from '../ItemTileWrapper';

const CommentTileWrapper = styled(ItemTileWrapper)`
  font-size: 0.8rem;
  margin-left: 2rem;
`;

const CommentItemTile = ({ item }) => {
  if (item.deleted) {
    return null;
  }

  return (
    <CommentTileWrapper>
      <span>
        { item.by }
      </span>
      <p>
        { item.text }
      </p>
    </CommentTileWrapper>
  );
};

CommentItemTile.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CommentItemTile;
