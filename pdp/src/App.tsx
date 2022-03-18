// @ts-ignore
import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

import SafeComponent from './Safe.component';
import Header from 'home/Header';
import Footer from 'home/Footer';

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <SafeComponent>
      <Header />
      <div className="my-10">Home Page Content</div>
      <Footer />
    </SafeComponent>
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));
