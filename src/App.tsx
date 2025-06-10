import React from 'react';
import HeroSection from './components/HeroSection';
import DemoRequestForm from './components/DemoRequestForm';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import DashBoard from './components/DashBoard';
import VideoDashboard from './components/VideoDasboard';
import PricingPlan from './components/PricingPlan';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
  
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
  
  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
`;

function App() {
  return (
    <>
      <GlobalStyle />

     
      {/* <VideoDashboard/> */}

      <PageContainer>
        <HeroSection />
        <DemoRequestForm />
        <DashBoard />
        <PricingPlan/>
      </PageContainer>
    </>
  );
}

export default App;
