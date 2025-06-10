import React from 'react';
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
  height: calc(100% - 100px);
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  height: 100px;
  background-color: white;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px -4px 20px rgba(0, 0, 0, 0.1);
`;

const DemoButton = styled.a`
  display: flex;
  align-items: center;
  background-color: #E65F46;
  color: white;
  text-decoration: none;
  padding: 16px 32px;
  border-radius: 8px;
  font-family: 'Clash Grotesk', sans-serif;
  font-size: 24px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  white-space: nowrap;
  -webkit-tap-highlight-color: transparent;

  &:hover, &:active, &:focus, &:visited {
    background-color: #d14b3e;
    color: white;
    text-decoration: none;
    outline: none;
  }

  &::before {
    content: '→';
    margin-right: 8px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <ContentWrapper>
        <ImageWrapper>
          <img src={FooterImage} alt="HR Made Simple" />
        </ImageWrapper>
        <ButtonWrapper>
          <DemoButton href="#demo">
            Request a Free Demo!
          </DemoButton>
        </ButtonWrapper>
      </ContentWrapper>
    </FooterContainer>
  );
};

export default Footer;