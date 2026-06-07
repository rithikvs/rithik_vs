import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const ref = useRef(null);
  // No email send functionality — display contact details and WhatsApp/call options only

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  // removed email sending functionality

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Parallax translation for the big background text
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "25%"]);

  return (
    <section ref={ref} id="contact" className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex flex-col justify-end pt-36 pb-0 border-t border-gray-900 font-sans">
      {/* Huge Background Text */}
      <motion.div 
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-24"
      >
        <h1 
          className="text-[25vw] leading-[0.75] font-black text-white uppercase tracking-tighter select-none scale-y-[1.6] origin-top"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          Contact
        </h1>
      </motion.div>

      {/* Grid Overlay */}
      <div className="relative z-10 w-full flex justify-center items-start mt-12">
        <div 
          data-aos="fade-up"
          className="bg-[#ff2a2a] w-full max-w-3xl p-8 md:p-12 text-white flex flex-col gap-8 rounded-2xl"
        >
          {/* Left Side: Contact Information & Socials (only content kept) */}
          <div className="w-full flex flex-col justify-between gap-6">
            <div>
              <div className="inline-block bg-white/0 text-white text-xs font-bold tracking-[0.2em] mb-4 uppercase opacity-100 px-3 py-1 rounded-md">
                Contact Info
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">
                Let's start a conversation
              </h2>
              <p className="text-red-100 text-sm md:text-base leading-relaxed font-semibold mb-8">
                Feel free to reach out for project opportunities, internships, research collaborations, or just a quick chat about technology.
              </p>
            </div>
            {/* Direct Cards */}
            <div className="flex flex-col gap-4 w-full">
              {/* Email Card */}
              <a 
                href="mailto:rithikvs08@gmail.com" 
                className="flex items-center gap-4 bg-black/10 hover:bg-black/20 border border-white/10 rounded-2xl p-4 transition-all duration-300 group w-full"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-mono font-bold text-white uppercase tracking-widest">Email</p>
                  <p className="text-sm font-black font-mono break-all text-white">rithikvs08@gmail.com</p>
                </div>
              </a>

              {/* Phone Card */}
              <a 
                href="tel:+917708552461" 
                className="flex items-center gap-4 bg-black/10 hover:bg-black/20 border border-white/10 rounded-2xl p-4 transition-all duration-300 group w-full"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-mono font-bold text-white uppercase tracking-widest">Phone</p>
                  <p className="text-sm font-black font-mono text-white">+91 7708552461</p>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a 
                href="https://wa.me/917708552461?text=Hi%20Rithik%2C%20I%20would%20like%20to%20connect%20with%20you." 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-black/10 hover:bg-black/20 border border-white/10 rounded-2xl p-4 transition-all duration-300 group w-full"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371 0-.57 0-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.898 1.211.987.987 0 00-.412 1.296 9.9 9.9 0 001.408 2.549c.379.564.853 1.084 1.41 1.524l-.002.001c.577.449 1.227.796 1.933 1.016a9.88 9.88 0 001.07.145 9.9 9.9 0 004.898-1.211.987.987 0 00.412-1.296 9.9 9.9 0 00-1.408-2.549.987.987 0 00-.913-.41z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-mono font-bold text-white uppercase tracking-widest">WhatsApp</p>
                  <p className="text-sm font-black font-mono text-white">Send Message</p>
                </div>
              </a>
            </div>

            {/* Social Badges Row */}
            <div className="flex flex-wrap gap-3 pt-4">
              <a 
                href="https://github.com/rithikvs" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-4 py-2 text-xs font-mono font-bold tracking-widest uppercase bg-black hover:bg-white hover:text-black rounded-full transition-all duration-300 shadow-md"
              >
                GitHub
              </a>
              <a 
                href="https://linkedin.com/in/rithikvs" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-4 py-2 text-xs font-mono font-bold tracking-widest uppercase bg-black hover:bg-white hover:text-black rounded-full transition-all duration-300 shadow-md"
              >
                LinkedIn
              </a>
              <a 
                href="https://www.linkedin.com/in/rithik-v-s-519059320/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-4 py-2 text-xs font-mono font-bold tracking-widest uppercase bg-black hover:bg-white hover:text-black rounded-full transition-all duration-300 shadow-md"
              >
                LeetCode
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
