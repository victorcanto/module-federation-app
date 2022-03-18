import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

import Header from './components/Header.component';
import Footer from './components/Footer.component';

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header app={{ name: 'home' }} />
    <div className="my-10">Home Page Content</div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));
