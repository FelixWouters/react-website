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

welke pagina's?
- home
- projecten
- over ons
- contact



selectie projecten: keuze tussen

nieuwbouw/residentieel
- klassiek
- modern
- renovatie

industrieel
commercieel
interieur

voorbeelden: 
caanarchitecten
https://www.starchitecten.be
govaert & vanhoutte

slideshow op projectpagina

*/