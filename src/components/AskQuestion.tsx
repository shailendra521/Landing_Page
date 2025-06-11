import React, { useState } from 'react';
import styled from 'styled-components';
import AskDropdown from '../assets/AskDropdown.png';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 38px 48px 20px 28px;
  background-color: #FFFFFF;
`;

const Title = styled.div`
  text-align: center;
  margin-bottom: 60px;

  h1, h2 {
    font-family: 'Clash Grotesk', sans-serif;
    font-size: 28px;
    font-weight: 600;
    line-height: 28px;
    letter-spacing: 0;
  }

  h1 {
    color: #272727;
    margin-bottom: 8px;
  }

  h2 {
    color: #00553C;
    // margin-top: -15px;
  }
`;

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 900px;
  margin: 0 auto;
`;

const FAQItem = styled.div`
  border-bottom: 1px solid #609585;
  padding-bottom: 24px;
`;

const Question = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  
  h3 {
    font-family: 'Clash Grotesk', sans-serif;
    font-size: 20px;
    font-weight: 600;
    line-height: 110%;
    letter-spacing: 0;
    color: #535353;
  }
`;

const Icon = styled.div<{ isOpen: boolean }>`
  img {
    transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0)'};
    transition: transform 0.3s ease;
  }
`;

const Answer = styled.div<{ isOpen: boolean }>`
  max-height: ${props => props.isOpen ? '500px' : '0'};
  overflow: hidden;
  transition: max-height 0.3s ease;
  margin-top: ${props => props.isOpen ? '16px' : '0'};
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 130%;
  color: #000000;
  letter-spacing: 0;
  font-family: 'Public Sans', sans-serif;
`;

const AskQuestion = () => {
  const [openQuestions, setOpenQuestions] = useState<{ [key: number]: boolean }>({});

  const questions = [
    {
      question: "What is HRMS?",
      answer: "An HRMS (Human Resource Management System) helps businesses automate HR tasks like payroll, employee onboarding, attendance, performance management, and compliance. It streamlines HR operations, enhances employee experience, and ensures data accuracy."
    },
    {
      question: "What are the key features of HROne- HR & Payroll Software?",
      answer: "HROne is one of the best HRMS software in India, trusted by 2000+ companies. Our platform offers HR payroll software, HR attendance and payroll software, and compliance management, making HR operations seamless for businesses of all sizes. Plus, HROne is rated #2 globally in the Easiest-to-Use HR software category, ensuring a user-friendly experience for HR teams."
    },
    {
      question: "How does HROne benefit organizations?",
      answer: "Yes! HROne provides HR software for startups and small to medium-sized businesses, offering cost-effective and scalable HR solutions tailored to their growth needs."
    },
    {
      question: "Is HROne HRMS suitable for your businesses?",
      answer: "HROne is an intuitive, feature-rich HRIS software that automates complex HR functions, offers seamless integrations, and ensures compliance, making it a top choice among businesses in India."
    },
    {
      question: "Does HROne HRMS offer a mobile app?",
      answer: "Our HR attendance and payroll software automates salary processing, leave tracking, shift scheduling, and statutory compliance, reducing errors and saving time."
    }
  ];

  const toggleQuestion = (index: number) => {
    setOpenQuestions(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <Container>
      <Title>
        <h1>Frequently</h1>
        <h2>Asked Questions</h2>
      </Title>
      
      <FAQList>
        {questions.map((item, index) => (
          <FAQItem key={index}>
            <Question onClick={() => toggleQuestion(index)}>
              <h3>{item.question}</h3>
              <Icon isOpen={openQuestions[index]}>
                <img src={AskDropdown} alt="Dropdown" />
              </Icon>
            </Question>
            <Answer isOpen={openQuestions[index]}>
              {item.answer}
            </Answer>
          </FAQItem>
        ))}
      </FAQList>
    </Container>
  );
};

export default AskQuestion;