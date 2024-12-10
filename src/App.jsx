import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
// import SocialMediaLinks from './components/SocialMediaLinks';
import Footer from './components/Footer';


const App = () => (
  <div>
    <Header />
    <Hero />
    <About />
    <Services />
    <Projects />
    <Contact />
    {/* <SocialMediaLinks/> */}
    <Footer/>
  </div>
);

export default App;
