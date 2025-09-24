import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SocialLinks from './components/SocialMediaLinks';

function App() {
  return (
    <div className='bg-[#0a192f] text-gray-300 min-h-screen font-sans'>
      <Navbar />
      <SocialLinks />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;