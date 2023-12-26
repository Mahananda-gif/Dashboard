import React from 'react'
import Header from './components/header'; 
import Sidebar from './components/sidebar';
import Main from './components/main';
import './App.css';

function App() {
  return (
    <div className="grid-container">
      <Header />
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
