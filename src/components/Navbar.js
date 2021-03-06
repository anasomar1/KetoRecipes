import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

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
const NavContainer = styled.div`
  background: #339966;
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
  width: 30%;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const NavItem = styled.li`
  &:hover a {
    border-bottom: 1px solid #0afcd7;
  }
`;
const NavLogo = styled.div`
  font-family: "Inter", sans-serif;
  font-weight: bold;
`;
export default Navbar;
