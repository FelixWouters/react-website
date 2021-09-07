import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Maarkedal from './pages/Projecten' ;
import Projecten from './pages/Projecten';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/home' exact component={Home} />
          <Route path='/projecten' component={Projecten} />
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