import React, { useState } from 'react';
import Header from '../src/components/Header'
import Home from '../src/components/Home'
import About from '../src/components/About'
import Projects from '../src/components/Projects'
import Contact from '../src/components/Contacts'
import Resume from '../src/components/Resume'
import Footer from '../src/components/Footer'


function App() {
  const [currentNav, setCurrentNav] = useState('Home')
  let body
  if(currentNav == 'About'){
    body = <About />
  } else if(currentNav == 'Projects'){
    body = <Projects />
  } else if(currentNav == 'Contact'){
    body = <Contact />
  } else if(currentNav == 'Resume'){
    body = <Resume /> 
  } else {
    body = <Home />
  }

  return (
    <main>
      <Header 
        currentNav={currentNav}
        setCurrentNav={setCurrentNav}
      />
      <section className="body">
        {body}
      </section>
      <Footer />
    </main>
  );
}

export default App;
