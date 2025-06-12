import styled from 'styled-components';
import FooterImage from '../assets/FooterImage.png';

const FooterContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: #F76818;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentWrapper = styled.div`
  text-align: center;
  color: white;
  max-width: 800px;
  z-index: 3;
  padding: 78px 35px 0;
  // margin-bottom: 30px;
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
    color: #FFE5A2;
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

const ImageWrapper = styled.div`
  width: 110%;
  position: absolute;
  bottom: 0;
  left: 50%;
  right: 0;
  z-index: 2;
  transform: translateX(-50%) scale(1.2);
  
  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    display: block;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <ContentWrapper>
        <FooterTitle>
          We are making HR simple <span>over 2000+ brands.</span>
        </FooterTitle>
        <FooterSubTitle>Make HR easy like never before!</FooterSubTitle>
      </ContentWrapper>
      <ImageWrapper>
        <img src={FooterImage} alt="HR Made Simple" />
      </ImageWrapper>
    </FooterContainer>
  );
};

export default Footer;