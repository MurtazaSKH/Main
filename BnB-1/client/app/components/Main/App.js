import React from 'react';

import Header from '../Common/header';
import Footer from '../Common/footer';

const App = ({ children }) => (
  <>
    <Header />

    <main>
      {children}
    </main>

    <Footer />
  </>
);

export default App;
