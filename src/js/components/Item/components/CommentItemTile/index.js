import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ItemTileWrapper from '../ItemTileWrapper';
import { LIGHT_GRAY } from '../../../../styles/colors';
import { FONT_SIZE_SM, FONT_WEIGHT_BOLD } from '../../../../styles/text';

const CommentTileWrapper = styled(ItemTileWrapper)`
  font-size: ${FONT_SIZE_SM};
  background-color: ${LIGHT_GRAY};

  span {
    font-weight: ${FONT_WEIGHT_BOLD};
  }
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
