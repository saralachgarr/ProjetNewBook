import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaMapMarkerAlt } from 'react-icons/fa';
import './DestinationsCarousel.css';
import parisImage from './assets/paris.jpg';
import tokyoImage from './assets/tokyo.jpg';
import nycImage from './assets/nyc.jpg';
import baliImage from './assets/bali.jpg';
import bangkokImage from './assets/bangkook.jpg';
import romeImage from './assets/rome.jpg';
import santoriniImage from './assets/santorini.jpg';




const DestinationsCarousel = () => {
  const destinations = [
  {
    name: 'Bangkook',
    description: 'Vibrant city with stunning temples and street food',
    image: bangkokImage,
    rating: 4.8,
    price: '$599'
  },
  {
    name: 'Rome',
    description: 'Historical city filled with ancient architecture and culture',
    image: romeImage,
    rating: 4.7,
    price: '$699'
  },
  {
    name: 'Paris',
    description: 'Romantic city with iconic landmarks',
    image: parisImage,
    rating: 4.9,
    price: '$899'
  },
  {
    name: 'Santorini',
    description: 'Beautiful island with white-washed buildings and blue domes',
    image: santoriniImage,
    rating: 4.8,
    price: '$749'
  },
  {
    name: 'Tokyo',
    description: 'Futuristic city blending tradition and innovation',
    image: tokyoImage,
    rating: 4.8,
    price: '$1099'
  },
  {
    name: 'New York',
    description: 'The city that never sleeps, filled with landmarks and culture',
    image: nycImage,
    rating: 4.7,
    price: '$849'
  }
];


  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3); // Number of cards visible

  useEffect(() => {
    // Handle responsive number of cards
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          (prevIndex + 1) % (destinations.length - visibleCards + 1)
        );
      }, 5000);
    }
    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(interval);
    };
  }, [isAutoPlaying, destinations.length, visibleCards]);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? destinations.length - visibleCards : prevIndex - 1
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % (destinations.length - visibleCards + 1)
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      goToNext();
    }

    if (touchStart - touchEnd < -50) {
      goToPrev();
    }
  };

  return (
    <section className="destinations-carousel">
      <div className="section-header">
        <h2>Top Destinations For Your Next Vacation</h2>
        <p>Discover the most popular travel spots around the world</p>
      </div>
      
      <div className="carousel-wrapper">
        <button className="carousel-button prev" onClick={goToPrev}>
          <FaChevronLeft />
        </button>
        
        <div 
          className="carousel-container"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{
            '--visible-cards': visibleCards,
            '--current-index': currentIndex
          }}
        >
          {destinations.map((destination, index) => (
            <div 
              key={index}
              className={`destination-card ${index >= currentIndex && index < currentIndex + visibleCards ? 'visible' : ''}`}
            >
              <div 
                className="card-image"
                style={{ backgroundImage: `url(${destination.image})` }}
              >
                <div className="card-badge">
                  <span className="rating">{destination.rating}</span>
                  <span className="icon">⭐</span>
                </div>
              </div>
              <div className="card-content">
                <h3>{destination.name}</h3>
                <p>{destination.description}</p>
                <div className="card-footer">
                  <div className="location">
                    <FaMapMarkerAlt className="marker-icon" />
                    <span>{destination.name}</span>
                  </div>
                  <div className="price">{destination.price}</div>
                </div>
                <button className="explore-btn">Explore Packages</button>
              </div>
            </div>
          ))}
        </div>
        
        <button className="carousel-button next" onClick={goToNext}>
          <FaChevronRight />
        </button>
      </div>
      
      <div className="carousel-dots">
        {Array.from({ length: destinations.length - visibleCards + 1 }).map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default DestinationsCarousel;