import { useState } from "react";
import styled from "styled-components";
import dookieLogo from "/src/assets/dookie.svg";
import HamburgerToggle from "/src/assets/hamburger-toggle.png";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  border-bottom: 2px solid #1f1f1f;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
`;

const MenuContainer = styled.nav`
  display: flex;
  gap: 1rem;

  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    display: none; // Hide on mobile initially
    flex-direction: column;
    background-color: #ffe2bd;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    width: 60%;
    height: 100%;
    padding-left: 2rem;
    padding-top: 10rem;
    transition: all 0.3s ease-in-out;
  }
`;

const MenuItem = styled.a`
  cursor: pointer;
  padding: 0.5rem 1rem;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ffe2bd;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const HamburgerIcon = styled.span`
  display: none;
  background: url(${HamburgerToggle}) no-repeat;

  @media (max-width: 768px) {
    display: inline-block;
    cursor: pointer;
    width: 3rem;
    height: 3rem;
    background-size: contain;
    position: absolute;
    top: 5%;
    right: 10%;
    z-index: 5;
  }
`;

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer>
      <Logo>
        <img src={dookieLogo} alt="dookie logo" />
      </Logo>
      <MenuContainer>
        <MenuItem>Home</MenuItem>
        <MenuItem>Tokenomics</MenuItem>
        <MenuItem>How to Buy</MenuItem>
      </MenuContainer>
      <HamburgerIcon onClick={toggleMenu} />
      {isMenuOpen && (
        <MenuContainer style={isMenuOpen && { display: "flex" }}>
          <MenuItem>Home</MenuItem>
          <MenuItem>Tokenomics</MenuItem>
          <MenuItem>How to Buy</MenuItem>
        </MenuContainer>
      )}
    </HeaderContainer>
  );
};

export default Header;
