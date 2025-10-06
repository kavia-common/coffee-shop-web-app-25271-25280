import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home4211289.css';

// PUBLIC_INTERFACE
/**
 * Home screen component - Main browsing screen with product grid
 * Displays coffee products, categories, search, and navigation
 */
function Home4211289() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeNav, setActiveNav] = useState('home');

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const handleNavChange = (nav) => {
    setActiveNav(nav);
  };

  const handleProductClick = (productId) => {
    navigate(`/detail/${productId}`);
  };

  return (
    <div className="screen" id="screen-421-1289">
      {/* Status Bar */}
      <div className="status-bar-top" role="presentation" aria-hidden="true">
        <div className="status-bar-left">
          <img src="/figmaimages/figma_image_421_1399_417_348.png" alt="9:41" className="time-icon" />
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
              <img src="/figmaimages/figma_image_421_1399_417_332.png" alt="Battery indicator" className="battery-img" />
            </div>
          </div>
        </div>
      </div>

      {/* Top Section */}
      <div className="top-section">
        <div className="top-container-bg"></div>
        
        {/* Location & Profile */}
        <div className="location-profile">
          <div className="location-container">
            <p className="location-label">Location</p>
            <div className="your-location">
              <span className="location-text">Bilzen, Tanjungbalai</span>
              <div className="location-arrow"></div>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="search-bar-container">
          <div className="search-input">
            <div className="search-icon">
              <img src="/figmaimages/figma_image_421_1386_418_730.png" alt="Search" className="search-icon-img" />
            </div>
            <input type="text" placeholder="Search coffee" className="search-field" aria-label="Search for coffee" />
          </div>
          <button className="filter-button" aria-label="Filter results">
            <div className="filter-icon"></div>
          </button>
        </div>

        {/* Banner */}
        <div className="banner-container">
          <img src="/figmaimages/figma_image_421_1370.png" alt="Promo Banner" className="banner-image" />
          <div className="promo-details">
            <div className="promo-badge">
              <span className="promo-text">Promo</span>
            </div>
            <div className="promo-text-container">
              <img src="/figmaimages/figma_image_421_1375.png" alt="" className="promo-line-1" aria-hidden="true" />
              <img src="/figmaimages/figma_image_421_1376.png" alt="" className="promo-line-2" aria-hidden="true" />
              <h2 className="promo-heading">Buy one get one FREE</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Category Section */}
      <div className="category-section">
        {/* Category Tabs */}
        <div className="category-tabs">
          <button 
            className={`category-tab ${activeCategory === 'all' ? 'active' : ''}`} 
            onClick={() => handleCategoryChange('all')}
          >
            <span className="tab-text">All Coffee</span>
          </button>
          <button 
            className={`category-tab ${activeCategory === 'machiato' ? 'active' : ''}`} 
            onClick={() => handleCategoryChange('machiato')}
          >
            <span className="tab-text">Machiato</span>
          </button>
          <button 
            className={`category-tab ${activeCategory === 'latte' ? 'active' : ''}`} 
            onClick={() => handleCategoryChange('latte')}
          >
            <span className="tab-text">Latte</span>
          </button>
          <button 
            className={`category-tab ${activeCategory === 'americano' ? 'active' : ''}`} 
            onClick={() => handleCategoryChange('americano')}
          >
            <span className="tab-text">Americano</span>
          </button>
        </div>

        {/* Product Grid */}
        <div className="product-grid">
          {/* Product Card 1 */}
          <div className="product-card" onClick={() => handleProductClick(1)}>
            <div className="product-image-container">
              <img src="/figmaimages/figma_image_421_1304_417_715.png" alt="Caffe Mocha" className="product-image" />
              <div className="rating-badge">
                <img src="/figmaimages/figma_image_421_1308.png" alt="Star" className="star-icon" />
                <span className="rating-text">4.8</span>
              </div>
            </div>
            <div className="product-details">
              <div className="product-text">
                <h3 className="product-name">Caffe Mocha</h3>
                <p className="product-subtitle">Deep Foam</p>
              </div>
              <div className="product-footer">
                <span className="product-price">$ 4.53</span>
                <button className="btn-add-item" aria-label="Add Caffe Mocha to cart" onClick={(e) => e.stopPropagation()}>
                  <img src="/figmaimages/figma_image_421_1317.png" alt="Add" className="add-icon" />
                </button>
              </div>
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="product-card" onClick={() => handleProductClick(2)}>
            <div className="product-image-container">
              <img src="/figmaimages/figma_image_421_1320_417_717.png" alt="Flat White" className="product-image" />
              <div className="rating-badge">
                <img src="/figmaimages/figma_image_421_1308.png" alt="Star" className="star-icon" />
                <span className="rating-text">4.8</span>
              </div>
            </div>
            <div className="product-details">
              <div className="product-text">
                <h3 className="product-name">Flat White</h3>
                <p className="product-subtitle">Espresso</p>
              </div>
              <div className="product-footer">
                <span className="product-price">$ 3.53</span>
                <button className="btn-add-item" aria-label="Add Flat White to cart" onClick={(e) => e.stopPropagation()}>
                  <img src="/figmaimages/figma_image_421_1317.png" alt="Add" className="add-icon" />
                </button>
              </div>
            </div>
          </div>

          {/* Product Card 3 */}
          <div className="product-card" onClick={() => handleProductClick(3)}>
            <div className="product-image-container">
              <img src="/figmaimages/figma_image_421_1352_417_716.png" alt="Mocha Fusi" className="product-image" />
              <div className="rating-badge">
                <img src="/figmaimages/figma_image_421_1308.png" alt="Star" className="star-icon" />
                <span className="rating-text">4.8</span>
              </div>
            </div>
            <div className="product-details">
              <div className="product-text">
                <h3 className="product-name">Mocha Fusi</h3>
                <p className="product-subtitle">Ice/Hot</p>
              </div>
              <div className="product-footer">
                <span className="product-price">$ 7.53</span>
                <button className="btn-add-item" aria-label="Add Mocha Fusi to cart" onClick={(e) => e.stopPropagation()}>
                  <img src="/figmaimages/figma_image_421_1317.png" alt="Add" className="add-icon" />
                </button>
              </div>
            </div>
          </div>

          {/* Product Card 4 */}
          <div className="product-card" onClick={() => handleProductClick(4)}>
            <div className="product-image-container">
              <img src="/figmaimages/figma_image_421_1336_417_718.png" alt="Caffe Panna" className="product-image" />
              <div className="rating-badge">
                <img src="/figmaimages/figma_image_421_1308.png" alt="Star" className="star-icon" />
                <span className="rating-text">4.8</span>
              </div>
            </div>
            <div className="product-details">
              <div className="product-text">
                <h3 className="product-name">Caffe Panna</h3>
                <p className="product-subtitle">Ice/Hot</p>
              </div>
              <div className="product-footer">
                <span className="product-price">$ 5.53</span>
                <button className="btn-add-item" aria-label="Add Caffe Panna to cart" onClick={(e) => e.stopPropagation()}>
                  <img src="/figmaimages/figma_image_421_1317.png" alt="Add" className="add-icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <button 
          className={`nav-button ${activeNav === 'home' ? 'active' : ''}`} 
          onClick={() => handleNavChange('home')}
          aria-label="Home"
        >
          <div className="nav-icon-container">
            <img src="/figmaimages/figma_image_421_1394.png" alt="" className="nav-icon" />
          </div>
          <div className="nav-dot"></div>
        </button>

        <button 
          className={`nav-button ${activeNav === 'favorites' ? 'active' : ''}`} 
          onClick={() => handleNavChange('favorites')}
          aria-label="Favorites"
        >
          <div className="nav-icon-container">
            <img src="/figmaimages/figma_image_421_1396_418_754.png" alt="" className="nav-icon" />
          </div>
        </button>

        <button 
          className={`nav-button ${activeNav === 'cart' ? 'active' : ''}`} 
          onClick={() => handleNavChange('cart')}
          aria-label="Shopping Cart"
        >
          <div className="nav-icon-container">
            <img src="/figmaimages/figma_image_421_1397_418_801.png" alt="" className="nav-icon" />
          </div>
        </button>

        <button 
          className={`nav-button ${activeNav === 'notifications' ? 'active' : ''}`} 
          onClick={() => handleNavChange('notifications')}
          aria-label="Notifications"
        >
          <div className="nav-icon-container">
            <img src="/figmaimages/figma_image_421_1398_418_746.png" alt="" className="nav-icon" />
          </div>
        </button>
      </div>

      {/* Home Indicator */}
      <div className="home-indicator-container" role="presentation" aria-hidden="true">
        <div className="home-indicator"></div>
      </div>
    </div>
  );
}

export default Home4211289;
