import React, { useState } from 'react';
import styled from 'styled-components';

interface VideoData {
  id: number;
  thumbnail: string;
  videoUrl: string;
  companyName: string;
  speakerName: string;
  designation: string;
  quote: string;
}

const VideoDashboard = () => {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  const testimonials: VideoData[] = [
    {
      id: 1,
      thumbnail: "/testimonial1.jpg",
      videoUrl: "/video1.mp4",
      companyName: "WOW SKIN SCIENCE",
      speakerName: "Smriti Khanna",
      designation: "VP HR",
      quote: "WOW Skin Science found a simple way to manage the employee lifecycle"
    },
    // Add more testimonial data here
  ];

  const handleVideoClick = (id: number) => {
    setActiveVideo(activeVideo === id ? null : id);
  };

  return (
    <DashboardContainer>
      <Title>Straight from Our Customers</Title>
      <VideoGrid>
        {testimonials.map((testimonial) => (
          <VideoCard 
            key={testimonial.id}
            isActive={activeVideo === testimonial.id}
            onClick={() => handleVideoClick(testimonial.id)}
          >
            <VideoContainer>
              {activeVideo === testimonial.id ? (
                <video 
                  controls 
                  autoPlay 
                  src={testimonial.videoUrl}
                  width="100%"
                  height="100%"
                />
              ) : (
                <>
                  <Thumbnail src={testimonial.thumbnail} alt={testimonial.companyName} />
                  <PlayButton>
                    <PlayIcon>▶</PlayIcon>
                  </PlayButton>
                </>
              )}
            </VideoContainer>
            <CompanyLogo>{testimonial.companyName}</CompanyLogo>
            <TestimonialQuote>"{testimonial.quote}"</TestimonialQuote>
            <SpeakerInfo>
              <SpeakerName>{testimonial.speakerName}</SpeakerName>
              <SpeakerDesignation>{testimonial.designation}</SpeakerDesignation>
            </SpeakerInfo>
          </VideoCard>
        ))}
      </VideoGrid>
      <DemoButton>
        <ArrowIcon>→</ArrowIcon> Request a Free Demo!
      </DemoButton>
    </DashboardContainer>
  );
};

const DashboardContainer = styled.div`
  padding-top: 42px;
  padding-left: 45px;
  padding-right: 31px;
  padding-bottom: 27px;
  max-width: 1200px;
  margin: 0 auto;
  background: #FFFFFF;
`;

const Title = styled.h2`
 font-family: 'Clash Grotesk', sans-serif;
  font-size: 30px;
  font-weight: 600;
  line-height: 130%;
  letter-spacing: 0;
  text-align: center;
  margin-bottom: 3rem;
`;

const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const VideoCard = styled.div<{ isActive: boolean }>`
  background: #FFFFFF;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  height: ${props => props.isActive ? '500px' : '400px'};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
`;

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 60%;
  background: #f5f5f5;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PlayButton = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  width: 50px;
  height: 50px;
  background: #4CAF50;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PlayIcon = styled.span`
  color: white;
  font-size: 24px;
`;

const CompanyLogo = styled.div`
  padding: 1rem;
  font-weight: bold;
  color: #333;
`;

const TestimonialQuote = styled.p`
  padding: 0 1rem;
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 1rem;
`;

const SpeakerInfo = styled.div`
  padding: 0 1rem 1rem;
`;

const SpeakerName = styled.h4`
  margin: 0;
  color: #333;
  font-weight: bold;
`;

const SpeakerDesignation = styled.p`
  margin: 0.25rem 0 0;
  color: #666;
`;

const DemoButton = styled.button`
  display: block;
  margin: 0 auto;
  padding: 1rem 2rem;
  font-size: 1.25rem;
  background: #E75D51;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background 0.3s ease;

  &:hover {
    background: #d54d41;
  }
`;

const ArrowIcon = styled.span`
  font-size: 1.5rem;
`;

export default VideoDashboard;