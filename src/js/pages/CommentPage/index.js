import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { Item } from '../../components';

const CommentList = styled.ul`
  list-style: none;
  padding: 0px;
`;

const CommentPage = ({ match }) => {
  const { id } = match.params;

  return (
    <CommentList>
      <Item itemId={id} />
    </CommentList>
  );
};

export default withRouter(CommentPage);
