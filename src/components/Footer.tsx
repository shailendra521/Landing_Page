import styled from 'styled-components';
import FooterImage from '../assets/FooterImage.png';

const FooterContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: #FF6634;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <ContentWrapper>
        <ImageWrapper>
          <img src={FooterImage} alt="HR Made Simple" />
        </ImageWrapper>
      </ContentWrapper>
    </FooterContainer>
  );
};

export default Footer;