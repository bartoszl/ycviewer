import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ItemTile = ({ item }) => (
  <li>
    <h3>
      { item.title }
    </h3>
    <h5>
      Author:&nbsp;
      { item.by }
    </h5>
    <h5>
      Score:&nbsp;
      { item.score }
    </h5>
    <Link to={`/item/${item.id}`}>
      Comments:&nbsp;
      { item.descendants }
    </Link>
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      Read more
    </a>
  </li>
);

ItemTile.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ItemTile;
