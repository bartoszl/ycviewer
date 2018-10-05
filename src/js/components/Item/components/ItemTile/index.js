import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';

import ItemTileWrapper from '../ItemTileWrapper';
import LinkWrapper from './LinkWrapper';

import { GRAY, DARK_GRAY } from '../../../../styles/colors';
import { FONT_SIZE_SM } from '../../../../styles/text';

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  font-size: ${FONT_SIZE_SM};
`;

const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: ${FONT_SIZE_SM};
  color: ${GRAY};
`;

const TopItem = styled.h5`
  margin: 0;
`;

const OutsideLink = styled.a`
  text-decoration: none;
  color: ${GRAY};
  cursor: pointer;

  &:hover {
    color: ${DARK_GRAY};
  }
`;

const ItemTile = ({ item }) => (
  <ItemTileWrapper>
    <TopWrapper>
      <TopItem>
        Posted by:&nbsp;
        { item.by }
      </TopItem>
      <TopItem>
        { moment.unix(item.time).fromNow() }
      </TopItem>
    </TopWrapper>

    <h3>
      { item.title }
    </h3>

    <BottomWrapper>
      <span>
        Score:&nbsp;
        { item.score }
      </span>
      <LinkWrapper
        to={`/item/${item.id}`}
        descendants={item.descendants}
      />
      <OutsideLink
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Read more
      </OutsideLink>
    </BottomWrapper>
  </ItemTileWrapper>
);

ItemTile.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ItemTile;
