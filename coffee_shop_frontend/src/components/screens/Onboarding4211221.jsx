import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Onboarding4211221.css';

// PUBLIC_INTERFACE
/**
 * Onboarding screen component - First screen users see
 * Displays welcome message and coffee image with "Get Started" button
 */
function Onboarding4211221() {
  const navigate = useNavigate();

  useEffect(() => {
    // Add entrance animations
    const heading = document.querySelector('.heading');
    const description = document.querySelector('.description');
    const button = document.querySelector('.btn-get-started');

    if (heading && description && button) {
      setTimeout(() => {
        heading.style.opacity = '1';
        heading.style.transform = 'translateY(0)';
      }, 100);

      setTimeout(() => {
        description.style.opacity = '1';
        description.style.transform = 'translateY(0)';
      }, 300);

      setTimeout(() => {
        button.style.opacity = '1';
        button.style.transform = 'translateY(0)';
      }, 500);
    }
  }, []);

  const handleGetStarted = () => {
    navigate('/home');
  };

  return (
    <div className="screen" id="screen-421-1221">
      {/* Image Onboarding Section */}
      <div className="image-onboarding">
        <div className="coffee-image-container">
          <img 
            src="/figmaimages/figma_image_421_1223_417_719.png" 
            alt="Coffee cup with latte art" 
            className="coffee-image"
          />
        </div>
      </div>

      {/* Content Container */}
      <div className="content-container">
        <div className="shadow-container"></div>
        
        {/* Text Content */}
        <div className="text-content">
          <h1 className="heading">Fall in Love with Coffee in Blissful Delight!</h1>
          <p className="description">Welcome to our cozy coffee corner, where every cup is a delightful for you.</p>
        </div>

        {/* Get Started Button */}
        <button className="btn-get-started" onClick={handleGetStarted} aria-label="Get started with the coffee shop app">
          <span>Get Started</span>
        </button>
      </div>

      {/* iPhone Status Bar */}
      <div className="status-bar-top" role="presentation" aria-hidden="true">
        <div className="status-bar-left">
          <img src="/figmaimages/figma_image_421_1232_417_348.png" alt="9:41" className="time-icon" />
        </div>
        <div className="status-bar-right">
          <div className="status-icons">
            <div className="signal-bars">
              <span className="bar bar-1"></span>
              <span className="bar bar-2"></span>
              <span className="bar bar-3"></span>
              <span className="bar bar-4"></span>
            </div>
            <div className="wifi-icon"></div>
            <div className="battery-icon">
              <img src="/figmaimages/figma_image_421_1232_417_332.png" alt="Battery indicator" className="battery-img" />
            </div>
          </div>
        </div>
      </div>

      {/* Home Indicator */}
      <div className="home-indicator-container" role="presentation" aria-hidden="true">
        <div className="home-indicator"></div>
      </div>
    </div>
  );
}

export default Onboarding4211221;
