import styled from "styled-components";
import gridLines from "/src/assets/grid-lines.png";
import gridLinesMobile from "/src/assets/grid-lines-mobile.png";
import Header from "./Header";
import goldenTurd from "/src/assets/golden-turd.png";
import WidthContainer from "./WidthContainer";

const StyledHero = styled.section`
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
`;

const Button = styled.button`
  font-size: inherit;
  font-family: inherit;
  color: #ba7043;
  padding: 1rem 3rem;
  border: 3px solid #ba7043;
  border-radius: 2rem;

  @media (max-width: 768px) {
    padding: 1rem 2rem;
    font-size: 2rem;
  }
`;

function Hero() {
  return (
    <StyledHero id="home">
      <WidthContainer>
        <Header />
        <Row>
          <Column>
            <p>
              Dookie is the embodiment of life’s messy bits, laughing in the
              face of the “unmentionables,” and spreading joy with every
              hilarious, nonsensical move
            </p>
            <Button type="button">buy now</Button>
          </Column>
          <Img src={goldenTurd} alt="golden turd" />
        </Row>
      </WidthContainer>
    </StyledHero>
  );
}

export default Hero;
