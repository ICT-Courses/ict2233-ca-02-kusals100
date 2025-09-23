import React from 'react'

function About() {
  return (

    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className ='flex flex-col justify-center items-center w-full h-full'>
        <div className ='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className ='sm:text-right pb-8 pl-4'>
            <p className ='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
        </div>

        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
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