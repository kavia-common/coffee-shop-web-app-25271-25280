import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './DetailItem4211845.css';

// PUBLIC_INTERFACE
/**
 * Detail Item screen component - Product detail view
 * Shows product information, size selection, and buy now button
 */
function DetailItem4211845() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('M');
  const [isFavorite, setIsFavorite] = useState(false);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  const handleBack = () => {
    navigate(-1);
  };

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleBuyNow = () => {
    navigate('/order');
  };

  const toggleDescription = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };

  return (
    <div className="screen" id="screen-421-1845">
      {/* Status Bar */}
      <div className="status-bar-top" role="presentation" aria-hidden="true">
        <div className="status-bar-left">
          <img src="/figmaimages/figma_image_421_1892_417_348.png" alt="9:41" className="time-icon" />
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
              <img src="/figmaimages/figma_image_421_1892_417_332.png" alt="Battery indicator" className="battery-img" />
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="header-detail">
        <button className="btn-back" onClick={handleBack} aria-label="Go back">
          <img src="/figmaimages/figma_image_421_1888_418_820.png" alt="Back" className="back-icon" />
        </button>
        <h1 className="header-title">Detail</h1>
        <button 
          className={`btn-favorite ${isFavorite ? 'active' : ''}`} 
          onClick={handleFavorite}
          aria-label="Add to favorites"
        >
          <img src="/figmaimages/figma_image_421_1891_418_754.png" alt="Favorite" className="favorite-icon" />
        </button>
      </div>

      {/* Product Image */}
      <div className="product-image-container">
        <img src="/figmaimages/figma_image_421_1885_417_715.png" alt="Caffe Mocha" className="product-image" />
      </div>

      {/* Product Details Section */}
      <div className="product-details-section">
        <div className="product-header">
          <div className="product-info">
            <div className="product-name-container">
              <h2 className="product-name">Caffe Mocha</h2>
              <p className="product-type">Ice/Hot</p>
            </div>
            <div className="product-rating">
              <div className="rating-icon-container">
                <img src="/figmaimages/figma_image_421_1874.png" alt="Star" className="star-icon" />
              </div>
              <span className="rating-text">4.8 (230)</span>
            </div>
          </div>
          <div className="product-features">
            <div className="feature-item">
              <img src="/figmaimages/figma_image_421_1879.png" alt="Fast Delivery" className="feature-icon" />
            </div>
            <div className="feature-item">
              <div className="bean-icon"></div>
            </div>
            <div className="feature-item">
              <div className="milk-icon"></div>
            </div>
          </div>
        </div>
        <div className="divider-line"></div>
      </div>

      {/* Description Section */}
      <div className="description-section">
        <h3 className="section-title">Description</h3>
        <p className="description-text" style={{ height: isDescriptionExpanded ? 'auto' : '63px' }}>
          A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee and 85ml of fresh milk the fo.. 
          <span className="read-more" onClick={toggleDescription}>
            {isDescriptionExpanded ? 'Read Less' : 'Read More'}
          </span>
        </p>
      </div>

      {/* Size Selection Section */}
      <div className="size-section">
        <h3 className="section-title">Size</h3>
        <div className="size-options">
          <button 
            className={`size-option ${selectedSize === 'S' ? 'active' : ''}`} 
            onClick={() => handleSizeSelect('S')}
          >
            <span className="size-label">S</span>
          </button>
          <button 
            className={`size-option ${selectedSize === 'M' ? 'active' : ''}`} 
            onClick={() => handleSizeSelect('M')}
          >
            <span className="size-label">M</span>
          </button>
          <button 
            className={`size-option ${selectedSize === 'L' ? 'active' : ''}`} 
            onClick={() => handleSizeSelect('L')}
          >
            <span className="size-label">L</span>
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bottom-section">
        <div className="price-container">
          <span className="price-label">Price</span>
          <span className="price-value">$ 4.53</span>
        </div>
        <button className="btn-buy-now" onClick={handleBuyNow}>
          <span className="btn-text">Buy Now</span>
        </button>
      </div>

      {/* Home Indicator */}
      <div className="home-indicator-container" role="presentation" aria-hidden="true">
        <div className="home-indicator"></div>
      </div>
    </div>
  );
}

export default DetailItem4211845;
