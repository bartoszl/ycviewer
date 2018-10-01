import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
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

CommentPage.propTypes = {
  match: PropTypes.object.isRequired,
};

export default withRouter(CommentPage);
