import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import HrOneXAH from '../assets/video/Hr One X AH.mp4';
import playicon from '../assets/playicon.png';

interface VideoDashboardProps {
  video?: string;
  companyLogo?: string;
  quote?: string;
  speaker?: string;
  designation?: string;
  isExpanded?: boolean;
}

const DashboardContainer = styled.div<{ $isExpanded?: boolean }>`
  width: 235.5px;
  margin: 0 auto;
  transition: all 0.3s ease;
  transform: ${props => props.$isExpanded ? 'scale(1.1)' : 'scale(1)'};
  transform-origin: center center;
  padding-top: 20px;
`;

const VideoCard = styled.div<{ $isExpanded?: boolean }>`
  position: relative;
  border-radius: 32px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
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

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const ContentOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 45%, rgba(0,0,0,0.6) 65%, rgba(0,0,0,0.8) 100%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
`;

const PlayButtonOverlay = styled.div<{ isPlaying: boolean }>`
  position: absolute;
  top: 57%;
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
  background: ${props => props.$isPlaying ? 'transparent' : 'rgba(0, 0, 0, 0.2)'};
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
  video = HrOneXAH,
  companyLogo = '/logos/wow-logo.svg',
  quote = 'WOW Skin Science found a simple way to manage the employee lifecycle',
  speaker = 'Smriti Khanna',
  designation = 'VP HR',
  isExpanded = false
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Stop video when component unmounts or when isExpanded becomes false
  useEffect(() => {
    if (!isExpanded && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
      setShowPlayButton(true);
    }
  }, [isExpanded]);

  // Stop video when component unmounts
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
        // Hide play button after 1.5 seconds
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
            <video 
              ref={videoRef}
              src={video}
              loop
              playsInline
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
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