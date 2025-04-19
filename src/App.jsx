import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Skills />
            <Projects />
            <About />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;