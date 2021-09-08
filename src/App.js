import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


// page & layout imports
import SiteHeader from './components/Navbar';
import './index.css';
import Home from './pages/Home';
import Projecten from './pages/Projecten';
import Details from './pages/ProjectDetails';
import HeroSection from './components/HeroSection';

//apollo client

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()

})




function App() {
  return (
      <Router>
        <ApolloProvider client={client}>
          <div className="App">
            <SiteHeader/>
            <Switch>
              <Route exact path='/home'>
                <Redirect to='/'/>
                <Home/>  
              </Route>
              <Route path='/projecten'>
                <Projecten/>
              </Route>
              <Route path='/project/:id'>
                <Details/>
              </Route>
            </Switch>
          </div>
        </ApolloProvider>
      </Router>

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