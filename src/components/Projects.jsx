import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProjectCard = ({ title, description, tags, github, live, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: [0.25, 1, 0.5, 1] }}
      className="bg-white border border-gray-200 rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between shadow-[0_15px_45px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)] hover:border-orange-500/20 transition-all duration-500 relative group overflow-hidden min-h-[360px]"
    >
      {/* Decorative orange colored bar */}
      <div className="absolute top-0 left-0 w-3 h-full bg-orange-500 transform origin-left scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>

      <div>
        <div className="flex justify-between items-start mb-6">
          <span className="text-sm font-mono text-orange-600 font-bold tracking-widest bg-orange-500/5 px-4 py-1.5 rounded-full border border-orange-500/10">
            Project 0{index + 1}
          </span>
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-800 font-black text-lg group-hover:bg-orange-500 group-hover:text-white transition-colors duration-500">
            &rarr;
          </div>
        </div>

        <h3 className="text-3xl font-black text-gray-900 mb-4 tracking-tight group-hover:text-orange-500 transition-colors duration-300">
          {title}
        </h3>

        <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 font-medium">
          {description}
        </p>
      </div>

      <div>
        <div className="border-t border-gray-100 pt-6">
          <p className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest mb-3">Tech Stack</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, i) => (
              <span 
                key={i} 
                className="px-3.5 py-1 text-xs font-bold rounded-lg bg-gray-100 text-gray-600 border border-gray-200/50 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors duration-300 cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-gray-200 text-sm font-semibold text-gray-700 bg-white hover:bg-orange-500 hover:text-white transition-all duration-300"
            >
              GitHub
            </a>
            {live && live.endsWith('.mp4') ? (
              <a
                href={live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-orange-500 text-sm font-semibold text-orange-600 bg-orange-50 hover:bg-orange-500 hover:text-white transition-all duration-300"
              >
                Video Demo
              </a>
            ) : live ? (
              <a
                href={live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-orange-500 text-sm font-semibold text-orange-600 bg-orange-50 hover:bg-orange-500 hover:text-white transition-all duration-300"
              >
                Live Demo
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  const projectsData = [
    {
      title: 'E-Commerce Full Stack Website',
      description: 'A professional e-commerce platform for handmade crafts, built with React frontend and Node.js backend with MongoDB.',
      tags: ['React', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/rithikvs/e-commerse-fullstack',
      live: 'http://e-commerse-fullstack.vercel.app'
    },
    {
      title: 'Study Hub',
      description: 'A professional collaborative study platform for students, built with React frontend and Node.js backend with MongoDB.',
      tags: ['React', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/rithikvs/study',
      live: 'https://study-fwpj.vercel.app/'
    },
    {
      title: 'Air Writing System',
      description: 'A camera-based application that allows users to write in the air using hand gestures and save notes as images or PDF files without touching the screen.',
      tags: ['Python', 'OpenCV', 'MediaPipe', 'NumPy', 'Pillow', 'ReportLab'],
      github: 'https://github.com/rithikvs/finger-writing-notebook',
      live: 'airwritting.mp4'
    },
    {
      title: 'Attendance Management',
      description: 'A responsive attendance management solution powered by React frontend, Node.js backend, and MongoDB database.',
      tags: ['React', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/rithikvs/student_attendence',
      live: 'http://student-attendence-three.vercel.app'
    },
    {
      title: 'VoiceBridge',
      description: 'A web application designed for speech and hearing impaired individuals, supporting Indian regional languages with AI-powered sign recognition.',
      tags: ['React', 'Material-UI', 'TensorFlow.js', 'Node.js', 'Twilio API'],
      github: 'https://github.com/rithikvs/VoiceBridge',
      live: 'https://6925403e753f7969695fa42c--friendly-tartufo-77f55f.netlify.app/'
    },
    {
      title: 'Wildlife Tracker Dashboard',
      description: 'A real-time wildlife tracking dashboard for monitoring and conservation efforts, built with React and Node.js backend.',
      tags: ['React', 'Node.js', 'MongoDB', 'Socket.IO', 'Leaflet.js'],
      github: 'https://github.com/rithikvs/wildlife-tracker-dashboard',
      live: ''
    }
  ];

  return (
    <section 
      id="projects"
      className="bg-[#fafafa] min-h-screen pt-36 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[radial-gradient(#f973160a_1px,transparent_1px)] [background-size:24px_24px]"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Block */}
        <div data-aos="fade-up" className="mb-20 text-center md:text-left">
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-6 shadow-sm bg-white tracking-widest uppercase">
            Work Showcase
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-6 tracking-tight">
            Recent Full-Stack Projects
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl font-medium leading-relaxed">
            A selection of modern web applications built using the MERN stack, designed to streamline operations and connect communities.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <ProjectCard
              key={idx}
              title={project.title}
              description={project.description}
              tags={project.tags}
              github={project.github}
              live={project.live}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
