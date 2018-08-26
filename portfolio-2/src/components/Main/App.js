import React, { Component } from 'react';

import Header from '../Common/Header';
import Footer from '../Common/Footer';

const App = ({ children }) => (
  <div>
    <Header />

    <main>
      {children}
    </main>

    <Footer />
  </div>
);

export default App;
