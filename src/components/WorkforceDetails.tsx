import styled from 'styled-components';

const Container = styled.div`
  background-color: #FDF3F1;
  padding: 40px 30px;
  border-radius: 12px;
  max-width: 100%;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Title = styled.h2`
  font-family: 'Clash Grotesk', sans-serif;
  font-weight: 600;
  font-size: 32px;
  line-height: 120%;
  color: #000000;
  margin-bottom: 16px;
`;

const Description = styled.p`
  font-family: 'Public Sans', sans-serif;
  font-size: 16px;
  line-height: 150%;
  color: #333333;
  margin-bottom: 24px;
`;

const DemoButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: #E65F46;
  color: white;
  font-family: 'Public Sans', sans-serif;
  font-weight: 600;
  font-size: 16px;
  padding: 12px 24px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #E65F46;
  }
`;

const Arrow = styled.span`
  font-size: 20px;
`;

const ImageContainer = styled.div`
  position: relative;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }
`;

const WorkforceDetails = () => {
  return (
    <Container>
      <ContentWrapper>
        <div>
          <Title>Simplify Your<br />Workforce<br />Management</Title>
          <Description>
            Easily manage employee lifecycles with HROne from onboarding to 
            offboarding, handle every HR task.
          </Description>
          <DemoButton>
            <Arrow>→</Arrow>
            Book a Demo!
          </DemoButton>
        </div>
        <ImageContainer>
          <img 
            src="/images/workforce-dashboard.png" 
            alt="Workforce Management Dashboard"
          />
        </ImageContainer>
      </ContentWrapper>
    </Container>
  );
};

export default WorkforceDetails; 