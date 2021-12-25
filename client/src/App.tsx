import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import LoginForm from './components/LoginForm';
import { Link } from "react-router-dom";
import MainNav from './components/navigation/MainNav';
import Home from './views/Home';

function App() {
  return (
    <div className="App">
      <MainNav />
      <Home />
    </div>
  );
}

export default App;
