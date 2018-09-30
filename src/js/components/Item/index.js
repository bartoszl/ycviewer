import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { API_URLS } from '../../constants';

class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: null,
    };

    this.generateItemList = this.generateItemList.bind(this);
  }

  async componentDidMount() {
    const { itemId } = this.props;

    const { data } = await axios.get(API_URLS.ITEM.replace('{id}', itemId));

    console.log(data);

    await this.setState({
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
      <li>
        <Item itemId={child} />
      </li>
    ));
  }

  render() {
    const { item } = this.state;

    if (!item) {
      return null;
    }

    return (
      <li>
        { item.title }
        { item.text }
        <ul>
          { this.generateItemList() }
        </ul>
      </li>
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
