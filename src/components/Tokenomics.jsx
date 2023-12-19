import styled from "styled-components";
import wavyRectangle from "/src/assets/wavy-rectangle.png";
import wavyRectangleMobile from "/src/assets/wavy-rectangle-mobile.png";
import piechart from "/src/assets/piechart.png";
import DoubleLineIcons from "./DoubleLineIcons";
import StyledText from "./StyledText";
import WidthContainer from "./WidthContainer";

const TokenomicsContainer = styled.section`
  width: 100%;
  min-height: 90vh;
  height: 70rem;
  position: relative;

  @media (max-width: 768px) {
    padding-top: 10%;
    height: 75vh;
  }

  @media (max-width: 400px) {
    height: 70vh;
  }
`;

const TokenomicsBackground = styled.div`
  background: url(${wavyRectangle}) no-repeat top/cover;
  min-height: 110vh;
  height: 95rem;
  width: 100%;
  position: absolute;
  z-index: -5;

  transform: translateY(-25rem);

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    background: url(${wavyRectangleMobile}) no-repeat top/contain;
    height: 85vh;
  }

  @media (max-width: 400px) {
    background: url(${wavyRectangleMobile}) no-repeat top/contain;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6rem;
  padding-top: 5rem;

  @media (max-width: 768px) {
    padding-top: 0rem;
    gap: 4rem;
  }
`;

const Head = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Body = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-items: center;
    gap: 3rem;
  }
`;

const ColumnData = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    gap: 0.6rem;
  }
`;

const CenterText = styled.p`
  @media (max-width: 768px) {
    align-self: center;
  }
`;

const Img = styled.img`
  @media (max-width: 768px) {
    order: -1;
    width: 60%;
  }
`;

function Tokenomics() {
  return (
    <TokenomicsContainer id="tokenomics">
      <TokenomicsBackground />
      <WidthContainer>
        <Content>
          <Head>
            <DoubleLineIcons />
            <p>
              <StyledText type="heading" font="Fredoka, sans-serif">
                token
              </StyledText>
              <StyledText
                type="heading"
                font="Fredoka, sans-serif"
                color="#1F1F1F"
              >
                omics
              </StyledText>
            </p>
            <DoubleLineIcons />
          </Head>
          <Body>
            <ColumnData>
              <CenterText>Total Supply:</CenterText>
              <StyledText type="text">69 Trillion $DOOKIE</StyledText>
            </ColumnData>
            <Img src={piechart} alt="piechart" />
            <ColumnData>
              <p>
                <StyledText type="text">50%</StyledText> <span> - Airdrop</span>
              </p>
              <p>
                <StyledText type="text">20%</StyledText>{" "}
                <span> - Marketing</span>
              </p>
              <p>
                <StyledText type="text">20%</StyledText>
                <span> - Contributors</span>
              </p>
              <p>
                <StyledText type="text">10%</StyledText>{" "}
                <span> - Liquidity</span>
              </p>
            </ColumnData>
          </Body>
        </Content>
      </WidthContainer>
    </TokenomicsContainer>
  );
}

export default Tokenomics;
