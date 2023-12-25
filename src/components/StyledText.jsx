import styled, { css } from "styled-components";

const StyledText = styled.span`
  font-weight: 600;
  text-transform: uppercase;
  font-size: 4.2rem;
  line-height: 4.309rem;

  @media (max-width: 768px) {
    font-size: 2.4rem;
    line-height: 2.462rem;
  }

  ${(props) => `color: ${props.color ? props.color : "#BA7043"};`}

  ${(props) => props.font && `font-family: ${props.font};`}

  ${(props) =>
    props.background &&
    css`
      background-color: ${props.background};
    `};

  ${(props) =>
    props.type === "text" &&
    css`
      font-size: 3.2rem;
      line-height: 3.283rem;
      text-transform: none;
      font-weight: 400;
    `};

  ${(props) =>
    props.type === "texter" &&
    css`
      font-size: 5.2rem;
      line-height: 5.583rem;
      text-transform: none;
      font-weight: 400;

      @media (max-width: 768px) {
        font-size: 3.4rem;
        line-height: 3.462rem;
      }
    `};

  ${(props) =>
    props.type === "heading" &&
    css`
      @media (max-width: 768px) {
        font-size: 2rem;
      }
    `};
`;

export default StyledText;
