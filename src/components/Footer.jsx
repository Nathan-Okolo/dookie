import styled from "styled-components";
import twitter from "/src/assets/x.png";
import telegram from "/src/assets/telegram.png";

const FooterContainer = styled.footer`
  background-color: #ba7043;
  color: #ffffff;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  

  @media (max-width: 668px) {
  }
`;

const StyledFooter = styled.div`
  padding-left: 96px;
  margin-left: 10px;
  &::before {
    content: "Just Dookit";
  }

  @media (max-width: 668px) {
    &::before {
      content: "Just Dookit";
    }
  padding-left: 6px;
  font-size: 2rem;
  }
`;

const Img1 = styled.a`
  width: 33px;
  height: 33px;
  margin-left: auto;
  margin-right: 20px;

  @media (max-width: 668px) {
    margin-right: 30px;
    display: flex;
  }
`;

const Img2 = styled.a`
  width: 33px;
  height: 33px;
  margin-right: 150px;

  @media (max-width: 668px) {
    margin-right: 30px;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <StyledFooter></StyledFooter>
      <Img1
        href="https://x.com/Dookietheturd?t=_As87nlHtxhuFXkLoArl6Q&s=09"
        target="_blank"
        rel="noopener noreferrer">
        <img src={twitter} alt="golden turd" />
      </Img1>
      <Img2
        href="https://t.me/+LZ-0EB9F3u0xYTk0"
        target="_blank"
        rel="noopener noreferrer">
        <img src={telegram} alt="golden turd" />
      </Img2>
    </FooterContainer>
  );
}

export default Footer;
