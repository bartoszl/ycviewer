import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styled from 'styled-components';

import { ItemTile, CommentItemTile } from './components';
import { API_URLS, ITEM_TYPE } from '../../constants';

import { PRIMARY } from '../../styles/colors';

const KidList = styled.ul`
  list-style: none;
  padding: 0 0 0 2rem;
  border-left: 2px solid ${PRIMARY};
`;

class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: null,
    };

    this.generateItemList = this.generateItemList.bind(this);
    this.renderItemTile = this.renderItemTile.bind(this);
    this.renderCommentsHeader = this.renderCommentsHeader.bind(this);
  }

  async componentDidMount() {
    const { itemId } = this.props;

    const { data } = await axios.get(API_URLS.ITEM.replace('{id}', itemId));

    this.setState({
      item: data,
    });
  }

  generateItemList() {
    const { item } = this.state;
    const { renderKids } = this.props;

    if (!item.kids || !item.kids.length || !renderKids) {
      return null;
    }

    return item.kids.map(child => (
      <Item key={child} itemId={child} />
    ));
  }

  renderItemTile() {
    const { item } = this.state;

    if (item.type === ITEM_TYPE.COMMENT) {
      return <CommentItemTile item={item} />;
    }

    return <ItemTile item={item} />;
  }

  renderCommentsHeader() {
    const { item } = this.state;
    const { renderKids } = this.props;

    if (!item.parent && renderKids) {
      return <h3> Comments: </h3>;
    }

    return null;
  }

  render() {
    const { item } = this.state;

    if (!item) {
      return <p>...</p>;
    }

    return (
      <Fragment>
        { this.renderItemTile() }
        { this.renderCommentsHeader() }
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
