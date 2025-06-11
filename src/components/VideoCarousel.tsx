import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import VideoDashboard from './VideoDasboard';

interface Testimonial {
  video: string;
  companyLogo: string;
  quote: string;
  speaker: string;
  designation: string;
}

interface VideoCarouselProps {
  testimonials: Testimonial[];
  selectedVideo: number | null;
  onVideoSelect: (index: number | null) => void;
}

const VideoCarousel: React.FC<VideoCarouselProps> = ({ 
  testimonials,
  selectedVideo,
  onVideoSelect
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (selectedVideo !== null) {
      setCurrentSlide(selectedVideo);
    }
  }, [selectedVideo]);

  const handleSlideChange = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleVideoClick = (index: number) => {
    if (selectedVideo === index) {
      onVideoSelect(null);
    } else {
      onVideoSelect(index);
      handleSlideChange(index);
    }
  };

  return (
    <CarouselWrapper>
      <CarouselContainer>
        <CarouselViewport>
          <CarouselTrack 
            style={{ 
              transform: `translateX(${-currentSlide * 25}%)`
            }}
          >
            {testimonials.map((testimonial, index) => (
              <CarouselSlide 
                key={index}
                $isSelected={selectedVideo === index}
                $hasSelectedVideo={selectedVideo !== null}
                onClick={() => handleVideoClick(index)}
              >
                <VideoDashboard {...testimonial} isExpanded={selectedVideo === index} />
              </CarouselSlide>
            ))}
          </CarouselTrack>
        </CarouselViewport>

        <NavigationDots>
          {testimonials.map((_, index) => (
            <Dot
              key={index}
              $active={index === currentSlide}
              onClick={() => handleSlideChange(index)}
              disabled={isTransitioning}
            />
          ))}
        </NavigationDots>
      </CarouselContainer>
    </CarouselWrapper>
  );
};

const CarouselWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  background: transparent;
`;

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 40px 0;
  overflow: hidden;
  background: transparent;

  @media (max-width: 1024px) {
    padding: 30px 0;
  }

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;

const CarouselViewport = styled.div`
  overflow: visible;
  margin: 0;
  position: relative;
  box-sizing: border-box;
  width: 85%;
  margin: 0 auto;
  background: transparent;

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    width: 75%;
  }
`;

const CarouselTrack = styled.div`
  display: flex;
  width: 400%;
  transition: transform 0.5s ease-in-out;
  align-items: stretch;
  min-height: 320px;
  margin: 0 -10%;

  @media (max-width: 1024px) {
    min-height: 280px;
    margin: 0 -5%;
  }

  @media (max-width: 768px) {
    min-height: 240px;
    margin: 0;
  }

  @media (max-width: 480px) {
    min-height: 200px;
  }
`;

const CarouselSlide = styled.div<{ $isSelected: boolean; $hasSelectedVideo: boolean }>`
  width: 25%;
  flex-shrink: 0;
  transition: all 0.5s ease;
  cursor: pointer;
  opacity: ${props => props.$hasSelectedVideo ? (props.$isSelected ? 1 : 0.6) : 1};
  display: flex;
  flex-direction: column;
  position: relative;
  height: auto;
  padding: 0 10px;
  margin-bottom: ${props => props.$isSelected ? '40px' : '0'};

  transform: ${props => {
    if (props.$hasSelectedVideo) {
      return props.$isSelected ? 'scale(1.05)' : 'scale(0.9)';
    }
    return 'scale(1)';
  }};
  z-index: ${props => props.$isSelected ? 2 : 1};

  &:hover {
    transform: ${props => {
      if (props.$hasSelectedVideo) {
        return props.$isSelected ? 'scale(1.05)' : 'scale(0.92)';
      }
      return 'scale(1.02)';
    }};
    opacity: ${props => props.$hasSelectedVideo && !props.$isSelected ? 0.75 : 1};
  }

  @media (max-width: 1024px) {
    padding: 0 6px;
  }

  @media (max-width: 768px) {
    padding: 0 3px;
  }

  @media (max-width: 480px) {
    padding: 0 2px;
  }
`;

const NavigationDots = styled.div`
  margin: 20px 0 0;
  display: flex;
  justify-content: center;
  gap: 10px;
  position: relative;
  z-index: 3;
  padding: 0 20px;

  @media (max-width: 768px) {
    gap: 6px;
  }

  @media (max-width: 480px) {
    gap: 4px;
  }
`;

const Dot = styled.button<{ $active: boolean }>`
  width: ${props => props.$active ? '32px' : '8px'};
  height: 8px;
  border-radius: ${props => props.$active ? '4px' : '50%'};
  border: ${props => props.$active ? 'none' : '1px solid #6B6B6B'};
  background-color: ${props => props.$active ? '#0F766E' : 'transparent'};
  cursor: pointer;
  padding: 0;
  transition: all 0.3s ease;
  opacity: ${props => props.$active ? 1 : 1};

  @media (max-width: 768px) {
    width: ${props => props.$active ? '28px' : '7px'};
    height: 7px;
  }

  @media (max-width: 480px) {
    width: ${props => props.$active ? '24px' : '6px'};
    height: 6px;
  }

  &:hover {
    opacity: ${props => props.$active ? 1 : 0.8};
    background-color: ${props => props.$active ? '#0F766E' : 'transparent'};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }
`;

export default VideoCarousel; 