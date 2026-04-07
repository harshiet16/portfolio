import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
      <Toaster position="bottom-right" toastOptions={{ duration: 4000, style: { background: '#333', color: '#fff' } }} />
    </>
  );
}

export default App;
