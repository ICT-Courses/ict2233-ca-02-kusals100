import React from 'react';
import { HiOutlineMail } from 'react-icons/hi'; 
import { FaGithub, FaLinkedin } from 'react-icons/fa'; 

function Contact() {
  
  // NOTE: We don't handlie form submission logic in this assignment.
  return (
    <div name ='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 pt-[100px]'>
      <div className ='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='inline text-4xl font-bold text-gray-300 border-b-4 border-pink-600'>
            Contact
          </p>
          <p className='py-4 text-gray-300'>Submit the form below or shoot me an email</p>
        </div>
        
        {/*Social Media icons in only for mobile view*/}
        <div className= 'flex justify-center py-4 lg:hidden'>
            <a className ="px-4 text-gray-300 hover:text-pink-600" href="https://www.linkedin.com/in/kusal-sanjeewa-2b251a355/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={40} />
            </a>
            <a className= "px-4 text-gray-300 hover:text-pink-600" href="https://github.com/Kusals100" target="_blank" rel="noopener noreferrer">
                <FaGithub size={40} />
            </a>
            <a className = "px-4 text-gray-300 hover:text-pink-600" href="mailto:sanjeewakusal100@gmail.com">
              
                <HiOutlineMail size={40} />
            </a>
        </div>


        <form method='POST' action="https://getform.io/f/YOUR_UNIQUE_ENDPOINT" className='flex flex-col w-full'>
          <input 
            className ='bg-[#ccd6f6] p-2 text-gray-800' 
            type="text" 
            placeholder='Name' 
            name='name' 
          />

          <input 
            className ='my-4 p-2 bg-[#ccd6f6] text-gray-800' 
            type ="email" 
            placeholder='Email' 
            name='email' 
          />

          <textarea 
            className='bg-[#ccd6f6] p-2 text-gray-800' 
            name="message" 
            rows="10" 
            placeholder='Message'
          ></textarea>
          <button 
            className="flex items-center px-4 py-3 mx-auto my-8 text-white transition-colors duration-300 border-2 hover:bg-pink-600 hover:border-pink-600"
          >

            Let's Collaborate

          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;