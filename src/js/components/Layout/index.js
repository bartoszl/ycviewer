import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Navbar } from './components';

const StyledLayout = styled.div`
  background-color: white;
  padding: 2rem;
`;

const Layout = ({ children }) => (
  <Fragment>
    <Navbar />
    <StyledLayout>
      { children }
    </StyledLayout>
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
