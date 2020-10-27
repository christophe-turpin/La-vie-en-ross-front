import React from 'react';
import Router from './Router';import NavMenu from './components/NavMenu';
import AnimBorder from './components/AnimBorder';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavMenu />
      <AnimBorder />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
