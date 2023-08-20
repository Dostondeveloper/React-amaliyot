import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => {

  return ( 
  <>
  <header>
    <nav>
  <Navbar />
    </nav>
  </header>


  <main>
  <Main />
  </main>

  <footer>
  <Footer />
  </footer>
  </>
  );
};

export default App;