import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styled from 'styled-components';

import { ItemTile, CommentItemTile } from './components';
import { API_URLS } from '../../constants';

const KidList = styled.ul`
  list-style: none;
  padding: 0 0 0 2rem;
  border-left: 2px solid black;
`;

class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: null,
    };

    this.generateItemList = this.generateItemList.bind(this);
    this.renderItemTile = this.renderItemTile.bind(this);
  }

  async componentDidMount() {
    const { itemId } = this.props;

    const { data } = await axios.get(API_URLS.ITEM.replace('{id}', itemId));

    this.setState({
      item: data,
    });
  }

  async componentDidUpdate(prevProps) {
    const { itemId: prevId } = prevProps;
    const { itemId } = this.props;

    if (prevId !== itemId) {
      const { data } = await axios.get(API_URLS.ITEM.replace('{id}', itemId));

      this.setState({
        item: data,
      });
    }
  }

  generateItemList() {
    const { item } = this.state;
    const { renderKids } = this.props;

    if (!item.kids || !item.kids.length || !renderKids) {
      return null;
    }

    return item.kids.map(child => (
      <Item itemId={child} />
    ));
  }

  renderItemTile() {
    const { item } = this.state;

    if (!item.parent) {
      return <ItemTile item={item} />;
    }

    return <CommentItemTile item={item} />;
  }

  render() {
    const { item } = this.state;

    if (!item) {
      return null;
    }

    return (
      <Fragment>
        { this.renderItemTile() }
        <KidList>
          { this.generateItemList() }
        </KidList>
      </Fragment>
    );
  }
}

Item.propTypes = {
  itemId: PropTypes.number.isRequired,
  renderKids: PropTypes.bool,
};

Item.defaultProps = {
  renderKids: true,
};

export default Item;
