import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import './App.css';
import About from './About';
import Gallery from './Gallery';
import Reviews from './Reviews';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        <nav>
          <ul>
            <li>
              <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/gallery" className={({ isActive }) => isActive ? "active" : ""}>
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink to="/reviews" className={({ isActive }) => isActive ? "active" : ""}>
                Reviews
              </NavLink>
            </li>
          </ul>
        </nav>
        </header>
        <main>
          <Routes> {/* Wrap your Route components with Routes */}
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/reviews" element={<Reviews />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
