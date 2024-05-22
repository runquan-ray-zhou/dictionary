import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Search from './components/Search/Search';
import Word from './components/Word/Word';
import WordBank from './components/WordBank/WordBank';
import Error from './components/Error/Error'
import './App.css'

function App() {

  const [errorWord, setErrorWord] = useState("")

  return (
    <div className="App.css">
      <main>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/home" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/wordbank" element={<WordBank />} />
            <Route path="/word/:word" element={<Word setErrorWord={setErrorWord}/>} />
            <Route path="/error" element={<Error errorWord={errorWord}/>} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </Router>
      </main>
    </div>
  )
}

export default App
