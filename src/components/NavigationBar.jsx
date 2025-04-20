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
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
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
