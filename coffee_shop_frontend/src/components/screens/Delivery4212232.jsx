import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Delivery4212232.css';

// PUBLIC_INTERFACE
/**
 * Delivery screen component - Live delivery tracking
 * Shows map, driver info, delivery status, and progress
 */
function Delivery4212232() {
  const navigate = useNavigate();
  const [timeRemaining, setTimeRemaining] = useState(600); // 10 minutes in seconds
  const [progressSegments, setProgressSegments] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Update progress every 2.5 minutes
    const progressTimer = setInterval(() => {
      setProgressSegments((prev) => Math.min(4, prev + 1));
    }, 150000);

    return () => clearInterval(progressTimer);
  }, []);

  const handleBack = () => {
    navigate('/home');
  };

  const handleCallDriver = () => {
    console.log('Calling driver...');
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    return `${mins} minute${mins !== 1 ? 's' : ''} left`;
  };

  return (
    <div className="screen" id="screen-421-2232">
      {/* Maps Container */}
      <div className="maps-container">
        <img src="/figmaimages/figma_image_421_2234.png" alt="Delivery map" className="maps-image" />
      </div>

      {/* Delivery Route */}
      <img src="/figmaimages/figma_image_421_2266.png" alt="Delivery route" className="delivery-route" />

      {/* Delivery Location Pin */}
      <div className="delivery-location-pin">
        <div className="location-icon-container">
          <div className="location-dot"></div>
          <div className="location-shadow"></div>
        </div>
      </div>

      {/* Driver Icon */}
      <div className="driver-icon-container">
        <img src="/figmaimages/figma_image_421_2268_418_950.png" alt="Driver location" className="driver-bike-icon" />
      </div>

      {/* Delivery Info Header */}
      <div className="delivery-info-header">
        <button className="btn-back-delivery" onClick={handleBack} aria-label="Go back">
          <img src="/figmaimages/figma_image_421_2271_418_820.png" alt="Back" className="back-icon" />
        </button>
        <button className="btn-gps" aria-label="Center map on location">
          <img src="/figmaimages/figma_image_421_2277.png" alt="GPS" className="gps-icon" />
        </button>
      </div>

      {/* Detail Driver Container */}
      <div className="detail-driver-container">
        <div className="drag-indicator"></div>

        {/* Timer Info */}
        <div className="timer-info">
          <h2 className="time-remaining">{formatTime(timeRemaining)}</h2>
          <p className="delivery-address">Delivery to Jl. Kpg Sutoyo</p>
        </div>

        {/* Progress Bar */}
        <div className="progress-bar-container">
          <div className={`progress-segment ${progressSegments >= 1 ? 'active' : ''}`}></div>
          <div className={`progress-segment ${progressSegments >= 2 ? 'active' : ''}`}></div>
          <div className={`progress-segment ${progressSegments >= 3 ? 'active' : ''}`}></div>
          <div className={`progress-segment ${progressSegments >= 4 ? 'active' : ''}`}></div>
        </div>

        {/* Delivery Status Card */}
        <div className="delivery-status-card">
          <div className="delivery-icon-wrapper">
            <img src="/figmaimages/figma_image_421_2247_418_950.png" alt="Delivery" className="delivery-icon" />
          </div>
          <div className="status-text-container">
            <h3 className="status-title">Delivered your order</h3>
            <p className="status-description">We will deliver your goods to you in<br />the shortest possible time.</p>
          </div>
        </div>

        {/* Driver Info */}
        <div className="driver-info-container">
          <div className="driver-profile">
            <div className="driver-avatar-container">
              <img src="/figmaimages/figma_image_421_2239.png" alt="Brooklyn Simmons" className="driver-avatar" />
            </div>
            <div className="driver-name-container">
              <h4 className="driver-name">Brooklyn Simmons</h4>
              <p className="driver-role">Personal Courier</p>
            </div>
          </div>
          <button className="btn-call-driver" onClick={handleCallDriver} aria-label="Call driver">
            <img src="/figmaimages/figma_image_421_2244.png" alt="Call" className="call-icon" />
          </button>
        </div>
      </div>

      {/* Status Bar */}
      <div className="status-bar-top" role="presentation" aria-hidden="true">
        <div className="status-bar-left">
          <img src="/figmaimages/figma_image_421_2284_417_348.png" alt="9:41" className="time-icon" />
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
              <img src="/figmaimages/figma_image_421_2284_417_332.png" alt="Battery indicator" className="battery-img" />
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

export default Delivery4212232;
