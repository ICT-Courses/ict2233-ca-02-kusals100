import React from 'react';
import { FaGithub , FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail }  from 'react-icons/hi';

const SocialLinks = () => {
  const links = [
    {

      id: 1,
      child: (
        <>LinkedIn <FaLinkedin size={30} /></>
      ),
      href: 'https://www.linkedin.com/in/kusal-sanjeewa-2b251a355/',
      style: 'rounded-tr-md',

    },

    {
      id: 2,
      child: (
        <>GitHub <FaGithub size={30} /></>
      ),
      href: 'https://github.com/Kusals100',
    },

    {
      id: 3,
      child: (
        <>Mail <HiOutlineMail size={30} /></>
      ),
      href: 'mailto:sanjeewakusal100@gmail.com',
      style: 'rounded-br-md',
    },

  ];

  return (
    <div className = 'hidden lg:flex fixed flex-col top-[35%] left-0'>
      <ul>
        {links.map(({ id, child, href, style }) => (
          <li
            key={id}
            className ={
              'flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300' +
              ' ' +
              style
            }
          >
            <a
              href ={href}
              className='flex items-center justify-between w-full text-white'
              target='_blank'
              rel='noopener noreferrer'
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
  
};


export default SocialLinks;