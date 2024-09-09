import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './App.css';
import About from './About';
import Gallery from './Gallery';
import Reviews from './Reviews';
import Facilities from './Facilities';
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

  const { t, i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsDropdownOpen(false);
  };


  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  }

  //closes the drop down language menu if user presses/clicks another place
  useEffect(() => {
    
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <div className="logo-container">
            <img src={logo} alt="logoooo" className="logo" /> 
          </div>
          <ul className="nav-list">
            <li>
              <button className={activeSection === 'about' ? 'active' : ''} onClick={() => { navigate('/about'); setActiveSection('about'); }}>
                {t('about')}
              </button>
            </li>
            <li>
              <button className={activeSection === 'facilities' ? 'active' : ''} onClick={() => { navigate('/facilities'); setActiveSection('facilities'); }}>
                {t('facilities')}
              </button>
            </li>
            <li>
              <button className={activeSection === 'gallery' ? 'active' : ''} onClick={() => { navigate('/gallery'); setActiveSection('gallery'); }}>
                {t('gallery')}
              </button>
            </li>
            <li>
              <button className={activeSection === 'reviews' ? 'active' : ''} onClick={() => { navigate('/reviews'); setActiveSection('reviews'); }}>
                {t('reviews')}
              </button>
            </li>
            <li>
              <button className={activeSection === 'contactus' ? 'active' : ''} onClick={() => { navigate('/contactus'); setActiveSection('contactus'); }}>
                {t('contactus')}
              </button>
            </li>
            <li className="dropdown-container" ref={dropdownRef}>
              <button onClick={toggleDropdown} className="dropdown-toggle">
                {t('language')}
              </button>
              {isDropdownOpen && (
                <ul className="dropdown-menu">
                  <li><button onClick={() => changeLanguage('en')}>English</button></li>
                  <li><button onClick={() => changeLanguage('fr')}>Français</button></li>
                  <li><button onClick={() => changeLanguage('nl')}>Nederlands</button></li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Navigate to={`/${activeSection}`} />} />
          <Route path="/about" element={<About />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
