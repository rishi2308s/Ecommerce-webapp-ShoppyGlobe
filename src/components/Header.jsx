import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  // Access cart items from Redux store
  const cart = useSelector((state) => state.cart.items);

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      {/* Site logo */}
      <h1 className="text-xl font-bold">ShoppyGlobe</h1>

      {/* Navigation links */}
      <div className="flex items-center gap-4">
        <Link
          to="/"
          className="bg-white text-blue-600 px-3 py-1 rounded font-semibold hover:bg-blue-100 transition"
        >
          Home
        </Link>

        <Link
          to="/cart"
          className="bg-white text-blue-600 px-3 py-1 rounded font-semibold hover:bg-blue-100 transition"
        >
          Cart 🛒 ({cart.length})
        </Link>
      </div>
    </header>
  );
};

export default Header;


