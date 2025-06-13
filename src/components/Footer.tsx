import styled from 'styled-components';
import FooterImageCards from '../assets/FooterImageCards.png';

const FooterContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BackgroundCards = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ContentWrapper = styled.div`
  text-align: center;
  color: white;
  max-width: 800px;
  z-index: 3;
  padding: 78px 35px 0;
  position: relative;
`;

const FooterTitle = styled.h1`
  font-family: 'Clash Grotesk', sans-serif;
  font-weight: 600;
  font-size: 32px;
  line-height: 30px;
  letter-spacing: 0;
  margin-bottom: 26px;
  color: #FFFFFF;

  span {
    color: #FFDC78;
    display: inline;
  }
`;

const FooterSubTitle = styled.p`
  font-family: 'Public Sans', sans-serif;
  font-weight: 700;
  font-size: 26px;
  line-height: 30px;
  color: #FFFFFF;
  letter-spacing: 0;
  margin: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <BackgroundCards>
        <img src={FooterImageCards} alt="Background Cards" />
      </BackgroundCards>
      <ContentWrapper>
        <FooterTitle>
          We are making HR simple <span>over 2000+ brands.</span>
        </FooterTitle>
        <FooterSubTitle>Make HR easy like never before!</FooterSubTitle>
      </ContentWrapper>
    </FooterContainer>
  );
};

export default Footer;