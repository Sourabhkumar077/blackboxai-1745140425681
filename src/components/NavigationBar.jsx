import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavigationBar = () => {
  const location = useLocation();

  const links = [
    { to: '/', label: 'Home' },
    { to: '/chatbot', label: 'Chatbot' },
    { to: '/assessment', label: 'Assessment' },
    { to: '/therapy-suggestions', label: 'Therapy Suggestions' },
    { to: '/connect-therapists', label: 'Connect Therapists' },
    { to: '/dashboard', label: 'Dashboard' },
    { to: '/login', label: 'Login' },
    { to: '/signup', label: 'Signup' },
    { to: '/profile', label: 'Profile' },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo and Platform Name */}
          <Link to="/" className="flex items-center space-x-2">
            <svg
              className="h-8 w-8 text-blue-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
              <circle cx="12" cy="12" r="10" />
            </svg>
            <span className="font-bold text-xl text-blue-600 select-none">MindEase</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex space-x-4">
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname === to
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
