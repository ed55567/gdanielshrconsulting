import React from 'react';
import './App.css';
import profilePhoto from './profile-photo.jpg';
import backgroundPhoto from './background-photo.jpg';

function App() {
  return (
    <div src={backgroundPhoto} alt="backdrop" className="App">
      <header className="App-header">
        <nav>
          <h1>GDaniels HR Consulting</h1>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <img src={profilePhoto} alt="Profile" className="profile-photo" />
      <main>
        <section id="about">
          <h2>About</h2>
          <h3>Over 40 years HR experience in:</h3>
              <ul>
                <li>Diversity equity and inclusion</li>
                <li>Staffing strategies</li>
                <li>Retention strategies</li>
                <li>Conflict resolution</li>
                <li>Successor Planning strategies</li>
              </ul>
            
        </section>
        <section id="services">
          <h2>Services</h2>
          <ul>
            <li>Recruitment Strategies</li>
          </ul>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <ul>
            <li>Email: info@hrconsulting.com</li>
            <li>Phone: 123-456-7890</li>
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 GDaniels HR Consulting. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

