import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className = 'w-full h-[80px]  flex  justify-center items-center  px-4 '>
      <p>&copy; {currentYear} Kusal Sanjeewa. All rights reserved.</p>
    </div>
  );
  
};


export default Footer;