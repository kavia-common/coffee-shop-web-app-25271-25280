import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Order4212004.css';

// PUBLIC_INTERFACE
/**
 * Order screen component - Order checkout and payment
 * Handles delivery type, address, payment method, and order placement
 */
function Order4212004() {
  const navigate = useNavigate();
  const [deliveryType, setDeliveryType] = useState('deliver');
  const [quantity, setQuantity] = useState(1);

  const handleBack = () => {
    navigate(-1);
  };

  const handleDeliveryTypeChange = (type) => {
    setDeliveryType(type);
  };

  const handleQuantityChange = (delta) => {
    setQuantity(Math.max(1, quantity + delta));
  };

  const handleOrder = () => {
    navigate('/delivery');
  };

  return (
    <div className="screen" id="screen-421-2004">
      {/* Status Bar */}
      <div className="status-bar-top" role="presentation" aria-hidden="true">
        <div className="status-bar-left">
          <img src="/figmaimages/figma_image_421_2089_417_348.png" alt="9:41" className="time-icon" />
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
              <img src="/figmaimages/figma_image_421_2089_417_332.png" alt="Battery indicator" className="battery-img" />
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="header-order">
        <button className="btn-back" onClick={handleBack} aria-label="Go back">
          <img src="/figmaimages/figma_image_421_2078_418_820.png" alt="Back" className="back-icon" />
        </button>
        <h1 className="header-title">Order</h1>
      </div>

      {/* Delivery Type Tabs */}
      <div className="delivery-type-section">
        <button 
          className={`delivery-tab ${deliveryType === 'deliver' ? 'active' : ''}`}
          onClick={() => handleDeliveryTypeChange('deliver')}
        >
          <span className="tab-text">Deliver</span>
        </button>
        <button 
          className={`delivery-tab ${deliveryType === 'pickup' ? 'active' : ''}`}
          onClick={() => handleDeliveryTypeChange('pickup')}
        >
          <span className="tab-text">Pick Up</span>
        </button>
      </div>

      {/* Delivery Address Section */}
      <div className="delivery-address-section">
        <div className="address-info">
          <h2 className="section-title">Delivery Address</h2>
          <div className="address-text">
            <h3 className="address-title">Jl. Kpg Sutoyo</h3>
            <p className="address-details">Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai.</p>
          </div>
        </div>
        <div className="edit-options">
          <button className="btn-edit-option">
            <div className="edit-icon-container">
              <img src="/figmaimages/figma_image_421_2059.png" alt="" className="edit-icon" />
            </div>
            <span className="option-text">Edit Address</span>
          </button>
          <button className="btn-edit-option">
            <div className="edit-icon-container">
              <img src="/figmaimages/figma_image_421_2069.png" alt="" className="edit-icon" />
            </div>
            <span className="option-text">Add Note</span>
          </button>
        </div>
      </div>

      {/* Divider Line 1 */}
      <div className="divider-line-1"></div>

      {/* Checkout Product Section */}
      <div className="checkout-product-section">
        <div className="product-details">
          <img src="/figmaimages/figma_image_421_2040.png" alt="Caffe Mocha" className="product-image" />
          <div className="product-info">
            <h3 className="product-name">Caffe Mocha</h3>
            <p className="product-variant">Deep Foam</p>
          </div>
        </div>
        <div className="quantity-controls">
          <button className="btn-quantity" onClick={() => handleQuantityChange(-1)} aria-label="Decrease quantity">
            <div className="minus-icon"></div>
          </button>
          <span className="quantity-value">{quantity}</span>
          <button className="btn-quantity" onClick={() => handleQuantityChange(1)} aria-label="Increase quantity">
            <div className="plus-icon"></div>
          </button>
        </div>
      </div>

      {/* Divider Line 2 */}
      <div className="divider-line-2"></div>

      {/* Discount Section */}
      <div className="discount-section">
        <div className="discount-text">
          <img src="/figmaimages/figma_image_421_2034_418_782.png" alt="" className="discount-icon" />
          <span className="discount-label">1 Discount is Applied</span>
        </div>
        <div className="arrow-icon"></div>
      </div>

      {/* Payment Summary Section */}
      <div className="payment-summary-section">
        <h2 className="section-title">Payment Summary</h2>
        <div className="payment-details">
          <div className="payment-row">
            <span className="payment-label">Price</span>
            <span className="payment-value">$ 4.53</span>
          </div>
          <div className="payment-row">
            <span className="payment-label">Delivery Fee</span>
            <div className="delivery-fee-container">
              <span className="payment-value-strikethrough">$ 2.0</span>
              <span className="payment-value">$ 1.0</span>
            </div>
          </div>
        </div>
        <div className="divider-line" style={{ marginTop: '16px' }}></div>
        <div className="payment-row" style={{ marginTop: '8px' }}>
          <span className="payment-label">Total Payment</span>
          <span className="payment-value">$ {(4.53 * quantity + 1.0).toFixed(2)}</span>
        </div>
      </div>

      {/* Bottom Payment Section */}
      <div className="bottom-payment-section">
        <div className="payment-method">
          <div className="wallet-info">
            <div className="wallet-icon-container">
              <img src="/figmaimages/figma_image_421_2012.png" alt="" className="wallet-icon" />
            </div>
            <div className="payment-text">
              <h3 className="payment-method-label">Cash/Wallet</h3>
              <p className="payment-amount">$ {(4.53 * quantity + 1.0).toFixed(2)}</p>
            </div>
          </div>
          <button className="btn-payment-dropdown" aria-label="Change payment method">
            <img src="/figmaimages/figma_image_421_2018.png" alt="" className="dropdown-icon" />
          </button>
        </div>
        <button className="btn-order" onClick={handleOrder}>
          <span className="btn-text">Order</span>
        </button>
      </div>

      {/* Home Indicator */}
      <div className="home-indicator-container" role="presentation" aria-hidden="true">
        <div className="home-indicator"></div>
      </div>
    </div>
  );
}

export default Order4212004;
