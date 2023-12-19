import styled from "styled-components";
import gridLines from "/src/assets/grid-lines.png";
import gridLinesMobile from "/src/assets/grid-lines-mobile.png";
import Navigation from "./Navigation";
import goldenTurd from "/src/assets/golden-turd.png";
import WidthContainer from "./WidthContainer";
import StyledText from "./StyledText";

const StyledHeader = styled.section`
  color: #1f1f1f;
  background: url(${gridLines}) center/cover;

  height: 100vh;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    background: url(${gridLinesMobile}) center/cover;
    height: 100%;
  }
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-top: 3rem;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
  width: 110%;

  @media (max-width: 768px) {
    width: 94%;
    margin: 0 auto;
    text-align: center;
    align-items: center;
  }
`;

const Img = styled.img`
  width: 100%;
  height: auto;

  @media (max-width: 768px) {
    transform: translateY(-2rem);
  }
`;

const Button = styled.button`
  font-size: inherit;
  font-family: inherit;
  color: #ba7043;
  padding: 1rem 4rem;
  border: 3px solid #ba7043;
  border-radius: 3rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    opacity: 0.8;
    transform: translateY(-3px);
    box-shadow: 0 2px 4px #1f1f1f;
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 1px 2px #1f1f1f;
  }

  @media (max-width: 768px) {
    padding: 1rem 2rem;
    font-size: 2rem;
  }
`;

const StyledLink = styled.a`
  color: inherit;
  font-size: inherit;
  font-weight: inherit;
  text-decoration: none;
`;

function Header() {
  return (
    <StyledHeader id="home">
      <WidthContainer>
        <Navigation />
        <Row>
          <Column>
            <StyledText color="#1f1f1f" type="text">
              Dookie is the embodiment of life’s messy bits, laughing in the
              face of the{" "}
              <StyledText background="#ffe2bd" color="#1f1f1f" type="text">
                “unmentionables,”
              </StyledText>{" "}
              and spreading joy with every hilarious, nonsensical move
            </StyledText>
            <Button type="button">
              <StyledLink>buy now</StyledLink>
            </Button>
          </Column>
          <Img src={goldenTurd} alt="golden turd" />
        </Row>
      </WidthContainer>
    </StyledHeader>
  );
}

export default Header;
