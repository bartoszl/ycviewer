import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import moment from 'moment';

import ItemTileWrapper from '../ItemTileWrapper';

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  font-size: 0.8rem;
`;

const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  font-size: 0.8rem;
  color: #888888;
`;

const TopItem = styled.h5`
  margin: 0;
`;

const OutsideLink = styled.a`
  text-decoration: none;
  color: #888888;

  &:hover {
    color: #444444;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #888888;

  &:hover {
    color: #444444;
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

    <ButtonWrapper>
      <span>
        Score:&nbsp;
        { item.score }
      </span>
      <StyledLink to={`/item/${item.id}`}>
        Comments:&nbsp;
        { item.descendants }
      </StyledLink>
      <OutsideLink
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Read more
      </OutsideLink>
    </ButtonWrapper>
  </ItemTileWrapper>
);

ItemTile.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ItemTile;
