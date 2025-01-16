
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App w-full  ">
     {/* navabr */}
            <Navbar/>
     {/* Intro */}
        <Home/>

     {/* About Me */}
     <About/>


     {/* Education */}
    <Education/>

     {/* Skills */}
      <Skills/>

     {/* Projects */}
     <Project/>

     {/* Contact Me */}
     <Contact/>

     {/* Footer */}
     <Footer/>

    </div>
  );
}

export default App;
