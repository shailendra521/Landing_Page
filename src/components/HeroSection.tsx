import React from 'react';
import styled from 'styled-components';
import Layer_1 from '../assets/Layer_1.png';
import RatedHrImage from '../assets/RatedHrImage.png';
import mobileChats from '../assets/mobileChats.png';
import micIcon from '../assets/micIcon.png';
import StarBig from '../assets/StartBig.png';
import StarSmall from '../assets/StarSmall.png';
import GreenBackgrounds from '../assets/GreenBackgrounds.png';

const WhiteContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: url(${GreenBackgrounds}) no-repeat center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  overflow: hidden;
`;

const HeroContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 2rem 1.5rem 0 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: transparent;
  position: relative;
  overflow: hidden;

  &::before {
    display: none;
  }

  &::after {
    display: none;
  }
`;

const Logo = styled.img`
  width: 140px;
`;

const TopRatedBadge = styled.div`
  padding: 1.5rem 0 0;       /* top right/left bottom */
  color: white;
  font-family: 'Public Sans', sans-serif;
  font-weight: 600;
  font-size: 0.88rem; /* 14.1px ÷ 16 */
  line-height: 1.41rem; /* 22.57px ÷ 16 */
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.125rem;

  img {
    width: 30.09px;
    height: 30.09px;
    object-fit: contain;
  }
`;

const MainHeading = styled.h1`
  color: #FFDC78;
  font-family: 'Public Sans', sans-serif;
  font-weight: 800;
  font-size: 2.82rem;
  line-height: 2.88rem;
  margin-bottom: 0.5rem;
  text-align: center;


`;

const Subheading = styled.p`
  color: #FFFFFF;
  font-family: 'Public Sans', sans-serif;
  font-weight: 500;
  font-size: 1rem;          /* 16px */
  line-height: 1.25rem;     /* 20px */
  margin-bottom: 1.25rem;
  text-align: center;
  max-width: 450px;
  letter-spacing: 0;        /* 0% spacing */
  margin-left: 40px;
  margin-right: 40px;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 100vh;
  padding-bottom: 0;

  @media (max-height: 700px) {
    padding-bottom: 0;
  }

  @media (max-width: 480px) {
    height: 100vh;
  }

  @media (max-width: 480px) and (min-height: 700px) {
    padding-bottom: 0;
  }
`;

const MobileImage = styled.div`
  width: 100%;
  max-width: 340px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 0;

  .mobile-main-image {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
    background: transparent;
    margin: 0;
  }

  .mic-icon {
    position: absolute;
    right: -20px;
    bottom: 80px;
    width: 41.61px;
    height: 41.61px;
    z-index: 2;

    img {
      filter: none;
    }
  }

  // Hide on desktop (above 640px)
  @media (min-width: 641px) {
    display: none;
  }

  @media (max-width: 480px) {
    max-width: 280px;
    bottom: 0;
    
    .mobile-main-image {
      max-height: 380px;
    }

    .mic-icon {
      width: 48px;
      height: 48px;
      right: -16px;
      bottom: 60px;
    }
  }
`;

const MainContent = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  padding-top: 1rem;

  @media (max-height: 800px) {
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 480px) {
    gap: 0.25rem;
    margin-bottom: 0.5rem;
  }
`;

const RatingsContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  max-width: 450px;
  width: 100%;
  position: relative;
  padding: 0 2rem;
  paddin: 1000px;
`;

const RatingBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex: 1;
  justify-content: center;

  .rating-logo {
    // width: 31.43px;
    // height: 31.43px;
    // display: flex;
    // align-items: center;
    // justify-content: center;

    img {
      width: 31.43px;
    height: 31.43px;
      object-fit: contain;
    }
  }

  .gartner-text {
    color: white;
    font-family: 'Public Sans', sans-serif;
    font-weight: 500;
    font-size: 1.25rem;
    margin: 0;
    line-height: 1;
    min-width: 31.43px;
  }

  .rating-content {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    text-align: left;
  }

  .stars {
    color: #FFC107;
    font-size: 0.875rem;
    letter-spacing: 1.5px;
    line-height: 1;
    margin-left: 0;
  }

  .reviews {
    color: #FFFFFF;
    font-size: 12px;
    font-family: 'Public Sans', sans-serif;
    line-height: 1;
    white-space: nowrap;
    display: inline-block;
  }
`;

const StarBigImg = styled.img`
  position: absolute;
  top: 32px;
  left: 16px;
  width: 40px;
  height: 40px;
  z-index: 1;

  @media (max-width: 480px) {
    width: 28px;
    height: 28px;
    top: 12px;
    left: -30px;
  }
`;

const StarSmallImg = styled.img`
  position: absolute;
  top: 120px;
  left: 8px;
  width: 20px;
  height: 20px;
  z-index: 1;

  @media (max-width: 480px) {
    width: 14px;
    height: 16px;
    top: 1px;
    left: -8px;
  }
`;

const HeroSection: React.FC = () => {
  return (
    <WhiteContainer>
      <HeroContainer>
        <ContentWrapper>
          <MainContent>
            <Logo src={Layer_1} alt="HROne Logo" />
            <TopRatedBadge>
              #1 RATED HR SOFTWARE ON <img src={RatedHrImage} alt="G2" />
            </TopRatedBadge>
            
            <MainHeading>World's Simplest HR Software</MainHeading>
            <Subheading>
              From hiring to exit, manage every HR task effortlessly
            </Subheading>

            <RatingsContainer>
              <RatingBox>
                <div className="rating-logo">
                  <img src={RatedHrImage} alt="G2" />
                </div>
                <div className="rating-content">
                  <div className="stars">★★★★★</div>
                  <div className="reviews">1400+ Reviews | 4.8</div>
                </div>
              </RatingBox>
              <RatingBox>
                <div className="gartner-text">Gartner</div>
                <div className="rating-content">
                  <div className="stars">★★★★★</div>
                  <div className="reviews">500+ Reviews | 4.9</div>
                </div>
              </RatingBox>
            </RatingsContainer>
          </MainContent>

          <MobileImage>
            <StarSmallImg src={StarSmall} alt="Small Star" />
            <StarBigImg src={StarBig} alt="Big Star" />
            <img className="mobile-main-image" src={mobileChats} alt="HROne Mobile App Interface" />
            <img className="mic-icon" src={micIcon} alt="Mic Icon" />
          </MobileImage>
        </ContentWrapper>
      </HeroContainer>
    </WhiteContainer>
  );
};

export default HeroSection;