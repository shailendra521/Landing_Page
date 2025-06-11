import styled from 'styled-components';
import GreenTick from '../assets/GreenTick.png';


// Add font import
const GlobalStyle = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;500;600;700&display=swap');
`;

const Container = styled.div`
  background-color: #013A29;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px 41px 32px;
  font-family: 'Public Sans', sans-serif;
  
  @media (min-width: 768px) {
    padding: 56px 55px 74px 58px;
  }
`;

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 20px;
  width: 100%;
  max-width: 335px;
  
  @media (min-width: 768px) {
    margin-bottom: 27px;
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
  
  @media (min-width: 768px) {
    font-size: 30px;
    line-height: 30px;
    margin-bottom: 10px;
  }
`;

const Subtitle = styled.p`
  font-family: 'Public Sans', sans-serif;
  color: white;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0;
  text-align: center;
  
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

const PricingCard = styled.div`
  background-color: #FFF5D7;
  border-radius: 20px;
  padding: 32px 41px 32px 37px;
  margin-bottom: 46px;
  width: 100%;
  max-width: 335px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: -20px;
    right: -20px;
    top: 0;
    bottom: 0;
    background-color: #FFF5D7;
    border-radius: 32px;
    z-index: -1;
  }
  
  @media (min-width: 768px) {
    padding: 32px 41px 32px 37px;
    margin-bottom: 32px;
    max-width: 720px;
  }
`;

const PriceHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
  color: #272727;
  
  @media (min-width: 768px) {
    gap: 12px;
    margin-bottom: 8px;
  }
`;

const PriceDot = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #FF6B6B;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  
  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

const StartingText = styled.span`
  font-family: 'Clash Grotesk', sans-serif;
  font-size: 24px;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: 0;
  text-align: center;
  vertical-align: middle;
  color: #272727;
  
  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

const PriceAmount = styled.div`
  font-family: 'Clash Grotesk', sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: 0;
  text-align: center;
  color: #272727;
  padding-left: 24px;
  
  @media (min-width: 768px) {
    font-size: 24px;
    padding-left: 24px;
  }
`;

const FeaturesList = styled.div`
  width: 100%;
  max-width: 335px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  
  @media (min-width: 768px) {
    max-width: 720px;
    gap: 3rem;
  }
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  
  @media (min-width: 768px) {
    gap: 1.75rem;
  }
`;

const CheckIcon = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: #00C853;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 0.25rem;
  
  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
    margin-top: 0.5rem;
  }
`;

const FeatureText = styled.p`
  font-family: 'Public Sans', sans-serif;
  color: white;
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
  letter-spacing: 0;
  
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 21px;
  }
  
  strong {
    font-weight: 600;
  }
`;

const PricingPlan = () => {
  return (
    <GlobalStyle>
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
    </GlobalStyle>
  );
};

export default PricingPlan;