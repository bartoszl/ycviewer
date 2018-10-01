import React from 'react';
import { withRouter } from 'react-router-dom';

import { Item, UnstyledList } from '../../components';

const CommentPage = ({ match }) => {
  const { id } = match.params;

  return (
    <UnstyledList>
      <Item itemId={id} />
    </UnstyledList>
  );
};

export default withRouter(CommentPage);
