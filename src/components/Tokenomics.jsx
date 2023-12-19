import styled from "styled-components";
import wavyRectangle from "/src/assets/wavy-rectangle.png";
import wavyRectangleMobile from "/src/assets/wavy-rectangle-mobile.png";
import piechart from "/src/assets/piechart.png";
import DoubleLineIcons from "./DoubleLineIcons";
import StyledText from "./StyledText";
import WidthContainer from "./WidthContainer";

const TokenomicsContainer = styled.section`
  padding-top: 3rem;
  margin-bottom: 15rem;

  @media (max-width: 768px) {
    margin-bottom: 10rem;
  }

  @media (max-width: 400px) {
    margin-bottom: 5rem;
  }
`;

const TokenomicsBackground = styled.div`
  background: url(${wavyRectangle}) no-repeat center/cover;
  height: 110vh;
  width: 100%;
  position: absolute;
  top: 75%;
  left: 0%;
  z-index: -5;

  @media (max-width: 768px) {
    background: url(${wavyRectangleMobile}) no-repeat top/contain;
    top: 55%;
    height: 85vh;
  }

  @media (max-width: 400px) {
    background: url(${wavyRectangleMobile}) no-repeat top/contain;
    top: 60%;
    height: 110vh;
    width: 100vw;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6rem;

  @media (max-width: 768px) {
    gap: 4rem;
  }
`;

const Head = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
  align-self: center;
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
