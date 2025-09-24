import React from 'react';
import { HiOutlineMail } from 'react-icons/hi'; 
import { FaGithub, FaLinkedin } from 'react-icons/fa'; 

function Contact() {
  
  // NOTE: We don't handlie form submission logic in this assignment.
  return (
    <div name ='contact' className='w-full h-screen  flex justify-center items-center p-4 pt-[100px]'>
      <div className ='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='inline text-4xl font-bold text-text-primary border-b-4 border-border'>
            Contact
          </p>
          <p className='py-4 text-text-primary'>Submit the form below or shoot me an email</p>
        </div>
        
        {/*Social Media icons in only for mobile view*/}
        <div className= 'flex justify-center py-4 lg:hidden'>
            <a className ="px-4 text-text-primary hover:text-accent" href="https://www.linkedin.com/in/kusal-sanjeewa-2b251a355/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={40} />
            </a>
            <a className= "px-4 text-text-primary hover:text-accent" href="https://github.com/Kusals100" target="_blank" rel="noopener noreferrer">
                <FaGithub size={40} />
            </a>
            <a className = "px-4 text-text-primary hover:text-accent" href="mailto:sanjeewakusal100@gmail.com">
              
                <HiOutlineMail size={40} />
            </a>
        </div>


        <form method='POST' action="https://getform.io/f/YOUR_UNIQUE_ENDPOINT" className='flex flex-col w-full'>
          <input 
            className='bg-text-secondary bg-opacity-20 p-2 text-text-primary' 
            type="text" 
            placeholder='Name' 
            name='name' 
          />

          <input 
            className='bg-text-secondary bg-opacity-20 p-2 text-text-primary' 
            type ="email" 
            placeholder='Email' 
            name='email' 
          />

          <textarea 
            className='bg-text-secondary bg-opacity-20 p-2 text-text-primary'
            name="message" 
            rows="10" 
            placeholder='Message'
          ></textarea>
          <button 
            className="flex items-center px-4 py-3 mx-auto my-8 text-accent transition-colors duration-300 border-2 border-accent hover:bg-accent hover:text-background"
          >

            Let's Collaborate

          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;