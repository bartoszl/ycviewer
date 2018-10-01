import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavLink = styled(Link)`
  background-color: transparent;
  text-decoration: none;
  color: white;
  padding: 2rem 1rem;
  font-weight: 400;
  letter-spacing: 1px;
`;

const Nav = styled.nav`
  padding: 0 2rem;
  background-color: #07889B;
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
