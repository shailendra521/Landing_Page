import React, { useState, useEffect, useCallback, useRef } from 'react';
import type { TouchEvent, MouseEvent } from 'react';
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
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedVideo !== null) {
      setCurrentSlide(selectedVideo);
    }
  }, [selectedVideo]);

  const handleSlideChange = useCallback((index: number) => {
    if (isTransitioning) return;
    
    const validIndex = Math.max(0, Math.min(index, testimonials.length - 1));
    
    setIsTransitioning(true);
    setCurrentSlide(validIndex);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, testimonials.length]);

  const handleVideoClick = (index: number) => {
    if (!isDragging) {
      if (selectedVideo === index) {
        onVideoSelect(null);
      } else {
        onVideoSelect(index);
        handleSlideChange(index);
      }
    }
  };

  const handleDragStart = (clientX: number) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(clientX - carouselRef.current.offsetLeft);
    setDragDistance(0);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging || !carouselRef.current) return;
    const x = clientX - carouselRef.current.offsetLeft;
    const distance = (x - startX);
    setDragDistance(distance);
    
    const percentageMoved = (distance / carouselRef.current.offsetWidth) * 100;
    const trackStyle = `translateX(calc(${-currentSlide * 25}% + ${percentageMoved}px))`;
    const track = carouselRef.current.querySelector('[data-carousel-track]') as HTMLElement;
    if (track) {
      track.style.transform = trackStyle;
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    if (Math.abs(dragDistance) > 50) { // Reduced threshold for easier sliding
      const direction = dragDistance > 0 ? -1 : 1;
      const newIndex = currentSlide + direction;
      if (newIndex >= 0 && newIndex < testimonials.length) {
        handleSlideChange(newIndex);
      } else {
        handleSlideChange(currentSlide);
      }
    } else {
      handleSlideChange(currentSlide);
    }
    setDragDistance(0);
  };

  // Mouse event handlers
  const handleMouseDown = (e: MouseEvent) => {
    e.preventDefault();
    handleDragStart(e.pageX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    e.preventDefault();
    handleDragMove(e.pageX);
  };

  // Touch event handlers
  const handleTouchStart = (e: TouchEvent) => {
    handleDragStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    e.preventDefault(); // Prevent scrolling while swiping
    handleDragMove(e.touches[0].clientX);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handleSlideChange(currentSlide - 1);
      } else if (e.key === 'ArrowRight') {
        handleSlideChange(currentSlide + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, handleSlideChange]);

  return (
    <CarouselWrapper>
      <CarouselContainer>
        <CarouselViewport
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleDragEnd}
          onTouchCancel={handleDragEnd}
        >
          <CarouselTrack 
            data-carousel-track
            style={{ 
              transform: `translateX(${-currentSlide * 25}%)`,
              cursor: isDragging ? 'grabbing' : 'grab'
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
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </NavigationDots>
      </CarouselContainer>
    </CarouselWrapper>
  );
};

const CarouselWrapper = styled.div`
  width: 100%;
  overflow: visible;
  position: relative;
  background: transparent;
  padding-top: 30px;
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
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
  touch-action: none;
  -webkit-overflow-scrolling: touch;

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
  will-change: transform;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }

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
  transform-origin: center center;

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