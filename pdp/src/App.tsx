// @ts-ignore
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'remixicon/fonts/remixicon.css'

import './index.scss';

import SafeComponent from './Safe.component';
import PDPContent from './components/PDPContent.component';
import Header from 'home/Header';
import Footer from 'home/Footer';

const App = () => (
  <Router>
    <div className="text-3xl mx-auto max-w-6xl">
      <SafeComponent>
        <Header />
        <div className="my-10">
          <Routes>
            <Route path="/product/:id" element={<PDPContent />} />
          </Routes>
        </div>
        <Footer />
      </SafeComponent>
    </div>
  </Router>
);
ReactDOM.render(<App />, document.getElementById('app'));
