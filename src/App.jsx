import {Routes , Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';



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
