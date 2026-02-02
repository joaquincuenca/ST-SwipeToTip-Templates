import React from 'react';
import Header from './components/Header';
import TemplatesPage from './components/TemplatesPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <TemplatesPage />
      <Footer />
    </div>
  );
}

export default App;