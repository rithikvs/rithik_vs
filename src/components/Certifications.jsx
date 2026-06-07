import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import mongodbImg from '../assets/about/mongodb.png';
import oracleImg from '../assets/about/oracle.png';

const CertificationCard = ({ title, issuer, details, index, onView }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-[#111111] border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_40px_rgba(0,0,0,0.5)] hover:border-[#ff2a2a]/60 hover:shadow-[0_0_40px_rgba(255,42,42,0.15)] transition-all duration-300 relative group overflow-hidden flex flex-col justify-between"
    >
      {/* Decorative gradient glowing circle */}
      <div className="absolute -top-12 -right-12 w-36 h-36 bg-gradient-to-br from-[#ff2a2a] to-transparent rounded-full opacity-10 group-hover:opacity-30 transition-opacity duration-500 blur-2xl"></div>

      <div>
        {details && details.image ? (
          <div className="w-28 h-28 md:w-32 md:h-32 rounded-2xl bg-white/5 flex items-center justify-center text-white mb-8 shadow-[0_10px_30px_rgba(0,0,0,0.6)] overflow-hidden">
            <img src={details.image} alt={`${issuer} logo`} className="w-full h-full object-contain p-3" />
          </div>
        ) : (
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-600 to-[#ff2a2a] flex items-center justify-center text-white mb-8 shadow-[0_10px_20px_rgba(255,42,42,0.3)]">
            {/* Certificate Icon */}
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
        )}

        <h3 className="text-3xl font-black text-white mb-3 tracking-tight leading-snug group-hover:text-[#ff2a2a] transition-colors duration-300">
          {title}
        </h3>

        <p className="text-red-500 font-mono text-sm font-bold uppercase tracking-widest mb-6">
          {issuer}
        </p>

        <p className="text-gray-400 text-sm md:text-base leading-relaxed font-medium">
          {details && details.text ? details.text : ''}
        </p>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <button
          onClick={() => {
            if (details && details.pdf) {
              window.open(details.pdf, '_blank', 'noopener,noreferrer');
              return;
            }
            onView && onView({ title, issuer, details });
          }}
          aria-label={`View certificate for ${title}`}
          className="bg-gradient-to-r from-[#ff8a00] to-[#ff2a2a] text-white font-extrabold text-sm md:text-base px-5 md:px-6 py-3 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200"
        >
          View Certificate
        </button>
        <div className="text-xs font-mono font-bold tracking-widest text-white/50 uppercase">
          {details && details.year ? details.year : ''}
        </div>
      </div>
    </motion.div>
  );
};

const Certifications = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  const [viewer, setViewer] = useState(null);

  const openViewer = (cert) => setViewer(cert);
  const closeViewer = () => setViewer(null);

  const certData = [
    {
      title: "MongoDB Associate Developer",
      issuer: "MongoDB Inc.",
      details: {
        text: "Validates foundational expertise in building database architectures, querying, modeling data, and designing robust database applications with MongoDB.",
        image: mongodbImg,
        year: '2025',
        pdf: '/certs/mongodb.pdf'
      }
    },
{
  title: "Oracle Certified Professional: Java SE 17 Developer",
  issuer: "Oracle Corporation",
  details: {
    text: "Demonstrates proficiency in Java SE 17 development, including OOP concepts, collections, streams, concurrency, exception handling, and modern Java features.",
    image: oracleImg,
    year: '2026',
    pdf: '/certs/oracle.pdf'
  }
}
  ];

  return (
    <section 
      id="certifications"
      className="bg-[#0c0c0c] min-h-screen pt-36 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans"
    >
      {/* Background stars */}
      <div className="absolute top-24 left-10 text-red-500/10 opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-24 right-10 text-[#ff2a2a]/10 opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Block */}
        <div data-aos="fade-up" className="mb-20 text-center md:text-left">
          <div className="inline-block border border-red-500/30 rounded-full px-5 py-1.5 text-sm text-[#ff2a2a] font-bold mb-6 shadow-sm bg-[#ff2a2a]/5 tracking-widest uppercase">
            Accreditations
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6 tracking-tight">
            Industry Certifications
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl font-medium leading-relaxed">
            Professional certifications proving rigorous hands-on capabilities in cloud database architectures and application design.
          </p>
        </div>

        {/* Certifications Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {certData.map((cert, idx) => (
            <CertificationCard 
              key={idx}
              title={cert.title}
              issuer={cert.issuer}
              details={cert.details}
              index={idx}
              onView={openViewer}
            />
          ))}
        </div>
        {viewer && viewer.details && viewer.details.image && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6">
            <div className="relative max-w-4xl w-full">
              <button onClick={closeViewer} className="absolute -top-6 right-0 text-white bg-black/30 px-3 py-2 rounded-md">Close</button>
              <div className="bg-[#0b0b0b] p-6 rounded-xl">
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-black text-white">{viewer.title}</h3>
                    <p className="text-sm text-white/60">{viewer.issuer} • {viewer.details.year}</p>
                  </div>
                </div>
                <div className="w-full flex items-center justify-center">
                  <img src={viewer.details.image} alt={`${viewer.title} certificate`} className="max-h-[70vh] object-contain rounded-md shadow-lg" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
