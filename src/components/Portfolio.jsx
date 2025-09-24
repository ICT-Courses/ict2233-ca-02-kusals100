import React from 'react';
import styles from './Portfolio.module.css';
import Project1Img from '../assets/project1.png';
import Project2Img from '../assets/project2.png';
import Project3Img from '../assets/project3.png';





function Portfolio() {
  // details of three projects 
  const portfolioProjects = [
    {
      id: 1,
      name: 'MERN Driving School Management System',
      image: Project1Img, // project 01
      demo: 'https://driving-school-management-system-wine.vercel.app/',
      code: 'https://github.com/ICT-Courses/application-development-ca1-kusals100.git'
    },
    {
      id: 2,
      name: 'C# .NET WPF Task Management System',
      image: Project2Img, // project 02
      demo: 'https://youtu.be/aufrsSKdfT0',
      code: 'https://github.com/ICT-Courses/application-development-ca1-kusals100.git'
    },
    {
      id: 3,
      name: 'Coffee shop website',
      image: Project3Img, // project 03
      demo: 'https://your-demo-link.com',
      code: 'https://github.com/ICT-Courses/ict2233-ca-01-kusals100.git'
    },
  ];

  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f] pt-[100px]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='inline text-4xl font-bold text-gray-300 border-b-4 border-pink-600'>
            Work
          </p>
          <p className='py-6'>Check out some of my recent work</p>
        </div>

        {/* Grid Container for Cards */}
        <div className ='grid gap-4 sm:grid-cols-2 md:grid-cols-3'>

          {/* Map through the projects and create a card for each */}
          {portfolioProjects.map((project) => (
            <div
              key={project.id}
              style={{ backgroundImage: `url(${project.image})` }}
              className={`shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto ${styles.contentDiv}`}
            >
              {/* Hover Effects */}
              <div className ='p-4 text-center transition-opacity duration-300 opacity-0 group-hover:opacity-100'>
                <span className ='text-2xl font-bold tracking-wider text-white'>
                  {project.name}
                </span>
                <div className='pt-8 text-center'>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <button className ='px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>
                      Demo
                    </button>
                  </a>
                  <a href={project.code} target="_blank" rel="noopener noreferrer">
                    <button className ='px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;