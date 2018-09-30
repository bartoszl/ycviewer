import React from 'react';
import { withRouter } from 'react-router-dom';

import { Item } from '../../components';

const CommentPage = ({ match }) => {
  const { id } = match.params;

  return (
    <ul>
      <Item itemId={id} />
    </ul>
  );
};

export default withRouter(CommentPage);
