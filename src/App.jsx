import {Routes , Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';



function App() {

  return (
    <div className='bg-[#0a192f] text-gray-300 min-h-screen font-sans'>
      
  <Navbar/>
      <main className='pt-[80px]'>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>
      </main>
      
    </div>
  )
}

export default App
