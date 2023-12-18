import styled from "styled-components";
import doubleLines from "/src/assets/double-lines.png";

const DoubleLineIcons = styled.img`
  background: url(${doubleLines}) no-repeat center/contain;
  width: 10rem;
  padding: 1rem;

  @media (max-width: 768px) {
    width: 5rem;
    height: 1rem;
  }
`;

export default DoubleLineIcons;
