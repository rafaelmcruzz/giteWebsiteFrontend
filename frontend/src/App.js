import React, { useState, useEffect } from 'react';
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

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsDropdownOpen(false);
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  }

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
            <li className="dropdown-container">
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
