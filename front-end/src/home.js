import React from 'react';
import './App.css';

// Import images
import heroBg from './assets/header-bg.jpg';
import parisImage from './assets/paris.jpg';
import tokyoImage from './assets/tokyo.jpg';
import nycImage from './assets/nyc.jpg';

// Import carousel component
import DestinationsCarousel from './DestinationsCarousel';

function Home() {
  return (
    <div className="travel-app">
      {/* Navigation */}
      <nav className="travel-nav">
        <div className="travel-nav__logo">TravelEase</div>
        <ul className="travel-nav__links">
          <li><a href="#" className="active">Home</a></li>
          <li><a href="#">Location</a></li>
          <li><a href="#">Car Rentals</a></li>
          <li><a href="#">Hotels</a></li>
          <li><a href="#">Vols</a></li>
        </ul>
        <div className="travel-nav__auth">
          <button className="btn-secondary">Sign In</button>
          <button className="btn-primary">Sign Up</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="travel-hero"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="travel-hero__content">
          <h1>Find Your Perfect Getaway</h1>
          <p>Compare deals from 500+ airlines and 1M+ hotels worldwide</p>
        </div>

        {/* Search Widget */}
        <div className="travel-search">
          <div className="travel-search__tabs">
            <button className="active">Round Trip</button>
            <button>One Way</button>
            <button>Multi-City</button>
          </div>

          <div className="travel-search__form">
            <div className="form-group">
              <label htmlFor="from">From</label>
              <div className="input-with-icon">
                <span className="icon" aria-label="flight">✈️</span>
                <input type="text" id="from" placeholder="City or Airport" defaultValue="Casablanca (CMN)" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="to">To</label>
              <div className="input-with-icon">
                <span className="icon" aria-label="flight">✈️</span>
                <input type="text" id="to" placeholder="Where to?" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="departure">Departure</label>
              <div className="input-with-icon">
                <span className="icon" aria-label="calendar">📅</span>
                <input type="date" id="departure" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="return">Return</label>
              <div className="input-with-icon">
                <span className="icon" aria-label="calendar">📅</span>
                <input type="date" id="return" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="travelers">Travelers</label>
              <div className="input-with-icon">
                <span className="icon" aria-label="people">👥</span>
                <input type="text" id="travelers" placeholder="1 adult, Economy" />
              </div>
            </div>

            <button className="search-btn" aria-label="Search flights">🔍 Search</button>
          </div>

          <div className="travel-search__options">
            <label><input type="checkbox" /> Add nearby airports</label>
            <label><input type="checkbox" /> Direct flights only</label>
            <label><input type="checkbox" /> Flexible dates</label>
          </div>
        </div>
      </section>

      {/* Deals Section */}
      <section className="travel-deals">
        <h2>Today's Best Deals</h2>
        <div className="deals-grid">
          {/* Paris */}
          <div className="deal-card">
            <div className="deal-badge">HOT DEAL</div>
            <div
              className="deal-image"
              style={{
                backgroundImage: `url(${parisImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              role="img"
              aria-label="Paris cityscape"
            />
            <div className="deal-content">
              <h3>Paris, France</h3>
              <p className="deal-price">$299 <span>round trip</span></p>
              <p className="deal-dates">Jun 15 - Jun 22</p>
              <p className="deal-airline">Air France • 1 stop</p>
            </div>
          </div>

          {/* Tokyo */}
          <div className="deal-card">
            <div className="deal-badge">SAVE 35%</div>
            <div
              className="deal-image"
              style={{
                backgroundImage: `url(${tokyoImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              role="img"
              aria-label="Tokyo cityscape"
            />
            <div className="deal-content">
              <h3>Tokyo, Japan</h3>
              <p className="deal-price">$799 <span>round trip</span></p>
              <p className="deal-dates">Sep 5 - Sep 20</p>
              <p className="deal-airline">Japan Airlines • Nonstop</p>
            </div>
          </div>

          {/* New York */}
          <div className="deal-card">
            <div className="deal-badge">LAST MINUTE</div>
            <div
              className="deal-image"
              style={{
                backgroundImage: `url(${nycImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              role="img"
              aria-label="New York cityscape"
            />
            <div className="deal-content">
              <h3>New York, USA</h3>
              <p className="deal-price">$449 <span>round trip</span></p>
              <p className="deal-dates">May 10 - May 17</p>
              <p className="deal-airline">Delta • 1 stop</p>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <DestinationsCarousel />

      {/* Newsletter */}
      <section className="travel-newsletter">
        <div className="newsletter-content">
          <h2>Get Exclusive Deals</h2>
          <p>Subscribe to our newsletter and be the first to know about special offers</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Your email address" aria-label="Your email address" />
            <button className="btn-primary" aria-label="Subscribe to newsletter">Subscribe</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="travel-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>TravelEase</h3>
            <p>Making travel planning easy and affordable since 2023.</p>
            <div className="social-icons">
              <a href="#">📱</a>
              <a href="#">📘</a>
              <a href="#">📸</a>
              <a href="#">🐦</a>
            </div>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Destinations</h4>
            <ul>
              <li><a href="#">Europe</a></li>
              <li><a href="#">Asia</a></li>
              <li><a href="#">North America</a></li>
              <li><a href="#">Africa</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2023 TravelEase. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
