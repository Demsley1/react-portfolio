import React, { useState } from 'react';
import Header from '../src/components/Header'
import Home from '../src/components/Home'
import About from '../src/components/About'
import Footer from '../src/components/Footer'
import './App.css';

/* - Import Bootstrap,
   - fix css sheet, and imports for it
   - Conditionally render each page using nav element
   - use the usestate hook to be able to control which page is rendered
   - fill in content for page with arbitray info potentially
*/ 

function App() {
  const [currentNav, setCurrentNav] = useState('Home')
  return (
    <main>
      <Header 
        currentNav={currentNav}
        setCurrentNav={setCurrentNav}
      />

      <section className="body">
      {currentNav == 'Home' ? (
        <>
        <Home />
        </>
      ) : (
        <>
        <About />
        </>
      )}
      </section>
      <Footer />
    </main>
  );
}

export default App;
