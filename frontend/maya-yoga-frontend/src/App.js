import React from 'react';
import { Header } from './Header';
import { Schedule } from './Schedule';
import { Footer } from './Footer';
import './App.css';

function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <Schedule />
      <Footer />
    </div>
  );
}

export default App;


