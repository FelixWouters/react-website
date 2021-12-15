import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/index.css';
import SimpleReactLightbox from 'simple-react-lightbox'
import Footer from './components/Footer';


ReactDOM.render(  
    <React.StrictMode>
        <SimpleReactLightbox>
        <App />
        </SimpleReactLightbox>
    </React.StrictMode>,
    document.getElementById('root'));
