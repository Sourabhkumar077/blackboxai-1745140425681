import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProfileSettingsPage = () => {
  const [theme, setTheme] = useState('light');
  const [therapyTypes, setTherapyTypes] = useState({
    CBT: true,
    Meditation: false,
    Journaling: true,
  });

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    // Additional logic to apply theme globally can be added
  };

  const toggleTherapyType = (type) => {
    setTherapyTypes({ ...therapyTypes, [type]: !therapyTypes[type] });
  };

  return (
    <div className={`min-h-screen p-6 ${theme === 'light' ? 'bg-offWhite' : 'bg-gray-900'} flex flex-col items-center`}>
      <motion.div
        className="bg-white bg-opacity-30 backdrop-blur-md rounded-xl p-8 max-w-md w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">Profile Settings</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Theme</h3>
          <button
            onClick={toggleTheme}
            className="px-6 py-3 rounded-lg shadow-lg bg-pastelBlue text-white hover:bg-blue-600 transition"
            aria-label="Toggle light/dark mode"
          >
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
          </button>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Preferred Therapy Types</h3>
          {Object.keys(therapyTypes).map((type) => (
            <label key={type} className="flex items-center mb-2 text-gray-900 dark:text-white cursor-pointer">
              <input
                type="checkbox"
                checked={therapyTypes[type]}
                onChange={() => toggleTherapyType(type)}
                className="mr-2"
                aria-checked={therapyTypes[type]}
              />
              {type}
            </label>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProfileSettingsPage;
