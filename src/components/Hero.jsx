import React, { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import { motion } from 'framer-motion';
import 'aos/dist/aos.css';
// Adjusted import path for the video
import heroVideo from '../assets/hero video/hero vedio.mp4';

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const roles = ['UI/UX Designer', 'Web Developer', 'Full Stack Developer'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });

    const video = videoRef.current;
    if (video) {
      // Update playing state based on video events
      const updatePlayingState = () => setIsPlaying(!video.paused);
      const handleVideoEnd = () => setIsPlaying(false);

      video.addEventListener('play', updatePlayingState);
      video.addEventListener('pause', updatePlayingState);
      video.addEventListener('ended', handleVideoEnd);

      return () => {
        video.removeEventListener('play', updatePlayingState);
        video.removeEventListener('pause', updatePlayingState);
        video.removeEventListener('ended', handleVideoEnd);
      };
    }
  }, []);

  // Typing animation that types, pauses, deletes each role — approx 2s total per role
  useEffect(() => {
    const fullText = roles[roleIndex];
    const TYPING_TIME = 1300; // ms for typing
    const DELETING_TIME = 400; // ms for deleting
    const PAUSE_TIME = 1300; // pause after typing (increased by 1000ms)

    const typingInterval = Math.max(20, Math.floor(TYPING_TIME / Math.max(1, fullText.length)));
    const deletingInterval = Math.max(20, Math.floor(DELETING_TIME / Math.max(1, fullText.length)));

    let timer;

    if (!isDeleting && displayText === fullText) {
      // pause before deleting
      timer = setTimeout(() => setIsDeleting(true), PAUSE_TIME);
    } else if (isDeleting && displayText === '') {
      // move to next role after deletion
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    } else {
      timer = setTimeout(() => {
        const currentLength = displayText.length;
        if (isDeleting) {
          setDisplayText(fullText.substring(0, Math.max(0, currentLength - 1)));
        } else {
          setDisplayText(fullText.substring(0, Math.min(fullText.length, currentLength + 1)));
        }
      }, isDeleting ? deletingInterval : typingInterval);
    }

    return () => clearTimeout(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayText, isDeleting, roleIndex]);

  const toggleVideo = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      // Toggle mute when user clicks (to enable sound)
      if (isMuted) {
        setIsMuted(false);
      }
      
      if (videoRef.current.paused) {
        // If video ended, reset to beginning
        if (videoRef.current.ended) {
          videoRef.current.currentTime = 0;
        }
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleScrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative w-screen h-screen overflow-hidden bg-black">
      {/* Background Video */}
      <video
        ref={videoRef}
      
        muted={isMuted}
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        style={{ width: '100%', height: '100%' }}
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for Better Visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-black/5 z-10"></div>

      {/* Content Container */}
      <div className="absolute inset-0 z-20 px-6 pb-20 md:pb-[8%] md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-end md:justify-between items-start md:items-end text-left w-full">
        
        {/* Left Side: Text and Buttons */}
        <div className="flex flex-col items-start text-left max-w-2xl w-full">
          {/* Main Heading */}
          <h1 
            data-aos="fade-up"
            className="text-white text-3xl md:text-6xl font-bold mb-4 tracking-tight drop-shadow-lg"
            style={{
              textShadow: '0 4px 15px rgba(0, 0, 0, 0.8), 0 2px 5px rgba(0, 0, 0, 0.6)'
            }}
          >
            Hi, I'm a <br />
            <span className="inline-block">
              <span className="text-white text-3xl md:text-6xl font-black">
                {displayText}
                <span className="ml-1 text-white animate-pulse">|</span>
              </span>
            </span>
          </h1>

          {/* Subheading */}
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white text-sm md:text-lg font-semibold mb-8 max-w-md"
            style={{
              textShadow: '0 3px 10px rgba(0, 0, 0, 0.9)'
            }}
          >
            B.Tech Student | Passionate about Full-Stack Development | Lifelong Learner | Tech Enthusiast
          </p>

          {/* Buttons */}
          <div 
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-row flex-wrap items-center gap-3 w-full"
          >
            {/* Primary Button */}
            <a 
              href="#projects"
              onClick={(e) => handleScrollToSection(e, '#projects')}
              className="px-6 py-3 md:px-8 md:py-3 text-sm md:text-base rounded-full bg-white text-black font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-block text-center cursor-pointer"
            >
              View My Work
            </a>
            
            {/* Resume Download Button */}
            <a
              href="/Resume.pdf"
              download="Resume.pdf"
              className="px-6 py-3 md:px-8 md:py-3 text-sm md:text-base rounded-full bg-gradient-to-r from-orange-500 to-orange-400 text-white font-bold hover:shadow-[0_20px_50px_rgba(249,115,22,0.35)] transition-all duration-300 transform hover:-translate-y-0.5 inline-block text-center"
              aria-label="Download Resume"
            >
              Download Resume
            </a>

            {/* Secondary Button - Glassmorphism style */}
            <a 
              href="#contact"
              onClick={(e) => handleScrollToSection(e, '#contact')}
              className="px-6 py-3 md:px-8 md:py-3 text-sm md:text-base rounded-full bg-white/15 border border-white/30 text-white font-bold hover:bg-white/30 transition-all duration-300 backdrop-blur-md shadow-lg inline-block text-center cursor-pointer"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Play Reel button (positioned under the Hire Me CTA on wide screens) */}
        <div
          data-aos="zoom-in"
          data-aos-delay="600"
          onClick={toggleVideo}
          className="hidden xl:flex flex-row items-center gap-2 cursor-pointer group absolute right-8 z-30"
          style={{ top: '6.5cm' }}
        >
          <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border-2 border-orange-400 bg-black/70 backdrop-blur-md flex justify-center items-center group-hover:scale-110 group-hover:bg-black/85 transition-all duration-500 shadow-[0_0_30px_rgba(249,115,22,0.4)] group-hover:shadow-[0_0_50px_rgba(249,115,22,0.6)]">
            {!isPlaying || isMuted ? (
              <svg className="w-7 h-7 md:w-10 md:h-10 text-orange-400 ml-1 md:ml-1.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            ) : (
              <svg className="w-7 h-7 md:w-10 md:h-10 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            )}
          </div>
          <span className="text-orange-400 text-xs md:text-sm font-bold tracking-widest uppercase opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-lg">
            {!isPlaying || isMuted ? 'Play Reel' : 'Pause'}
          </span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        data-aos="fade-up"
        data-aos-delay="800"
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="animate-bounce">
          <svg 
            className="w-6 h-6 text-white drop-shadow-lg" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="3" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            style={{
              filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.8))'
            }}
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
