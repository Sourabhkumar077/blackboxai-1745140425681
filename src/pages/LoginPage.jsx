import React, { useState } from 'react';
import { motion } from 'framer-motion';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy success transition
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pastelBlue via-mintGreen to-lightViolet flex items-center justify-center p-6">
      <motion.form
        onSubmit={handleSubmit}
        className="bg-white bg-opacity-30 backdrop-blur-md rounded-xl p-8 max-w-md w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Login</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-white mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full p-3 rounded bg-white bg-opacity-50 text-gray-800 focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-label="Email"
          />
        </div>
        <div className="mb-4 relative">
          <label htmlFor="password" className="block text-white mb-2">
            Password
          </label>
          <input
            id="password"
            type={showPassword ? 'text' : 'password'}
            className="w-full p-3 rounded bg-white bg-opacity-50 text-gray-800 focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            aria-label="Password"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-9 text-gray-700"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? '🙈' : '👁️'}
          </button>
        </div>
        <button
          type="submit"
          className="w-full bg-pastelBlue text-white py-3 rounded-lg shadow-lg hover:bg-blue-600 transition"
        >
          Login
        </button>
        {success && (
          <motion.p
            className="mt-4 text-green-400 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Login successful!
          </motion.p>
        )}
      </motion.form>
    </div>
  );
};

export default LoginPage;
