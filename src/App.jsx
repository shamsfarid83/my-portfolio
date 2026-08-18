import NavBar from './navbar';
import './App.css';
import Hero from './Hero';
import About from './About';
import Projects from './PROJECTS';
import Contact from './contact';
import Footer from './footer';
function App() {
  return (<>
    <NavBar />
    <Hero />
    <About/>
    <Projects/>
    <Contact/>
    <Footer/>
    
  </>
  );
}

export default App;