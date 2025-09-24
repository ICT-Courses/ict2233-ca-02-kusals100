import React,  { useState, useEffect }  from 'react';
import styles from './Portfolio.module.css'; 

function Portfolio() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Kusals100/repos?per_page=6&sort=pushed');
        if (!response.ok) {
          throw new Error('Failed to fetch data from GitHub API');
        }
        const data = await response.json();
        setRepos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  if (loading) {
    return (
      <div name='portfolio' className='w-full h-screen bg-[#0a192f] flex justify-center items-center'>
        <p className="text-white">Loading Projects...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div name ='portfolio' className='w-full h-screen bg-[#0a192f] flex justify-center items-center'>
        <p className ="text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <div name='portfolio' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className ='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className ='pb-8'>
          <p className='inline text-4xl font-bold text-gray-300 border-b-4 border-pink-600'>
            Portfolio
          </p>
          <p className='py-6'>// Check out some of my recent work</p>
        </div>

        {/* Grid Container for Cards */}
        <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3'>

          {/* Map through the repos and create a card for each */}
          {repos.map((repo) => (
            <div
              key={repo.id}
              className={`shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto ${styles.contentDiv}`}
            >
              {/* Hover Effects */}
              <div className='p-4 text-center transition-opacity duration-300 opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold tracking-wider text-white'>
                  {repo.name}
                </span>
                <div className = 'pt-8 text-center'>
                  <a href={repo.homepage || repo.html_url} target="_blank" rel="noopener noreferrer">
                    <button className = 'px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>
                      Demo
                    </button>
                  </a>
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
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