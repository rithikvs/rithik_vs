import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const EducationCard = ({ number, title, institution, details, year, className, aosDelay, aosType, pathLength, containerRef }) => {
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useMotionValueEvent(pathLength, "change", (latest) => {
    if (!ref.current || !containerRef.current) return;
    
    const cardRect = ref.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    
    const cardTopRelativeToContainer = cardRect.top - containerRect.top;
    const containerHeight = containerRect.height;
    
    // Trigger when the line tip is 50px into the card
    const triggerY = cardTopRelativeToContainer + 50;
    const lineTipY = latest * containerHeight;
    
    if (lineTipY >= triggerY && !isActive) {
      setIsActive(true);
    } else if (lineTipY < triggerY && isActive) {
      setIsActive(false);
    }
  });

  return (
    <div 
      ref={ref}
      data-aos={aosType || "fade-up"} 
      data-aos-delay={aosDelay}
      className={`w-72 sm:w-85 rounded-[2rem] p-2 relative flex flex-col items-center hover:scale-[1.02] transition-all duration-700 z-10 ${className} ${
        isActive ? 'bg-orange-500 border-orange-400 shadow-[0_20px_50px_rgba(249,115,22,0.4)]' : 'bg-white border border-gray-200 shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]'
      }`}
    >
      {/* The hole punch */}
      <div className="w-5 h-5 bg-gradient-to-br from-gray-300 to-gray-100 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] absolute top-4 border border-gray-300 z-10 flex items-center justify-center">
        <div className="w-2 h-2 bg-gray-800 rounded-full opacity-20"></div>
      </div>
      
      {/* Inner container */}
      <div className={`w-full h-full rounded-[1.5rem] mt-8 p-8 flex flex-col min-h-[240px] transition-colors duration-700 ${
        isActive ? 'bg-orange-600/50' : 'bg-[#f4f4f4]'
      }`}>
        <span className={`text-xl font-bold mb-2 font-serif italic transition-colors duration-700 ${
          isActive ? 'text-orange-100' : 'text-gray-400'
        }`}>{number}</span>
        
        <h3 className={`text-2xl font-black mb-1 tracking-tight transition-colors duration-700 ${
          isActive ? 'text-white' : 'text-gray-900'
        }`}>{title}</h3>
        
        <h4 className={`text-sm font-extrabold mb-3 uppercase tracking-wider transition-colors duration-700 ${
          isActive ? 'text-orange-200' : 'text-orange-600'
        }`}>{institution}</h4>

        <div className={`text-base font-bold mb-4 transition-colors duration-700 ${
          isActive ? 'text-white' : 'text-gray-800'
        }`}>
          {details}
        </div>

        <p className={`text-xs mt-auto font-mono tracking-widest uppercase transition-colors duration-700 ${
          isActive ? 'text-orange-100' : 'text-gray-500'
        }`}>
          {year}
        </p>
      </div>
    </div>
  );
};

const Education = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end 200px"]
  });

  const pathLength = useSpring(scrollYProgress, { stiffness: 60, damping: 20, restDelta: 0.001 });

  return (
    <section 
      id="education"
      ref={containerRef}
      className="bg-white pt-36 pb-32 px-6 md:px-12 w-full relative overflow-visible font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      <div className="max-w-6xl mx-auto relative md:h-[1100px]">
        
        {/* Header Content */}
        <div data-aos="fade-up" className="md:absolute top-10 left-0 md:w-[450px] z-20 mb-16 md:mb-0">
          <div className="inline-block border border-orange-300 rounded-full px-5 py-1.5 text-sm text-orange-600 font-bold mb-8 shadow-sm bg-orange-50">
            Academic Background
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tight relative">
            Education Timeline
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-sm font-medium leading-relaxed">
            A solid grounding in Information Technology, engineering principles, and core computing foundations.
          </p>
        </div>

        {/* Desktop SVG Animated Dashed Line - Extended to next page */}
        <svg 
          className="hidden md:block absolute top-0 left-0 w-full pointer-events-none z-0" 
          style={{ height: 'calc(100% + 400px)' }}
          viewBox="0 0 1000 1500" 
          preserveAspectRatio="none"
        >
          <path 
            d="M 650,150 C 400,250 200,350 300,550 C 400,750 750,700 700,900 C 650,1000 550,1050 450,1070 L 450,1450" 
            fill="none" 
            stroke="#cbd5e1" 
            strokeWidth="2" 
            strokeDasharray="8 10" 
          />

          <mask id="path-mask-education">
            <motion.path 
              d="M 650,150 C 400,250 200,350 300,550 C 400,750 750,700 700,900 C 650,1000 550,1050 450,1070 L 450,1450" 
              fill="none" 
              stroke="white" 
              strokeWidth="20" 
              style={{ pathLength }}
            />
          </mask>

          <path 
            d="M 650,150 C 400,250 200,350 300,550 C 400,750 750,700 700,900 C 650,1000 550,1050 450,1070 L 450,1450" 
            fill="none" 
            stroke="#f97316" 
            strokeWidth="2" 
            strokeDasharray="8 10" 
            mask="url(#path-mask-education)"
            className="drop-shadow-sm"
          />
        </svg>

        {/* Mobile Animated Vertical Dashed Line - Extended */}
        <svg 
          className="md:hidden absolute top-0 left-[50%] -translate-x-1/2 w-4 pointer-events-none z-0" 
          style={{ height: 'calc(100% + 400px)' }}
          viewBox="0 0 4 150" 
          preserveAspectRatio="none"
        >
          <path 
            d="M 2,0 L 2,150" 
            fill="none" 
            stroke="#cbd5e1" 
            strokeWidth="4" 
            strokeDasharray="4 6" 
            vectorEffect="non-scaling-stroke"
          />
          <mask id="path-mask-mobile-education">
            <motion.path 
              d="M 2,0 L 2,150" 
              fill="none" 
              stroke="white" 
              strokeWidth="4" 
              style={{ pathLength }}
              vectorEffect="non-scaling-stroke"
            />
          </mask>
          <path 
            d="M 2,0 L 2,150" 
            fill="none" 
            stroke="#f97316" 
            strokeWidth="4" 
            strokeDasharray="4 6" 
            mask="url(#path-mask-mobile-education)"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* Cards Container */}
        <div className="flex flex-col gap-8 md:gap-12 items-center md:block relative z-10 w-full pt-4 md:pt-0 pb-12 md:pb-0">
          
          <EducationCard 
            number="01"
            title="Bachelor of Technology"
            institution="Kongu Engineering College, Erode"
            details="Information Technology | CGPA: 7.90"
            year="2023 – 2027"
            className="md:absolute md:top-[20px] md:right-[5%] lg:right-[10%] rotate-2 md:rotate-6"
            aosType="fade-left"
            aosDelay="100"
            pathLength={pathLength}
            containerRef={containerRef}
          />

          <EducationCard 
            number="02"
            title="Higher Secondary Education"
            institution="Bharani Vidhyalaya Senior Secondary School"
            details="Percentage: 71.2%"
            year="2022 – 2023"
            className="md:absolute md:top-[420px] md:left-[5%] lg:left-[10%] -rotate-2 md:-rotate-6"
            aosType="fade-right"
            aosDelay="200"
            pathLength={pathLength}
            containerRef={containerRef}
          />

          <EducationCard 
            number="03"
            title="Secondary Education"
            institution="Bharani Vidhyalaya Senior Secondary School"
            details="Percentage: 80.4%"
            year="2019 – 2020"
            className="md:absolute md:top-[750px] md:right-[5%] lg:right-[15%] rotate-1 md:rotate-3"
            aosType="fade-left"
            aosDelay="300"
            pathLength={pathLength}
            containerRef={containerRef}
          />

          {/* Hand-drawn end text */}
          

        </div>
      </div>
    </section>
  );
};

export default Education;

