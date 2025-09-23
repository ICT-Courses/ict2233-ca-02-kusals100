import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home() {

  return (
    <section name="home" className="w-full h-screen bg-[#0a192f]">

      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <motion.p 
          className="text-[#64ffda] font-mono"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Hi, my name is
        </motion.p>
        <motion.h1 
          className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Kusal Sanjeewa
        </motion.h1>
        <motion.h2 
          className="text-4xl sm:text-7xl font-bold text-[#8892b0]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          I'm an aspiring Full-Stack Developer.
        </motion.h2>
        <motion.p 
          className ="text-[#8892b0] py-4 max-w-[700px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          I’m focused on building responsive and user-friendly web applications.
          Currently, I'm diving deep into the MERN stack and exploring modern
          frontend technologies.
        </motion.p>
        
        <motion.div
          initial = {{ opacity: 0, y: 20 }}
          animate = {{ opacity: 1, y: 0 }}
          transition = {{ duration: 0.5, delay: 1 }}
        >
          <Link to="/portfolio">
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#64ffda] hover:border-[#64ffda] hover:text-[#0a192f] transition-all duration-300">
              View My Work
              <span className="group-hover:rotate-90 duration-300 ml-3">
                &rarr;
              </span>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;