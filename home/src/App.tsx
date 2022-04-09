import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

import Header from './components/Header.component';
import Footer from './components/Footer.component';
import HomeContent from './components/HomeContent.component';

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header />
    <div className="my-10">
      <HomeContent />
    </div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));
