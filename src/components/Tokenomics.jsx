import styled from "styled-components";
import wavyRectangle from "/src/assets/wavy-rectangle.png";
import wavyRectangleMobile from "/src/assets/wavy-rectangle-mobile.png";
import DoubleLineIcons from "./DoubleLineIcons";
import WidthContainer from "./WidthContainer";
import piechart from "/src/assets/piechart.png";
import StyledText from "./StyledText";

const TokenomicsContainer = styled.section`
  background: url(${wavyRectangle}) no-repeat top/cover;
  margin-top: -15%;
  padding-top: 10%;
  height: 110vh;
  width: 100%;

  @media (max-width: 768px) {
    background: url(${wavyRectangleMobile}) no-repeat top/cover;
    height: 85vh;
    margin-top: -35%;
    padding-top: 25%;
  }

  @media (max-width: 400px) {
    height: 110vh;
  }
`;

const TokenomicsMainContainer = styled.div`
  padding-top: 8%;
  width: 100%;
`;

const HeadingRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const TokenomicsContentRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  width: 90%;
  margin: 10rem auto 40rem;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 3rem auto;
    gap: 2.5rem;
    width: 100%;
  }
`;

const DataRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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
    width: 65%;
  }
`;

function Tokenomics() {
  return (
    <TokenomicsContainer>
      <WidthContainer>
        <TokenomicsMainContainer id="tokenomics">
          <HeadingRow>
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
          </HeadingRow>
          <TokenomicsContentRow>
            <DataRow className="tokenomics-row">
              <CenterHeading>Total Supply:</CenterHeading>
              <StyledText type="text" color="#BA7043">
                69 Trillion $Dookie
              </StyledText>
            </DataRow>
            <Img src={piechart} alt="piechart" />
            <DataRow>
              <p>
                <StyledText type="text">50%</StyledText> - <span>Airdrop</span>
              </p>
              <p>
                <StyledText type="text">20%</StyledText> -{" "}
                <span>Marketing</span>
              </p>
              <p>
                <StyledText type="text">20%</StyledText> -{" "}
                <span>Contributors</span>
              </p>
              <p>
                <StyledText type="text">10%</StyledText> -{" "}
                <span>Liquidity</span>
              </p>
            </DataRow>
          </TokenomicsContentRow>
        </TokenomicsMainContainer>
      </WidthContainer>
    </TokenomicsContainer>
  );
}

export default Tokenomics;
