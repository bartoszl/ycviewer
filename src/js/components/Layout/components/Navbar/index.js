import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { PRIMARY, LIGHT_GRAY } from '../../../../styles/colors';
import { FONT_WEIGHT_LIGHT } from '../../../../styles/text';
import { TRANSITION } from '../../../../styles/utils';

const NavLink = styled(Link)`
  background-color: transparent;
  text-decoration: none;
  color: white;
  padding: 2rem 1rem;
  font-weight: ${FONT_WEIGHT_LIGHT};
  letter-spacing: 1px;
  transition: ${TRANSITION};

  &:hover {
    color: ${LIGHT_GRAY};
  }
`;

const Nav = styled.nav`
  padding: 0 2rem;
  background-color: ${PRIMARY};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const Navbar = () => (
  <Nav>
    <NavLink to="/">
      Top stories
    </NavLink>
    <NavLink to="/newstories">
      New stories
    </NavLink>
    <NavLink to="/beststories">
      Best stories
    </NavLink>
  </Nav>
);

export default Navbar;
