import styled from 'styled-components';
import GreenTick from '../assets/GreenTick.png';
import PricingImage from '../assets/PricingImage.png';


const Container = styled.div`
  background-image: url(${PricingImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 40px 20px 40px;
  font-family: 'Public Sans', sans-serif;
  
  @media (min-width: 375px) {
    padding: 45px 25px 40px;
  }
  
  @media (min-width: 480px) {
    padding: 50px 30px 40px;
  }
  
  @media (min-width: 768px) {
    padding: 60px 55px 50px 58px;
  }
`;

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 32px;
  width: 100%;
  max-width: 300px;
  
  @media (min-width: 375px) {
    max-width: 320px;
  }
  
  @media (min-width: 480px) {
    max-width: 335px;
  }
  
  @media (min-width: 768px) {
    margin-bottom: 40px;
    max-width: 720px;
  }
`;

const Title = styled.h1`
  font-family: 'Public Sans', sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0;
  text-align: center;
  color: #FFDC78;
  margin-bottom: 8px;
  
  @media (min-width: 375px) {
    font-size: 26px;
    line-height: 29px;
  }
  
  @media (min-width: 480px) {
    font-size: 28px;
    line-height: 30px;
  }
  
  @media (min-width: 768px) {
    font-size: 30px;
    line-height: 30px;
    margin-bottom: 10px;
  }
`;

const Subtitle = styled.p`
  font-family: 'Public Sans', sans-serif;
  color: white;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0;
  text-align: center;
  
  @media (min-width: 375px) {
    font-size: 15px;
    line-height: 21px;
  }
  
  @media (min-width: 480px) {
    font-size: 16px;
    line-height: 22px;
  }
  
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

const PricingCard = styled.div`
  background-color: #FFF5D7;
  border-radius: 16px;
  padding: 24px 20px;
  // margin-bottom: 24px;
  width: 100%;
  max-width: 300px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: -15px;
    right: -15px;
    top: 0;
    bottom: 0;
    background-color: #FFF5D7;
    border-radius: 24px;
    z-index: -1;
  }
  
  @media (min-width: 375px) {
    max-width: 320px;
    padding: 26px 25px;
    border-radius: 18px;
    margin-bottom: 28px;
    
    &::before {
      left: -17px;
      right: -17px;
      border-radius: 28px;
    }
  }
  
  @media (min-width: 480px) {
    max-width: 335px;
    padding: 32px 41px 32px 37px;
    border-radius: 20px;
    margin-bottom: 32px;
    
    &::before {
      left: -20px;
      right: -20px;
      border-radius: 32px;
    }
  }
  
  @media (min-width: 768px) {
    max-width: 720px;
    margin-bottom: 50px;
  }
`;

const PriceHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  color: #272727;
  
  @media (min-width: 375px) {
    gap: 10px;
  }
  
  @media (min-width: 480px) {
    gap: 12px;
  }
`;

const PriceDot = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #FF6B6B;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  
  @media (min-width: 375px) {
    width: 22px;
    height: 22px;
  }
  
  @media (min-width: 480px) {
    width: 24px;
    height: 24px;
  }
`;

const StartingText = styled.span`
  font-family: 'Clash Grotesk', sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: 0;
  text-align: center;
  vertical-align: middle;
  color: #272727;
  
  @media (min-width: 375px) {
    font-size: 22px;
  }
  
  @media (min-width: 480px) {
    font-size: 24px;
  }
`;

const PriceAmount = styled.div`
  font-family: 'Clash Grotesk', sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: 0;
  text-align: center;
  color: #272727;
  padding-left: 20px;
  
  @media (min-width: 375px) {
    font-size: 22px;
    padding-left: 22px;
  }
  
  @media (min-width: 480px) {
    font-size: 24px;
    padding-left: 24px;
  }
`;

const FeaturesList = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 24px;
  
  @media (min-width: 375px) {
    max-width: 320px;
    gap: 28px;
    margin-bottom: 28px;
  }
  
  @media (min-width: 480px) {
    max-width: 335px;
    gap: 32px;
    margin-bottom: 32px;
  }
  
  @media (min-width: 768px) {
    max-width: 720px;
    gap: 40px;
    margin-bottom: 40px;
  }
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  
  @media (min-width: 375px) {
    gap: 14px;
  }
  
  @media (min-width: 480px) {
    gap: 16px;
  }
  
  @media (min-width: 768px) {
    gap: 1.75rem;
  }
`;

const FeatureText = styled.p`
  font-family: 'Public Sans', sans-serif;
  color: white;
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0;
  
  @media (min-width: 375px) {
    font-size: 16px;
    line-height: 19px;
  }
  
  @media (min-width: 480px) {
    font-size: 18px;
    line-height: 21px;
  }
  
  strong {
    font-weight: 600;
  }
`;

const PricingPlan = () => {
  return (
      <Container>
        <HeaderSection>
          <Title>
            Choose your<br />
            pricing plan
          </Title>
          <Subtitle>
            as per your needs,<br />
            without any risk
          </Subtitle>
        </HeaderSection>

        <PricingCard>
          <PriceHeader>
            <PriceDot />
            <StartingText>Starting from</StartingText>
          </PriceHeader>
          <PriceAmount>₹ 99 /User/Month</PriceAmount>
        </PricingCard>

        <FeaturesList>
          {[
            {
              text: "You pay starting from"  ,           
              bold: "Day 1.",
              suffix: "After go-live."
            },
            {
              text: "No contractual lock-in period.",
              bold: "",
              suffix: "Zero obligations."
            },
            {
              text: "No hefty hidden or",
              bold: "",
              suffix: "maintenance charges."
            }
          ].map((feature, index) => (
            <FeatureItem key={index}>
              <img src={GreenTick} alt="Green Tick" />
              <FeatureText>
                {feature.text} <strong>{feature.bold}</strong> {feature.suffix}
              </FeatureText>
            </FeatureItem>
          ))}
        </FeaturesList>
      </Container>
  );
};

export default PricingPlan;