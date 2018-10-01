import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';

import { Item, UnstyledList, NavigateBackButton } from '../../components';

const CommentPage = ({ match }) => {
  const { id } = match.params;

  return (
    <Fragment>
      <NavigateBackButton />
      <UnstyledList>
        <Item itemId={id} />
      </UnstyledList>
    </Fragment>
  );
};

export default withRouter(CommentPage);
