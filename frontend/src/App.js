import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import About from './About';
import Gallery from './Gallery';
import Reviews from './Reviews';
import ContactUs from './ContactUs';

function App() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <button
            className={activeSection === 'about' ? 'active' : ''}
            onClick={() => { navigate('/about'); setActiveSection('about'); }}
          >
            About
          </button>
          <button
            className={activeSection === 'gallery' ? 'active' : ''}
            onClick={() => { navigate('/gallery'); setActiveSection('gallery'); }}
          >
            Gallery
          </button>
          <button
            className={activeSection === 'reviews' ? 'active' : ''}
            onClick={() => { navigate('/reviews'); setActiveSection('reviews'); }}
          >
            Reviews
          </button>
          <button
            className={activeSection === 'contactus' ? 'active' : ''}
            onClick={() => { navigate('/contactus'); setActiveSection('contactus'); }}
          >
            Contact Us
          </button>
        </nav>
      </header>

      <main>
        <Routes>
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
