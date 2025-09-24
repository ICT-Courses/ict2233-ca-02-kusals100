import React from 'react';
import { Link } from 'react-scroll';
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
          I build digital solutions.
        </motion.h2>
        <motion.p 
          className ="text-[#8892b0] py-4 max-w-[700px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          I specialize in crafting elegant and efficient web applications, 
          transforming complex challenges into seamless user experiences.
        </motion.p>
        
        <motion.div
          initial = {{ opacity: 0, y: 20 }}
          animate = {{ opacity: 1, y: 0 }}
          transition = {{ duration: 0.5, delay: 1 }}
        >
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#64ffda] hover:border-[#64ffda] hover:text-[#0a192f] transition-all duration-300">
              View My Work
              <span className="ml-3 duration-300 group-hover:rotate-90">
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