import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Connect from './pages/connect';
import Footer from './components/Footer';
import Dropdown from './components/Dropdown';
import './App.scss';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log('i resized');
      }
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });

  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/connect" component={Connect} />
      </Switch>

      <Footer />
    </>
  );
}

export default App;
