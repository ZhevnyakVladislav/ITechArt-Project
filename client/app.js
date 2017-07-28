import React from 'react';
import  { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

render(
    <div>
        <Header />
        <div>Content</div>
        <Footer />
    </div>,
    document.querySelector('#app')
);