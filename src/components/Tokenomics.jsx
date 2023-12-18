import styled from "styled-components";
import wavyRectangle from "/src/assets/wavy-rectangle.png";
import wavyRectangleMobile from "/src/assets/wavy-rectangle-mobile.png";
import doubleLines from "/src/assets/double-lines.png";
import WidthContainer from "./WidthContainer";
import piechart from "/src/assets/piechart.png";
import StyledText from "./StyledText";

const TokenomicsContainer = styled.div`
  background: url(${wavyRectangle}) no-repeat center/contain;
  margin-top: -18%;
  padding-top: 18%;
  height: 120vh;
  width: 100%;

  @media (max-width: 768px) {
    background: url(${wavyRectangleMobile}) no-repeat top/cover;
    height: 100vh;
    margin-top: -38%;
    padding-top: 35%;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const TokenomicsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  width: 90%;
  margin: 10rem auto 40rem;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 3rem auto;
    gap: 2rem;
    width: 100%;
  }
`;

const DoubleLineIcons = styled.img`
  background: url(${doubleLines}) no-repeat;
  width: 10rem;
  padding: 1rem;

  @media (max-width: 768px) {
    width: 4rem;
  }
`;

const CenterHeading = styled.p`
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Img = styled.img`
  background-size: cover;

  @media (max-width: 768px) {
    order: -1;
    width: 60%;
  }
`;

function Tokenomics() {
  return (
    <section id="tokenomics">
      <TokenomicsContainer>
        <WidthContainer>
          <Row>
            <DoubleLineIcons />
            <div>
              <StyledText font="Fredoka, sans-serif" color="#BA7043">
                token
              </StyledText>
              <StyledText font="Fredoka, sans-serif" color="#1F1F1F">
                omics
              </StyledText>
            </div>
            <DoubleLineIcons />
          </Row>
          <TokenomicsRow>
            <div className="tokenomics-row">
              <CenterHeading>Total Supply:</CenterHeading>
              <StyledText color="#BA7043">69 Trillion $Dookie</StyledText>
            </div>
            <Img src={piechart} alt="piechart" />
            <div>
              <p>
                <StyledText>50%</StyledText> - <span>Airdrop</span>
              </p>
              <p>
                <StyledText>20%</StyledText> - <span>Marketing</span>
              </p>
              <p>
                <StyledText>20%</StyledText> - <span>Contributors</span>
              </p>
              <p>
                <StyledText>10%</StyledText> - <span>Liquidity</span>
              </p>
            </div>
          </TokenomicsRow>
        </WidthContainer>
      </TokenomicsContainer>
    </section>
  );
}

export default Tokenomics;
