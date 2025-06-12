import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import VideoCarousel from './VideoCarousel';
import HrOneXAH from '../assets/video/Hr One X AH.mp4';
import HroneXDIY from '../assets/video/Hrone x DIY.mp4';
import HroneXLUX from '../assets/video/Hrone x LUX.mp4';
import WowVideo from '../assets/video/WowVideo.mp4';
import AHH from '../assets/AH.webp';
import DIY from '../assets/MrDiv.webp';
import LUX from '../assets/lux-logo.webp';
import WOW from '../assets/WOW.webp';
import WOWThumbnail from '../assets/WOWThunbnail.png';
import LuxThumbnail from '../assets/LuxThumbnails.png';
import AHThumbnail from '../assets/AHThumnail.png';
import MrDIVs from '../assets/MrDIVs.png';


const testimonials = [
  {
    video: HroneXLUX,
    thumbnail: LuxThumbnail,
    companyLogo: LUX,
    quote: 'Lux found an easiest to use HR software to empower everyone',
    speaker: 'Debraj Roy',
    designation: 'Head of HR'
  },
  {
    video: WowVideo,
    thumbnail: WOWThumbnail,
    companyLogo: WOW,
    quote: 'WOW Skin Science found a simple way to manage the employee lifecycle',
    speaker: 'Smriti HR',
    designation: 'VP HR'
  },
  {
    video: HrOneXAH,
    thumbnail: AHThumbnail,
    companyLogo: AHH,
    quote: 'AHH made HR easy, giving their team more time for what matters.',
    speaker: 'Rupali C Rane',
    designation: 'Nova IVF (AHH Group)'
  },
  {
    video: HroneXDIY,
    thumbnail: MrDIVs,
    companyLogo: DIY,
    quote: 'Mr. DIY made HR effortless with automation',
    speaker: 'Yogesh Somani',
    designation: 'AVP & Head HR, MR DIV'
  },
];

const TestimonialsSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        
        if (!isVisible && selectedVideo !== null) {
          setSelectedVideo(null);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedVideo]);

  return (
    <Section ref={sectionRef}>
      <SectionTitle>Straight from Our Customers</SectionTitle>
      <VideoCarousel
        testimonials={testimonials}
        selectedVideo={selectedVideo}
        onVideoSelect={setSelectedVideo}
      />
    </Section>
  );
};

const Section = styled.section`
  // padding: 80px 0;
  background: #FFFFFF;
`;

const SectionTitle = styled.h2`
  // padding-bottom: 30px;
  padding-left: 45px;
  padding-right: 31px;
  padding-top: 42px;
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  color: #000000;
  margin: 0;
  font-family: 'Clash Grotesk', sans-serif;
  line-height: 30px;
  letter-spacing: 0;

  
`;

export default TestimonialsSection; 