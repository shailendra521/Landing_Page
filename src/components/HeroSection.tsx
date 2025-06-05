import React from 'react';
import styled from 'styled-components';
import Layer_1 from '../assets/Layer_1.png';
import RatedHrImage from '../assets/RatedHrImage.png';


const HeroContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2.875rem 1.5rem 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: linear-gradient(135deg, #004D40 0%, #00695C 100%);
`;

const Logo = styled.img`
  width: 140px;
  // margin-bottom: 2rem;
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
    height: 24px;
    width: auto;
  }
`;

const MainHeading = styled.h1`
  color: #FFDC78;
  font-family: 'Public Sans', sans-serif;
  font-weight: 800;
  font-size: 2.82rem; /* 45.13px ÷ 16 */
  line-height: 2.88rem; /* 46.07px ÷ 16 */
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
`;


const RatingsContainer = styled.div`
  display: flex;
  gap: 1rem; /* 16px */
  // margin: 1.5rem auto;
  align-items: center;
  justify-content: center;
  max-width: 450px;
  width: 100%;
  position: relative;
  padding-left: 2rem;      /* 32px */
  padding-right: 2rem;     /* 32px */

`;

const RatingBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex: 1;
  justify-content: center;

  .rating-logo {
    width: 31.43px;
    height: 31.43px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: 100%;
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
    color: rgba(255, 255, 255, 0.9);
    font-size: 0.625rem;
    font-family: 'Public Sans', sans-serif;
    line-height: 1;
    white-space: nowrap;
    display: inline-block;
  }
`;

const DemoButton = styled.button`
  background-color: #FF5722;
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  border: none;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  max-width: 400px;
  justify-content: center;
  margin-top: auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  &:hover {
    background-color: #F4511E;
    transform: translateY(-2px);
  }

  .arrow {
    font-size: 1.2rem;
  }
`;

const HeroSection: React.FC = () => {
  return (
    <HeroContainer>
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

      <DemoButton>
        <span className="arrow">→</span>
        Request a Free Demo!
      </DemoButton>
    </HeroContainer>
  );
};

export default HeroSection; 