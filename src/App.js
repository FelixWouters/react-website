import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';
import Maarkedal from './components/pages/Maarkedal' ;

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/home' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/portfolio/Maarkedal' component={Maarkedal} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;


/* 

selectie paginas: keuze tussen
- klassiek
- modern
- industrieel
- renovatie
- commercieel

voorbeelden: 
caanarchitecten
https://www.starchitecten.be

slideshow op projectpagina

*/