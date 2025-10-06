import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Onboarding4211221 from './components/screens/Onboarding4211221';
import Home4211289 from './components/screens/Home4211289';
import DetailItem4211845 from './components/screens/DetailItem4211845';
import Order4212004 from './components/screens/Order4212004';
import Delivery4212232 from './components/screens/Delivery4212232';
import './App.css';

// PUBLIC_INTERFACE
/**
 * Main App component with routing
 * Routes:
 * - / : Onboarding screen
 * - /home : Home screen with product grid
 * - /detail/:id : Product detail screen
 * - /order : Order checkout screen
 * - /delivery : Delivery tracking screen
 */
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Onboarding4211221 />} />
          <Route path="/home" element={<Home4211289 />} />
          <Route path="/detail/:id" element={<DetailItem4211845 />} />
          <Route path="/order" element={<Order4212004 />} />
          <Route path="/delivery" element={<Delivery4212232 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
