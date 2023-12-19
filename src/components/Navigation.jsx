import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import dookieLogo from "/src/assets/dookie.png";
import HamburgerToggle from "/src/assets/hamburger-toggle.png";

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  border-bottom: 2px solid #1f1f1f;

  @media (max-width: 768px) {
    height: 6rem;
  }
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
  transition: color 0.2s;

  &:hover {
    color: #ba7043;
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
    top: 2.8%;
    right: 10%;
    z-index: 5;
  }
`;

const Navigation = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) {
      document.body.style.height = isMenuOpen ? "100vh" : "auto";
      document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    }
  }, [clicked, isMenuOpen]);

  const toggleMenu = () => {
    setMenuOpen((menu) => !menu);
    setClicked(true);
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
