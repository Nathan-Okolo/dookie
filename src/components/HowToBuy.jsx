import styled, { css } from "styled-components";
import StyledText from "./StyledText";
import DoubleLineIcons from "./DoubleLineIcons";
import WidthContainer from "./WidthContainer";
import poop1 from "/src/assets/poop-1.png";
import poop2 from "/src/assets/poop-2.png";
import poop3 from "/src/assets/poop-3.png";
import dookie1 from "/src/assets/dookie-1.png";
import dookie2 from "/src/assets/dookie-2.png";
import dookie3 from "/src/assets/dookie-3.png";
import rightPoint from "/src/assets/right-point.png";
import leftPoint from "/src/assets/left-point.png";

const HowToBuyContainer = styled.section`
  margin-bottom: 5rem;

  @media (max-width: 768px) {
    height: max-content;
    margin-top: 10%;
    margin-bottom: -3rem;
  }
`;

const HowToBuyHeadingContainer = styled.div`
  margin-bottom: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const Icon = styled.img`
  ${(props) =>
    props.off &&
    css`
      @media (max-width: 768px) {
        display: ${props.off};
      }
    `}

  ${(props) =>
    props.type === "arrow" &&
    css`
      @media (max-width: 768px) {
        width: 4.275rem;
        height: 4rem;
      }
    `}

  ${(props) =>
    props.type === "poop" &&
    css`
      width: 8.1rem;
      height: 7.6rem;
      @media (max-width: 768px) {
        width: 5rem;
        height: 5rem;
      }
    `}

  ${(props) =>
    props.type === "dookie" &&
    css`
      width: 18.9rem;
      height: 18rem;
      @media (max-width: 768px) {
        width: 11.7rem;
        height: 11.1rem;
      }
    `}
`;

const Rows = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

const Row = styled.div`
  display: grid;
  border: none;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 768px) {
    gap: 1rem;
    grid-template-columns: 1fr;
    text-align: center;
    align-items: center;
    justify-items: center;
  }
`;

const Column = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const RowData = styled.div`
  ${(props) =>
    props.move &&
    css`
      transform: translate(${props.move});
    `}
`;

const ColumnData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const CellData = styled.div`
  ${(props) =>
    props.order &&
    css`
      @media (min-width: 768px) {
        order: ${props.order};
      }
    `}
`;

function HowToBuy() {
  return (
    <WidthContainer>
      <HowToBuyContainer id="how-to-buy">
        <HowToBuyHeadingContainer>
          <DoubleLineIcons />
          <StyledText color="#1F1F1F" font="Fredoka, sans-serif">
            How to
          </StyledText>
          <StyledText font="Fredoka, sans-serif"> Buy</StyledText>
          <DoubleLineIcons />
        </HowToBuyHeadingContainer>

        <Rows>
          {/* ROW ONE */}
          <Row>
            <Column>
              <Icon type="poop" src={poop1} />
              <ColumnData>
                <StyledText>create wallet</StyledText>
                <p>
                  Download Phantom wallet or your wallet of choice from the App
                  Store or Google Play store for free
                </p>
              </ColumnData>
            </Column>
            <Column>
              <RowData move="0, 50%">
                <Icon src={rightPoint} type="arrow" alt="right point arrow" />
              </RowData>
              <RowData move="-50%, 0%">
                <Icon off="none" type="arrow" src={dookie1} alt="dookie icon" />
              </RowData>
            </Column>
          </Row>

          {/* ROW TWO */}
          <Row>
            <CellData order="1">
              <Column>
                <Icon type="poop" src={poop2} />
                <ColumnData>
                  <StyledText>Get $sol</StyledText>
                  <p>
                    If you don’t have any SOL, you can buy directly on Phantom
                    wallet, transfer from another wallet, or buy on another
                    exchange and send it to your wallet
                  </p>
                </ColumnData>
              </Column>
            </CellData>
            <Column>
              <CellData order="1">
                <RowData move="0, 50%">
                  <Icon src={leftPoint} type="arrow" alt="left point arrow" />
                </RowData>
              </CellData>
              <RowData move="-50%, 0%">
                <Icon off="none" type="arrow" src={dookie2} alt="dookie icon" />
              </RowData>
            </Column>
          </Row>

          {/* ROW THREE */}
          <Row>
            <Column>
              <Icon type="poop" src={poop3} />
              <ColumnData>
                <StyledText>Exchange for $DOOKIE</StyledText>
                <p>Trade $SOL for $DOOKIE on the following exchanges...</p>
              </ColumnData>
            </Column>
          </Row>

          <Row>
            <Column></Column>
            <Column>
              <RowData move="100%, 0">
                <Icon type="dookie" src={dookie3} alt="dookie icon" />
              </RowData>
            </Column>
          </Row>
        </Rows>
      </HowToBuyContainer>
    </WidthContainer>
  );
}

export default HowToBuy;

{
  /* <HowToBuyRow>
          <HowToBuyColumn>
            <HowToBuyIcon url={poop1} />
            <HowToBuyCombo>
              <StyledText>create wallet</StyledText>
              <p>
                Download Phantom wallet or your wallet of choice from the App
                Store or Google Play store for free
              </p>
            </HowToBuyCombo>
          </HowToBuyColumn>
          <HowToBuyColumn>
            <HowToBuyIcon url={rightPoint} />
            <HowToBuyIcon url={dookie1} />
          </HowToBuyColumn>
        </HowToBuyRow>

        
        <HowToBuyRow>
          <HowToBuyColumn>
            <HowToBuyIcon url={dookie2} />
            <HowToBuyIcon url={leftPoint} />
          </HowToBuyColumn>
          <HowToBuyColumn>
            <HowToBuyIcon url={poop2} />
            <HowToBuyCombo>
              <StyledText>Get $sol</StyledText>
              <p>
                If you don’t have any SOL, you can buy directly on Phantom
                wallet, transfer from another wallet, or buy on another exchange
                and send it to your wallet
              </p>
            </HowToBuyCombo>
          </HowToBuyColumn>
        </HowToBuyRow>

   
        <HowToBuyRow>
          <HowToBuyColumn>
            <HowToBuyIcon url={poop3} />
            <HowToBuyCombo>
              <StyledText>Exchange for $DOOKIE</StyledText>
              <p>Trade $SOL for $DOOKIE on the following exchanges...</p>
            </HowToBuyCombo>
          </HowToBuyColumn>
          <HowToBuyColumn>
            <HowToBuyIcon url={dookie3} />
          </HowToBuyColumn>
        </HowToBuyRow> */
}
// const HowToBuyColumn = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: flex-start;
// `;

// const HowToBuyCombo = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 2rem;
// `;

// const HowToBuyCell = styled.div`
//   ${(props) =>
//     props.start && `align-self: ${props.start}, justify-self: ${props.start};`}
//   ${(props) =>
//     props.end && `align-self: ${props.end}, justify-self: ${props.end};`}
//   ${(props) =>
//     props.center &&
//     `align-self: ${props.center}, justify-self: ${props.center};`}

//   align-self: flex-end;
//   justify-self: flex-end;
// `;

// const HowToBuyIcon = styled.img`
//   ${(props) => props.url && `background: url(${props.url}) no-repeat;`}
//   width: 100%;
//   height: 100%;
// `;
