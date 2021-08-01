import './App.css';
import Intro from './components/Intro';
import Experience from './components/Experience';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Data from './components/Data';
 
const localData = Data;

function App() {
  return (
    <div className="App">
      <Intro intro = {localData['intro']} />
      <Experience experience = {localData['experience']} />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
