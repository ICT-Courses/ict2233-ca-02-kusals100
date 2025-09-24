import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SocialLinks from './components/SocialMediaLinks';

function App() {
  return (
    <div className='min-h-screen font-sans bg-background text-text-primary '>
      <Navbar />
      <SocialLinks />
    <main>
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </main>
      <Footer />
    </div>
  );
}

export default App;