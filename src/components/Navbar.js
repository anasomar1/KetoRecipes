import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

const NavContainer = styled.div`
  background: #16f856;
`;

const Nav = styled.nav`
  max-width: 1366px;
  width: 80%;
  margin: 0 auto;
  min-height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavList = styled.ul`
  text-decoration: none;
  display: flex;
  justify-content: space-around;
`;

const NavItem = styled.li`
  padding-left: 7rem;
`;
const NavLogo = styled.div`
  font-family: "Inter", sans-serif;
`;

const Navbar = () => {
  return (
    <NavContainer>
      <Nav>
        <Link to="/">
          <NavLogo>Ketogenic Diet</NavLogo>
        </Link>
        <NavList>
          <NavItem>
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem>
            <Link to="/recipes">recipes</Link>
          </NavItem>
          <NavItem>
            <Link to="/about">about keto</Link>
          </NavItem>
        </NavList>
      </Nav>
    </NavContainer>
  );
};

export default Navbar;
