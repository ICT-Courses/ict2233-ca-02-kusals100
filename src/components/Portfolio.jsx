import React from 'react';

    function Portfolio() {

      return (
        <div name='portfolio' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
          <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className ='pb-8'>
              <p className='inline text-4xl font-bold text-gray-300 border-b-4 border-pink-600'>
                Portfolio
              </p>
              <p className='py-6'>// Checking out some of my recent work</p>
            </div>


            {/* Grid Container for Cards */}
            <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3'>
              

              {/* Placeholder Card 1 */}
              <div className ='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                <div className ="p-4">
                  <span className ='text-2xl font-bold tracking-wider text-white'>
                    Project Name
                  </span>
                  <div className ='pt-8 text-center'>
                    <a href="/">
                      <button className ='px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>
                        Demo
                      </button>
                    </a>
                    <a href="/">
                      <button className ='px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>
                        Code
                      </button>

                    </a>
                  </div>
                </div>
              </div>
              {/* End of Placeholder Card */}

            </div>
          </div>
        </div>
      );
    }

export default Portfolio;