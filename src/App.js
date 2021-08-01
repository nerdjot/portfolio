import './App.css';
import Intro from './components/Intro';
import Experience from './components/Experience';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Intro />
      <Experience />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
