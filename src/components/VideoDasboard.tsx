import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import playicon from '../assets/playicon.png';

interface VideoDashboardProps {
  video?: string;
  thumbnail?: string;
  companyLogo?: string;
  quote?: string;
  speaker?: string;
  designation?: string;
  isExpanded?: boolean;
}

const DashboardContainer = styled.div<{ $isExpanded?: boolean }>`
  width: 270px;
  margin: 0 auto;
  transition: all 0.3s ease;
  transform: ${props => props.$isExpanded ? 'scale(1.1)' : 'scale(1)'};
  transform-origin: center center;
  padding-top: 20px;

  @media (max-width: 360px) {
    width: 250px;
    padding-top: 15px;
  }
  @media (max-width: 375px) {
    width: 240px;
    padding-top: 15px;
  }
`;

const VideoCard = styled.div<{ $isExpanded?: boolean }>`
  position: relative;
  border-radius: 28px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 15px 30px -10px #31313159;
  transition: all 0.3s ease;
  cursor: pointer;
  aspect-ratio: 9/16;
  transform-origin: center center;

  &:hover {
    transform: ${props => props.$isExpanded ? 'none' : 'translateY(-4px)'};
  }
`;

const VideoContainer = styled.div<{ $isExpanded?: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  background: #000;
  overflow: hidden;
  transition: all 0.3s ease;
`;

const VideoBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  video, img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const ContentOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40%;
  background: rgba(49, 49, 49, 0.35);
  backdrop-filter: blur(3.5681793689727783px);
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 16px;
`;

const PlayButtonOverlay = styled.div<{ isPlaying: boolean }>`
  position: absolute;
  top: 61%;
  left: 81%;
  transform: translate(-50%, -50%);
  z-index: 3;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  cursor: pointer;
  opacity: ${props => props.isPlaying ? '0' : '1'};
  
  &:hover {
    transform: translate(-50%, -50%) scale(1.1);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const VideoOverlay = styled.div<{ $isPlaying: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: ${props => props.$isPlaying ? 'transparent' : 'rgba(49, 49, 49, 0.1)'};
  transition: background 0.3s ease;
  cursor: pointer;
`;

const CompanyLogo = styled.img`
  width: 52.61px;
  height: 29.44px;
  margin-bottom: 8px;
  filter: brightness(0) invert(1);
  object-fit: contain;
  opacity: 0.9;
`;

const TestimonialQuote = styled.p`
  font-family: 'Public Sans', sans-serif;
  font-size: 14.27px;
  font-weight: 600;
  line-height: 101%;
  letter-spacing: 0;
  color: white;
  margin: 12px 0;
  font-style: italic;
`;

const SpeakerInfo = styled.div`
  margin-top: 8px;
`;

const SpeakerName = styled.h4`
  font-size: 16px;
  font-weight: 500;
  color: white;
  margin: 0;
  font-family: 'Public Sans', sans-serif;
  line-height: 120%;
`;

const SpeakerDesignation = styled.p`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.9);
  margin: 2px 0 0;
  font-family: 'Public Sans', sans-serif;
  line-height: 120%;
  font-weight: 400;
`;

const HandCursor = styled.div`
  position: absolute;
  bottom: 16px;
  right: 16px;
  z-index: 4;
  width: 48px;
  height: 48px;
  background: url('/images/hand-cursor.png') no-repeat center;
  background-size: contain;
  pointer-events: none;
  animation: float 2s ease-in-out infinite;

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
`;

const VideoDashboard: React.FC<VideoDashboardProps> = ({
  video = '',
  thumbnail = '',
  companyLogo = '',
  quote = '',
  speaker = '',
  designation = '',
  isExpanded = false
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!isExpanded && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
      setShowPlayButton(true);
    }
  }, [isExpanded]);

  useEffect(() => {
    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
        setIsPlaying(false);
        setShowPlayButton(true);
      }
    };
  }, []);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setShowPlayButton(true);
      } else {
        videoRef.current.play();
        setShowPlayButton(false);
        setTimeout(() => setShowPlayButton(false), 1500);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoClick = () => {
    setShowPlayButton(true);
    handlePlayPause();
  };

  return (
    <DashboardContainer $isExpanded={isExpanded}>
      <VideoCard $isExpanded={isExpanded}>
        <VideoContainer $isExpanded={isExpanded}>
          <VideoBackground>
            {!isPlaying && thumbnail && (
              <img src={thumbnail} alt="Video thumbnail" />
            )}
            <video 
              ref={videoRef}
              src={video}
              loop
              playsInline
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                display: isPlaying ? 'block' : 'none'
              }}
            />
          </VideoBackground>
          <VideoOverlay 
            $isPlaying={isPlaying}
            onClick={handleVideoClick}
          />
          <ContentOverlay>
            <CompanyLogo src={companyLogo} alt="Company Logo" />
            <TestimonialQuote>"{quote}"</TestimonialQuote>
            <SpeakerInfo>
              <SpeakerName>{speaker}</SpeakerName>
              <SpeakerDesignation>{designation}</SpeakerDesignation>
            </SpeakerInfo>
          </ContentOverlay>
          {showPlayButton && (
            <PlayButtonOverlay onClick={handlePlayPause} isPlaying={isPlaying}>
              <img src={playicon} alt="Play" />
            </PlayButtonOverlay>
          )}
          {!isExpanded && <HandCursor />}
        </VideoContainer>
      </VideoCard>
    </DashboardContainer>
  );
};

export default VideoDashboard;