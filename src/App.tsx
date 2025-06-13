import { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import DemoRequestForm from './components/DemoRequestForm';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import DashBoard from './components/DashBoard';
// import VideoDashboard from './components/VideoDasboard';
import PricingPlan from './components/PricingPlan';
import AskQuestion from './components/AskQuestion';
import Footer from './components/Footer';
import TestimonialsSection from './components/TestimonialsSection';
import ArrowIconsMain from './assets/ArrowIconsMain.png';

const GlobalStyle = createGlobalStyle`
  @import url('https://api.fontshare.com/v2/css?f[]=clash-grotesk@200,300,400,500,600,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Clash Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
`;

const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  scroll-behavior: smooth;
  padding-bottom: 70px; /* Add padding to prevent content from being hidden behind the fixed button */
  
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
  
  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
`;

const StaticDemoButtonContainer = styled.div<{ isVisible: boolean }>`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: white;
  padding: 10px 13px 10px 13px;
  box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transition: opacity 0.3s ease, transform 0.3s ease;
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: translateY(${props => props.isVisible ? '0' : '100%'});
  pointer-events: ${props => props.isVisible ? 'auto' : 'none'};
`;

const StaticDemoButton = styled.button`
  width: 100%;
  padding: 16px;
  background-color: #E65F46;
  color: white;
  border: none;
  border-radius: 8px;
  font-family: 'Clash Grotesk', sans-serif;
  font-weight: 600;
  font-size: 23.67px;
  line-height: 100%;
  letter-spacing: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const AnimatedArrow = styled.img`
  width: 24.61px;
  height: 19.14px;
  animation: leftRight 1s infinite alternate cubic-bezier(0.4, 0, 0.2, 1);

  @keyframes leftRight {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(12px);
    }
  }
`;

function App() {
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // When DemoRequestForm is visible, hide the button
        // When DemoRequestForm is not visible, show the button
        entries.forEach(entry => {
          setIsButtonVisible(!entry.isIntersecting);
        });
      },
      {
        // Adjust threshold as needed - 0.1 means when 10% of the form is visible
        threshold: 0.1
      }
    );

    const demoForm = document.querySelector('#demo-form');
    if (demoForm) {
      observer.observe(demoForm);
    }

    return () => {
      if (demoForm) {
        observer.unobserve(demoForm);
      }
    };
  }, []);

  const handleDemoClick = () => {
    // Scroll to DemoRequestForm section
    const demoForm = document.querySelector('#demo-form');
    if (demoForm) {
      demoForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <GlobalStyle />
      <PageContainer>
        <HeroSection />
        <div id="demo-form">
          <DemoRequestForm />
        </div>
        <DashBoard />
        <TestimonialsSection/>
        <PricingPlan/>
        <AskQuestion/>
        <Footer/>
        <StaticDemoButtonContainer isVisible={isButtonVisible}>
          <StaticDemoButton onClick={handleDemoClick}>
            <AnimatedArrow src={ArrowIconsMain} alt="Arrow Icons" />
            Request a Free Demo!
          </StaticDemoButton>
        </StaticDemoButtonContainer>
      </PageContainer>
    </>
  );
}

export default App;
