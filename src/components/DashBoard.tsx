import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Isolation_Mode from '../assets/Isolation_Mode.png';
import Workforce_Dashboard from '../assets/Workforce_Dashboard.webp';
import Performance from '../assets/Performance.webp';
import Payroll from '../assets/Payroll.webp';
import Attendance from '../assets/Attendance.webp';
import Recruitment from '../assets/Recruitment.webp';

const Container = styled.div`
 padding: 42px 25px 10px 34px;
  max-width: 100%;
  margin: 0 auto;
  background-color: #FDF3F1;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 18px;
  padding: 20px 0;

  @media (max-width: 768px) {
    margin-bottom: 18px;
  }
`;

const Title = styled.h1`
  font-family: 'Clash Grotesk', sans-serif;
  font-weight: 600;
  font-size: 30px;
  line-height: 30px;
  letter-spacing: 0;
  text-align: center;
  color: #000;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const Subtitle = styled.h2`
  font-family: 'Public Sans', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  letter-spacing: 0;
  text-align: center;
  color: #333;
`;

const WorkforceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin-bottom: 22px;

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

interface StyledDivProps {
  ref?: React.RefObject<HTMLDivElement>;
}

const WorkforceCard = styled.div`
  background: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  &.selected {
    border: 2px dashed #E65F46;
    padding: 13px;
  }

  &.more-card {
    justify-content: center;
    padding: 20px 15px;
  }

  @media (max-width: 480px) {
    padding: 12px;
    gap: 8px;

    &.selected {
      padding: 10px;
    }
  }
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  @media (max-width: 480px) {
    width: 32px;
    height: 32px;
  }
`;

const CardText = styled.span`
  font-family: 'Clash Grotesk', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 130%;
  letter-spacing: 0;
  color: #000000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;
const CardTextMore = styled.span`
  font-family: 'Clash Grotesk', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 130%;
  letter-spacing: 0;
  color: #7DAA9B;
  text-align: center;
  text-transform: uppercase;
  background: none;
  -webkit-background-clip: unset;
  -webkit-text-fill-color: unset;
  background-clip: unset;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

const PayrollSection = styled.div`
  background: white;
  padding: 24px;
  border-radius: 15px;
  margin-bottom: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    padding: 20px;
    margin-bottom: 24px;
  }
`;

const PayrollTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #000;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const PayrollImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-top: 20px;
`;

const BookDemoButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background-color: #E65F46;
  color: #FFFFFF;
  font-family: 'Public Sans', sans-serif;
  font-weight: 500;
  font-size: 16px;
  padding: 12px 24px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;

  img {
    width: 20px;
    height: 20px;
    margin-right: -4px;
  }

  &:hover {
    background-color: #E65F46;
  }
`;

const DemoButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FF6B6B;
  color: white;
  padding: 16px 32px;
  border-radius: 10px;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 20px;
  gap: 12px;
  transition: background-color 0.2s, transform 0.2s;

  &:hover {
    background-color: #FF5252;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 14px 28px;
    font-size: 1.1rem;
    margin-top: 16px;
  }
`;

const RequestDemoLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background-color: #E65F46;
  color: #FFFFFF;
  font-family: 'Public Sans', sans-serif;
  font-weight: 500;
  font-size: 16px;
  padding: 12px 24px;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #E65F46;
  }
`;

const Arrow = styled.span`
  font-size: 1.4rem;
  line-height: 1;
`;

interface PopupProps extends StyledDivProps {
  isOpen: boolean;
}

const StyledPopup = styled.div<{ isOpen: boolean }>`
  position: absolute;
  background: white;
  border-radius: 8px;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.08);
  padding: 8px 0;
  min-width: 180px;
  z-index: 1000;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transform: ${props => props.isOpen ? 'translateY(0)' : 'translateY(-10px)'};
  transition: all 0.2s ease-in-out;
  top: calc(100% + 8px);
  left: 0;
`;

const Popup = React.forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement> & { isOpen: boolean }>(
  ({ isOpen, ...props }, ref) => (
    <StyledPopup ref={ref} isOpen={isOpen} {...props} />
  )
);

const PopupItem = styled.div`
  padding: 12px 16px;
  font-family: 'Clash Grotesk', sans-serif;
  font-size: 14px;
  line-height: 130%;
  color: #000000;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #F8F8F8;
  }
`;

const MoreCardWrapper = styled.div`
  position: relative;
`;

const DetailsContainer = styled.div`
  background: white;
  border-radius: 12px;
  padding: 30px;
  margin-top: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
`;

const DetailTitle = styled.h2`
  font-family: 'Clash Grotesk', sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 119%;
  color: #000000;
`;

const ImageContainer = styled.div`
  margin-top: 30px;
  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
`;

const DashBoard = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<string>('Workforce');
  const popupRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current && 
        buttonRef.current &&
        !popupRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsPopupOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const moreOptions = [
    'Core HR',
    'Expense',
    'Engagement',
    'Asset',
    'Helpdesk'
  ];

  const handleOptionClick = (option: string) => {
    console.log(`Selected option: ${option}`);
    setIsPopupOpen(false);
  };

  const handleCardClick = (cardType: string, index: number) => {
    if (index === 5) { // 5+ MORE card
      setIsPopupOpen(!isPopupOpen);
    } else {
      setSelectedCard(cardType);
      setIsPopupOpen(false);
    }
  };

  const cardTypes = [
    'Workforce',
    'Performance',
    'Payroll',
    'Attendance',
    'Recruitment',
  ];

  const renderCardContent = () => {
    switch (selectedCard) {
      case 'Workforce':
        return (
          <DetailsContainer>
            <DetailTitle>
              Simplify Your<br />
              Workforce<br />
              Management
            </DetailTitle>
            <ImageContainer>
              <img 
                src={Workforce_Dashboard}
                alt="Workforce Management Dashboard"
              />
            </ImageContainer>
          </DetailsContainer>
        );
      case 'Performance':
        return (
          <DetailsContainer>
            <DetailTitle>
              Boost Your Team's<br />
              Performance with Ease
            </DetailTitle>
            <ImageContainer>
              <img 
                src={Performance}
                alt="Performance Dashboard"
              />
            </ImageContainer>
          </DetailsContainer>
        );
      case 'Payroll':
        return (
          <DetailsContainer>
            <DetailTitle>
              Take the Stress<br />
              Out of Your Payroll
            </DetailTitle>
            <ImageContainer>
              <img 
                src={Payroll}
                alt="Payroll"
              />
            </ImageContainer>
          </DetailsContainer>
        );
      case 'Attendance':
        return (
          <DetailsContainer>
            <DetailTitle>
              Track Your Team's Attendance,<br />
              Effortlessly
            </DetailTitle>
            <ImageContainer>
              <img 
                src={Attendance}
                alt="Attendance Dashboard"
              />
            </ImageContainer>
          </DetailsContainer>
        );
      case 'Recruitment':
        return (
          <DetailsContainer>
            <DetailTitle>
              Find and Hire Your<br />
              Perfect Team, Faster
            </DetailTitle>
            <ImageContainer>
              <img 
                src={Recruitment}
                alt="Recruitment Dashboard"
              />
            </ImageContainer>
          </DetailsContainer>
        );
      default:
        return null;
    }
  };

  return (
    <Container>
      <Header>
        <Title>Hire to retire?<br />HROne does it all</Title>
        <Subtitle>The only HR solution you'll ever need</Subtitle>
      </Header>

      <WorkforceGrid>
        {cardTypes.map((cardType, index) => (
          <WorkforceCard 
            key={index} 
            className={selectedCard === cardType ? 'selected' : ''}
            onClick={() => handleCardClick(cardType, index)}
          >
            <Icon>
              <img src={Isolation_Mode} alt="Isolation_Mode" />
            </Icon>
            <CardText>{cardType}</CardText>
          </WorkforceCard>
        ))}
        <MoreCardWrapper>
          <WorkforceCard 
            className="more-card" 
            onClick={() => handleCardClick('more', 5)}
            ref={buttonRef}
          >
            <CardTextMore>5+ MORE</CardTextMore>
          </WorkforceCard>
          <Popup isOpen={isPopupOpen} ref={popupRef}>
            {moreOptions.map((option, index) => (
              <PopupItem 
                key={index}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </PopupItem>
            ))}
          </Popup>
        </MoreCardWrapper>
      </WorkforceGrid>

      {renderCardContent()}
    </Container>
  );
};

export default DashBoard; 