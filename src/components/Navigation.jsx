import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import dookieLogo from "/src/assets/dookie.png";
import HamburgerToggle from "/src/assets/hamburger-toggle.png";

const NavContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  border-bottom: 2px solid #1f1f1f;
`;

const Logo = styled.img`
  &[src] {
    alt: "dookie logo";
  }

  cursor: pointer;
  width: 20.7rem;
  height: 6rem;

  @media (max-width: 768px) {
    width: 7.3rem;
    height: 2.1rem;
  }
`;

const MenuContainer = styled.nav`
  display: flex;
  align-items: center;

  gap: 1rem;

  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    display: none;
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

const MenuItem = styled(Link)`
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
    width: 2rem;
    height: 2rem;
    background-size: contain;
    position: absolute;
    top: 1.8%;
    right: 10%;
    z-index: 5;
  }
`;

const Navigation = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <NavContainer>
      <Logo src={dookieLogo} />
      <MenuContainer>
        <MenuItem to="home" smooth={true} duration={500}>
          Home
        </MenuItem>
        <MenuItem to="tokenomics" smooth={true} duration={500}>
          Tokenomics
        </MenuItem>
        <MenuItem to="how-to-buy" smooth={true} duration={500}>
          How to Buy
        </MenuItem>
      </MenuContainer>
      <HamburgerIcon onClick={toggleMenu} />
      {isMenuOpen && (
        <MenuContainer style={isMenuOpen && { display: "flex" }}>
          <MenuItem
            onClick={() => setMenuOpen(false)}
            to="home"
            smooth={true}
            duration={500}
          >
            Home
          </MenuItem>
          <MenuItem
            onClick={() => setMenuOpen(false)}
            to="tokenomics"
            smooth={true}
            duration={500}
          >
            Tokenomics
          </MenuItem>
          <MenuItem
            onClick={() => setMenuOpen(false)}
            to="how-to-buy"
            smooth={true}
            duration={500}
          >
            How to Buy
          </MenuItem>
        </MenuContainer>
      )}
    </NavContainer>
  );
};

export default Navigation;
