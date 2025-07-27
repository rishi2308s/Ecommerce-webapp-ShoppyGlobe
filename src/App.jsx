import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';

// Lazy load components for better performance
const ProductList = lazy(() => import('./components/ProductList'));
const ProductDetail = lazy(() => import('./components/ProductDetail'));
const Cart = lazy(() => import('./components/Cart'));
const NotFound = lazy(() => import('./components/NotFound'));

const App = () => (
  <>
    {/* Site header with navigation */}
    <Header />

    {/* Main content area */}
    <main className="p-4">
      {/* Suspense fallback for lazy-loaded routes */}
      <Suspense fallback={<div className="text-center p-5">Loading...</div>}>
        <Routes>
          {/* Route definitions */}
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </main>
  </>
);

export default App;



