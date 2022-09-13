import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import MovieList from './components/Movies/MovieList';
import Reviews from './components/Reviews/Reviews';
import Contacts from './components/Contacts/Contacts';
import './App.css';


function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact element ={<Home />} />
          <Route path="/movielist" element = {<MovieList />} />
          <Route path="/reviews" element = {<Reviews />} />
          <Route path="/contacts" element = {<Contacts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
