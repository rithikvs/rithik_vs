import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Paper1 from '../assets/achievements/throb image.jpg';
import Paper2 from '../assets/achievements/bannari image.png';
import Paper3 from '../assets/achievements/sigin image.png';
import Paper4 from '../assets/achievements/kgisl image.png';
import Hackathon1 from '../assets/achievements/bytes image.png';
import Hackathon2 from '../assets/achievements/hackatronics image.jpg';
import Hackathon3 from '../assets/achievements/ibm image.jpg';
import Hackathon4 from '../assets/achievements/iit madras.png';
import CertificateBadge from '../assets/achievements/certificate.svg';

const AchievementCard = ({ title, subtitle, event, institution, year, image, index, type, place, badgePosition = 'left' }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 1, 0.5, 1] }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-white border border-orange-200 rounded-[2rem] p-4 md:p-6 shadow-[0_25px_60px_rgba(0,0,0,0.08)] hover:shadow-[0_30px_75px_rgba(249,115,22,0.2)] transition-all duration-300 relative overflow-hidden"
    >
      <div className="relative rounded-[1.75rem] overflow-hidden bg-slate-900">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between mb-3 gap-4">
          <p className="text-xs uppercase tracking-[0.35em] text-orange-600 font-bold">{event}</p>
          <img src={CertificateBadge} alt="Certificate badge" className="w-12 h-12" />
        </div>

        <h3 className="text-2xl md:text-3xl font-black text-slate-950 mb-3 tracking-tight">
          {title}
        </h3>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-4">
          {subtitle}
        </p>

        <div className="grid grid-cols-2 gap-3 mt-4 text-xs uppercase tracking-[0.22em] text-slate-500 font-semibold">
          <span className="rounded-2xl bg-slate-100 px-3 py-2">{institution}</span>
          <span className="rounded-2xl bg-orange-50 text-orange-700 px-3 py-2">{year}</span>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {place && (
            <span className="px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-600 text-white text-sm font-black uppercase tracking-[0.25em] shadow-lg shadow-emerald-500/30 animate-pulse">
              🏆 {place}
            </span>
          )}
          <span className="px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 text-white text-xs font-bold uppercase tracking-[0.2em] shadow-md">
            {type}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const Achievements = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  const categories = [
    {
      id: 'paper',
      title: 'Paper Presentations',
      items: [
        {
          title: 'AI-Driven Adaptive NPC Personalities in Video Games',
          subtitle: 'Presented AI-driven adaptive NPC personalities for enhanced game realism and player immersion.',
          event: 'INFREIX24',
          institution: 'Bannari Amman Institute of Technology – INFREIX24',
          year: '6th NOVEMBER 2024',
          image: Paper2,
          type: 'Presentation',
          place: '1st Prize'
        },
        {
          
          title: 'Land connect',
          subtitle: 'Presented a land connectivity solution for agricultural and real estate applications.',
          event: 'Sigin 2024',
          institution: 'Kongu Engineering College – Sigin 2024',
          year: '1.10.2024',
          image: Paper3,
          type: 'Presentation',
          place: '2nd Prize'
        },
        {
          title: 'A real-time Indian language communication assistant for the Deaf and hard of hearing',
          subtitle: 'Developed a real-time communication assistant for Indian sign language translation.',
          event: 'THROB 2025',
          institution: 'Kongu Engineering College – THROB 2025',
          year: '2025',
          image: Paper1,
          type: 'Presentation',
          place: '1st Prize',
          badgePosition: 'right'
        },
        {
          title: 'AI-Powered Chatbots: Enhancing Customer Experience',
          subtitle: 'Presented research on AI chatbots for improving customer service experiences.',
          event: 'KGISL College Coimbatore',
          institution: 'KGISL college coimbatore',
          year: '25th oct 2024',
          image: Paper4,
          type: 'Presentation',
          place: 'Participated'
        }
      ]
    },
    {
      id: 'hackathon',
      title: 'Hackathons',
      items: [
        {
          title: 'BYTS India Hackathon (BIH) 1.0',
          subtitle: 'Participated in BYTS India Hackathon powered by Nunnari Labs.',
          event: 'BIH 1.0',
          institution: 'BYTS India and powered by Nunnari Labs',
          year: 'April 11&12 2025',
          image: Hackathon1,
          type: 'Hackathon',
          place: 'Finalist'
        },
        {
          title: 'HACKATRONICS',
          subtitle: 'Competed in the Mechatronics department hackathon at Kongu Engineering College.',
          event: 'HACKATRONICS',
          institution: 'Mechatronics department Kongu Engineering College',
          year: 'September 26th,27th 2025',
          image: Hackathon2,
          type: 'Hackathon',
          place: '7th Place'
        },
        {
          title: 'IBM Skills',
          subtitle: 'Demonstrated skills in IBM technologies at the NASCOM Foundation event.',
          event: 'IBM Skills Challenge',
          institution: 'nascom foundation',
          year: 'September 16th,17th 2025',
          image: Hackathon3,
          type: 'Hackathon',
          place: 'TOP 20'
        },
        {
          title: '2nd AI/ML CHALLENGE (online)',
          subtitle: 'Participated in the online AI/ML challenge organized by IIT Madras.',
          event: 'AI/ML Challenge',
          institution: 'IIT MADRAS',
          year: '2023',
          image: Hackathon4,
          type: 'Hackathon',
          place: 'Participated'
        }
      ]
    }
  ];

  // Filter achievements based on active filter
  const displayedCategories = activeFilter === 'all' 
    ? categories 
    : categories.filter(cat => cat.id === activeFilter);

  return (
    <section 
      id="achievements"
      className="bg-white min-h-screen pt-36 pb-28 px-6 md:px-12 w-full relative overflow-hidden font-sans"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.08),_transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(249,115,22,0.04),_transparent_20%)] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div data-aos="fade-up" className="mb-16 text-center md:text-left">
          <div className="inline-block border border-orange-400/30 rounded-full px-5 py-1.5 text-sm text-orange-600 font-bold mb-6 shadow-sm bg-orange-50 tracking-widest uppercase">
            Recognitions
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-950 leading-tight mb-4 tracking-tight">
            Paper Presentations & Hackathon Wins
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl font-medium leading-relaxed">
            Professional showcase of technical work, awards, and certificates with event visuals for both presentations and hackathons.
          </p>
        </div>

        {/* Filter Buttons */}
        <div data-aos="fade-up" className="flex flex-wrap gap-4 mb-12 justify-center md:justify-start">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-6 py-3 rounded-full font-bold text-base uppercase tracking-[0.15em] transition-all duration-300 ${
              activeFilter === 'all'
                ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
                : 'bg-gray-100 text-slate-700 hover:bg-gray-200'
            }`}
          >
            All Achievements
          </button>
          <button
            onClick={() => setActiveFilter('paper')}
            className={`px-6 py-3 rounded-full font-bold text-base uppercase tracking-[0.15em] transition-all duration-300 ${
              activeFilter === 'paper'
                ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
                : 'bg-gray-100 text-slate-700 hover:bg-gray-200'
            }`}
          >
            Paper Presentations
          </button>
          <button
            onClick={() => setActiveFilter('hackathon')}
            className={`px-6 py-3 rounded-full font-bold text-base uppercase tracking-[0.15em] transition-all duration-300 ${
              activeFilter === 'hackathon'
                ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
                : 'bg-gray-100 text-slate-700 hover:bg-gray-200'
            }`}
          >
            Hackathons
          </button>
        </div>

        <div className="space-y-16">
          {displayedCategories.map((category, idx) => (
            <motion.div 
              key={idx} 
              className="space-y-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-between gap-6">
                <h3 className="text-2xl md:text-3xl font-black text-slate-950 tracking-tight">
                  {category.title}
                </h3>
                <span className="inline-flex items-center rounded-full bg-orange-100 border border-orange-300 text-orange-700 px-4 py-2 text-xs uppercase tracking-[0.2em] font-semibold">
                  {category.items.length} entries
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.items.map((item, cardIndex) => (
                  <AchievementCard
                    key={item.title}
                    title={item.title}
                    subtitle={item.subtitle}
                    event={item.event}
                    institution={item.institution}
                    year={item.year}
                    image={item.image}
                    type={item.type}
                    index={cardIndex}
                    place={item.place}
                    badgePosition={item.badgePosition}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
