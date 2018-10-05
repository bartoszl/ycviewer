import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { GRAY, DARK_GRAY } from '../../../../styles/colors';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${GRAY};

  &:hover {
    color: ${DARK_GRAY};
  }
`;

const LinkWrapper = ({ to, descendants }) => (
  <StyledLink to={to}>
    Comments:&nbsp;
    { descendants || 'N/A' }
  </StyledLink>
);

LinkWrapper.propTypes = {
  to: PropTypes.string.isRequired,
  descendants: PropTypes.number,
};

LinkWrapper.defaultProps = {
  descendants: null,
};

export default LinkWrapper;
