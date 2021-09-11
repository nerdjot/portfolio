import './App.css';
import Intro from './components/Intro';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Data from './components/Data';
import { FiMenu } from "react-icons/fi";
 
const localData = Data;

function App() {
  return (
    <div className="App">
      <div className='nav-button'>NS</div>
      <div id="nav-menu" className='nav-button'><FiMenu></FiMenu></div>
      <Intro intro = {localData['intro']} />
      <Experience experience = {localData['experience']} />
      <Skills skills = {localData['skills']}/>
      <Projects projects = {localData['projects']} />
      <About />
      <Contact />
    </div>
  );
}

export default App;
