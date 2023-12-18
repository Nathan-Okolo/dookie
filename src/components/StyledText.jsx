import styled, { css } from "styled-components";

const StyledText = styled.span`
  ${(props) => `color: ${props.color ? props.color : "#BA7043"};`}

  ${(props) => props.font && `font-family: ${props.font};`}

  ${(props) =>
    props.type === "text" &&
    css`
      @media (max-width: 768px) {
        font-size: 2rem;
      }
    `};

  ${(props) =>
    props.type === "heading" &&
    css`
      @media (max-width: 768px) {
        font-size: 2rem;
      }
    `};

  font-weight: 500;
  text-transform: uppercase;
  font-size: 4.2rem;
  line-height: 4.309rem;

  @media (max-width: 768px) {
    font-size: 2rem;
    line-height: 2.052rem;
  }
`;

export default StyledText;
