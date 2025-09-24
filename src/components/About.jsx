import React from 'react'

function About() {
  return (

    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300 pt-[100px]'>
      <div className ='flex flex-col items-center justify-center w-full h-full'>
        <div className ='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className ='pb-8 pl-4 sm:text-right'>
            <p className ='inline text-4xl font-bold border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
        </div>

        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='text-4xl font-bold sm:text-right'>
            <p>Hi, I'm Kusal Sanjeewa. As an undergraduate pursuing a BSc in Information Technology, 
              I'm passionate about leveraging technology to architect and build innovative digital solutions.</p>
          </div>
          <div>

            <p>
              My journey in IT is driven by a deep curiosity for 
              how systems work together to solve real-world problems. For me, 
              software development is the creative core of this process. 
              While I'm currently honing my practical skills with the MERN stack, 
              my academic background gives me a broader perspective on the entire technology 
              lifecycle. I thrive on the challenge of designing systems that are not just 
              technically robust, but also user-centric and built for the future.
            </p>
          </div>
        </div>
      </div>
    </div>
          
  )
}

export default About