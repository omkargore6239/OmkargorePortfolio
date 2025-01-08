import React from 'react';
import Header from './components/Header';
import Hero from './pages/Hero';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './pages/Footer';


const App = () => (
  <div>
    <Header />
    <Hero />
    <Services />
    <Projects />
    <About />
    <Contact />
    <Footer/>
  </div>
);

export default App;
