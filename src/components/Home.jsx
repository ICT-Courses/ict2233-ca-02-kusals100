import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

function Home() {

  return (
    <section name="home" className="w-full h-screen ">

      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <motion.p 
          className="font-mono text-accent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Hi, my name is
        </motion.p>
        <motion.h1 
          className="text-4xl font-bold sm:text-7xl text-text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Kusal Sanjeewa
        </motion.h1>
        <motion.h2 
          className="text-4xl font-bold sm:text-7xl text-text-secondary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          I build digital solutions.
        </motion.h2>
        <motion.p 
          className ="text-text-secondary py-4 max-w-[700px]"
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
            <button className="flex items-center px-6 py-3 my-2 transition-all duration-300 border-2  group text-accent border-accent hover:bg-accent hover:text-background">
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