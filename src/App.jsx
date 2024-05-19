import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Search from './components/Search/Search';
import Word from './components/Word/Word';
import WordBank from './components/WordBank/WordBank';
import './App.css'

function App() {

  return (
    <div className="App.css">
      <main>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/home" element={<Home />} />
            <Route path="/searchword" element={<Search />} />
            <Route path="/wordbank" element={<WordBank />} />
            <Route path="/:word" element={<Word />} />
          </Routes>
        </Router>
      </main>
    </div>
  )
}

export default App
