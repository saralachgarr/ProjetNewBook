import React from 'react';
import './App.css';
function Home(){
    return (
        <div>
            <nav>
      <div class="nav__logo">NewBook</div>
      <ul class="nav__links">
        <li class="link"><a href="#">Home</a></li>
        <li class="link"><a href="#">Book</a></li>
        <li class="link"><a href="#">Blog</a></li>
        <li class="link"><a href="#">Contact Us</a></li>
      </ul>
    </nav>
    <header class="section__container header__container">
      <div class="header__image__container">
        <div class="header__content">
          <h1>Enjoy Your Dream Vacation</h1>
          <p>Book Hotels, Flights and stay packages at lowest price.</p>
        </div>
        <div class="booking__container">
          <form>
            <div class="form__group">
              <div class="input__group">
                <input type="text" />
                <label>Location</label>
              </div>
              <p>Where are you going?</p>
            </div>
            <div class="form__group">
              <div class="input__group">
                <input type="text" />
                <label>Check In</label>
              </div>
              <p>Add date</p>
            </div>
            <div class="form__group">
              <div class="input__group">
                <input type="text" />
                <label>Check Out</label>
              </div>
              <p>Add date</p>
            </div>
            <div class="form__group">
              <div class="input__group">
                <input type="text" />
                <label>Guests</label>
              </div>
              <p>Add guests</p>
            </div>
          </form>
          <button class="btn"><i class="ri-search-line"></i></button>
        </div>
      </div>
    </header>

    <section class="section__container popular__container">
      <h2 class="section__header">Popular Hotels</h2>
      <div class="popular__grid">
        <div class="popular__card">
          <img src="assets/hotel-1.jpg" alt="popular hotel" />
          <div class="popular__content">
            <div class="popular__card__header">
              <h4>The Plaza Hotel</h4>
              <h4>$499</h4>
            </div>
            <p>New York City, USA</p>
          </div>
        </div>
        <div class="popular__card">
          <img src="assets/hotel-2.jpg" alt="popular hotel" />
          <div class="popular__content">
            <div class="popular__card__header">
              <h4>Ritz Paris</h4>
              <h4>$549</h4>
            </div>
            <p>Paris, France</p>
          </div>
        </div>
        <div class="popular__card">
          <img src="assets/hotel-3.jpg" alt="popular hotel" />
          <div class="popular__content">
            <div class="popular__card__header">
              <h4>The Peninsula</h4>
              <h4>$599</h4>
            </div>
            <p>Hong Kong</p>
          </div>
        </div>
        <div class="popular__card">
          <img src="assets/hotel-4.jpg" alt="popular hotel" />
          <div class="popular__content">
            <div class="popular__card__header">
              <h4>Atlantis The Palm</h4>
              <h4>$449</h4>
            </div>
            <p>Dubai, United Arab Emirates</p>
          </div>
        </div>
        <div class="popular__card">
          <img src="assets/hotel-5.jpg" alt="popular hotel" />
          <div class="popular__content">
            <div class="popular__card__header">
              <h4>The Ritz-Carlton</h4>
              <h4>$649</h4>
            </div>
            <p>Tokyo, Japan</p>
          </div>
        </div>
        <div class="popular__card">
          <img src="assets/hotel-6.jpg" alt="popular hotel" />
          <div class="popular__content">
            <div class="popular__card__header">
              <h4>Marina Bay Sands</h4>
              <h4>$549</h4>
            </div>
            <p>Singapore</p>
          </div>
        </div>
      </div>
    </section>

    <section class="client">
      <div class="section__container client__container">
        <h2 class="section__header">What our client say</h2>
        <div class="client__grid">
          <div class="client__card">
            <img src="assets/client-1.jpg" alt="client" />
            <p>
              The booking process was seamless, and the confirmation was
              instant. I highly recommend WDM&Co for hassle-free hotel bookings.
            </p>
          </div>
          <div class="client__card">
            <img src="assets/client-2.jpg" alt="client" />
            <p>
              The website provided detailed information about hotel, including
              amenities, photos, which helped me make an informed decision.
            </p>
          </div>
          <div class="client__card">
            <img src="assets/client-3.jpg" alt="client" />
            <p>
              I was able to book a room within minutes, and the hotel exceeded
              my expectations. I appreciate WDM&Co's efficiency and reliability.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section__container">
      <div class="reward__container">
        <p>100+ discount codes</p>
        <h4>Join rewards and discover amazing discounts on your booking</h4>
        <button class="reward__btn">Join Rewards</button>
      </div>
    </section>

    <footer class="footer">
      <div class="section__container footer__container">
        <div class="footer__col">
          <h3>WDM&Co</h3>
          <p>
            WDM&Co is a premier hotel booking website that offers a seamless and
            convenient way to find and book accommodations worldwide.
          </p>
          <p>
            With a user-friendly interface and a vast selection of hotels,
            WDM&Co aims to provide a stress-free experience for travelers
            seeking the perfect stay.
          </p>
        </div>
        <div class="footer__col">
          <h4>Company</h4>
          <p>About Us</p>
          <p>Our Team</p>
          <p>Blog</p>
          <p>Book</p>
          <p>Contact Us</p>
        </div>
        <div class="footer__col">
          <h4>Legal</h4>
          <p>FAQs</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div class="footer__col">
          <h4>Resources</h4>
          <p>Social Media</p>
          <p>Help Center</p>
          <p>Partnerships</p>
        </div>
      </div>
      <div class="footer__bar">
        Copyright © 2023 Web Design Mastery. All rights reserved.
      </div>
    </footer>
        </div>
    )
}
export default Home;