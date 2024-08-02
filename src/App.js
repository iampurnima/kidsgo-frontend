import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from "./components/Items";
import Contact from './components/Add';
import Footer from "./components/Footer";
import logo from './images/kidsgo.png';

function App() {
  return (
    <Router>
      <div className='background'>
        <nav className='mainNav'>
          <ul className='mainul'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/categorirs">Browse Categories</Link>
            </li>
            <li>
              <Link to="/Sellitem">Sell Items</Link>
            </li>
            
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/blog">My Blog</Link>
            </li>
            
          </ul>
        </nav>
        <header className='imagekid'><img src={logo} alt="Logo" style={{ height: '30px' }} /></header>
        <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
        
        </main>
        <Footer/>
        
      </div>
    </Router>
    
  );
}

export default App;
