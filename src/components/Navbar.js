import styled from "styled-components";
import React from "react";

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
const NavLogo = styled.a`
  font-family: "Quintessential", cursive;
`;

const Navbar = () => {
  return (
    <NavContainer>
      <Nav>
        <NavLogo>Ketogenic Diet</NavLogo>
        <NavList>
          <NavItem>
            <a href="#">contact us</a>
          </NavItem>
          <NavItem>
            <a href="#">recipes</a>
          </NavItem>
          <NavItem>
            <a href="#">about keto</a>
          </NavItem>
        </NavList>
      </Nav>
    </NavContainer>
  );
};

export default Navbar;
