import Navbar from "./scenes/Navbar";
import { useEffect, useState } from 'react';
import './App.css';
import LineGradient from './components/LineGradient';
import DotGroup from './scenes/DotGroup';
import Landing from './scenes/Landing';
import Skills from './scenes/Skills';
import Projects from './scenes/Projects';
import Contact from './scenes/Contact';


function App() {

  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage('home');
      }
      if(window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue">
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
      <div className='w-5/6 mx-auto h-full'>
        <DotGroup selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        <Landing />
      </div>
        <LineGradient />
      <div className='mx-auto h-full bg-deep-blue'>
        <Skills />
      </div>
        <LineGradient />
      <div className='mx-auto h-full'>
        <Projects />
      </div>
        <LineGradient />
      <div className='mx-auto h-full w-full bg-deep-blue'>
        <Contact />
      </div>

    </div>
  )
}

export default App
