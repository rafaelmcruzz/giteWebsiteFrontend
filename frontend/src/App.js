import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import './App.css';
import About from './About';
import Gallery from './Gallery';
import Reviews from './Reviews';
import ContactUs from './ContactUs';
import logo from './finalLogo.png'; 

function App() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(() => {
    return localStorage.getItem('activeSection') || 'about';
  });


  useEffect(() => {
    localStorage.setItem('activeSection', activeSection);
  }, [activeSection]);

  useEffect(() => {
    navigate(`/${activeSection}`);
  }, [activeSection, navigate]);

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <div className="logo-container">
            <img src={logo} alt="Your Company Logo" className="logo" /> 
          </div>
          <ul className="nav-list">
            <li>
              <button className={activeSection === 'about' ? 'active' : ''} onClick={() => { navigate('/about'); setActiveSection('about'); }}>
                About
              </button>
            </li>
            <li>
              <button className={activeSection === 'gallery' ? 'active' : ''} onClick={() => { navigate('/gallery'); setActiveSection('gallery'); }}>
                Gallery
              </button>
            </li>
            <li>
              <button className={activeSection === 'reviews' ? 'active' : ''} onClick={() => { navigate('/reviews'); setActiveSection('reviews'); }}>
                Reviews
              </button>
            </li>
            <li>
              <button className={activeSection === 'contactus' ? 'active' : ''} onClick={() => { navigate('/contactus'); setActiveSection('contactus'); }}>
                Contact Us
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Navigate to={`/${activeSection}`} />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
