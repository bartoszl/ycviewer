import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { TRANSITION, BORDER_RADIUS } from '../../styles/utils';
import { PRIMARY } from '../../styles/colors';

const BackButton = styled.button`
  background-color: transparent;
  font-size: 1rem;
  transition: ${TRANSITION};
  cursor: pointer;
  border: 1px solid ${PRIMARY};
  color: ${PRIMARY};
  padding: 1rem 2rem;
  border-radius: ${BORDER_RADIUS};
  background-color: white;

  &:hover {
    color: white;
    background-color: ${PRIMARY};
  }
`;

export const NavigateBackButton = ({ history }) => (
  <BackButton onClick={history.goBack}>
    <span>Return</span>
  </BackButton>
);

NavigateBackButton.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(NavigateBackButton);
