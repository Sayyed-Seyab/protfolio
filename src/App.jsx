import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Work from './components/Work/Work';
import Education from './components/Education/Education';
import Footer from './components/Footer/Footer';
import Reveal from './components/Reveal/Reveal';

function App() {
  return (
    <>
  
      <Navbar />
      <div className='max-w-6xl mx-auto'>
        <Reveal direction="up"><About /></Reveal>
        <Reveal direction="left" delay={0.3}><Skills /></Reveal>
        <Reveal direction="up" delay={0.3}><Experience /></Reveal>
        <Reveal direction="right" delay={0.3}><Work /></Reveal>
        <Reveal direction="fade" delay={0.3}><Education /></Reveal>
        <Reveal direction="up"><Footer /></Reveal>
      </div>
    </>
  );
}

export default App;
