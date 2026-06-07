import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import JavaLogo from '../assets/skills/Java.svg';
import PythonLogo from '../assets/skills/Python.svg';
import CLogo from '../assets/skills/C.svg';
import HTMLLogo from '../assets/skills/HTML.svg';
import CSSLogo from '../assets/skills/CSS.svg';
import JavaScriptLogo from '../assets/skills/JavaScript.svg';
import ReactLogo from '../assets/skills/React.svg';
import NodeLogo from '../assets/skills/NodeJS.svg';
import MongoLogo from '../assets/skills/MongoDB.svg';
import MySQLLogo from '../assets/skills/MySQL.svg';
import GitHubLogo from '../assets/skills/GitHub.svg';
import VSCodeLogo from '../assets/skills/VSCode.svg';

const SkillTile = ({ label, logo }) => {
  return (
    <div className="group flex items-center gap-4 rounded-3xl border-2 border-orange-400 bg-gradient-to-r from-orange-500 to-orange-400 p-4 transition-all duration-300 hover:border-orange-300 hover:from-orange-400 hover:to-orange-300 hover:-translate-y-2 shadow-lg shadow-orange-500/40 hover:shadow-orange-400/60">
      <img src={logo} alt={label} className="w-11 h-11 rounded-2xl bg-white/20 p-2 backdrop-blur-sm" />
      <span className="text-sm font-extrabold text-white tracking-wide">{label}</span>
    </div>
  );
};

const SkillCategory = ({ title, skills, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ scale: 1.02 }}
      className="relative rounded-[2.25rem] border border-orange-400/10 bg-slate-950/90 p-8 shadow-[0_25px_60px_rgba(0,0,0,0.18)] overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-transparent to-orange-500 opacity-60"></div>
      <h3 className="text-2xl font-black text-white mb-8 tracking-tight">{title}</h3>
      <div className="grid grid-cols-1 gap-4">
        {skills.map((skill, i) => (
          <SkillTile key={i} label={skill.label} logo={skill.logo} />
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  const skillData = [
    {
      title: 'Programming Languages',
      skills: [
        { label: 'Java', logo: JavaLogo },
        { label: 'Python', logo: PythonLogo },
        { label: 'C', logo: CLogo }
      ]
    },
    {
      title: 'Frontend Development',
      skills: [
        { label: 'HTML', logo: HTMLLogo },
        { label: 'CSS', logo: CSSLogo },
        { label: 'JavaScript', logo: JavaScriptLogo },
        { label: 'React', logo: ReactLogo }
      ]
    },
    {
      title: 'Backend & Database',
      skills: [
        { label: 'Node.js', logo: NodeLogo },
        { label: 'MongoDB', logo: MongoLogo },
        { label: 'MySQL', logo: MySQLLogo }
      ]
    },
    {
      title: 'Tools & Workflow',
      skills: [
        { label: 'GitHub', logo: GitHubLogo },
        { label: 'VS Code', logo: VSCodeLogo }
      ]
    }
  ];

  return (
    <section 
      id="skills"
      className="bg-[#0e0e12] min-h-screen pt-36 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.12),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.07),_transparent_20%)] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div data-aos="fade-up" className="mb-20 text-center md:text-left">
          <div className="inline-block border border-orange-400/30 rounded-full px-5 py-1.5 text-sm text-orange-400 font-bold mb-6 shadow-sm bg-orange-500/8 tracking-widest uppercase">
            Technical Arsenal
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6 tracking-tight">
            Languages, Frameworks & Tools
          </h2>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl font-medium leading-relaxed">
            A modern full-stack toolkit focused on responsive UI, backend services, database design, and productivity essentials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillData.map((category, idx) => (
            <SkillCategory 
              key={idx}
              title={category.title}
              skills={category.skills}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
