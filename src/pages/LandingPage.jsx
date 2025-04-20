import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 via-purple-700 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl font-extrabold mb-6 leading-tight">
              AI-Powered Mental Health Therapy
            </h1>
            <p className="text-lg mb-8 text-gray-200">
              Personalized, compassionate support at your fingertips. Take control of your mental health journey today.
            </p>
            <div className="flex justify-center md:justify-start gap-6">
              <button
                onClick={() => navigate('/assessment')}
                className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"
              >
                Start Mood Check
              </button>
              <button
                onClick={() => navigate('/chatbot')}
                className="bg-transparent border border-white text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-white hover:text-blue-700 transition"
              >
                Talk to Our AI
              </button>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-white w-64 h-64 animate-pulse"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6l4 2"
              />
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={1.5} fill="none" />
            </svg>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Why Choose Our Platform?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center p-6 border rounded-lg shadow hover:shadow-lg transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-blue-600 w-16 h-16 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 17a4 4 0 100-8 4 4 0 000 8z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">Personalized Assessments</h3>
              <p className="text-gray-600">Get mood and mental health assessments tailored to your current state.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 border rounded-lg shadow hover:shadow-lg transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-purple-600 w-16 h-16 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A12.083 12.083 0 0112 21.5a12.083 12.083 0 01-6.825-3.443 12.083 12.083 0 01.665-6.479L12 14z" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">Therapy Suggestions</h3>
              <p className="text-gray-600">Receive personalized therapy suggestions based on your assessment results.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 border rounded-lg shadow hover:shadow-lg transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-pink-600 w-16 h-16 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v6a3 3 0 01-3 3H9a3 3 0 01-3-3V9" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">Connect with Therapists</h3>
              <p className="text-gray-600">Easily find and connect with licensed therapists for professional support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">What Our Users Say</h2>
          <blockquote className="italic text-gray-700 text-lg max-w-3xl mx-auto">
            "This platform has transformed how I manage my mental health. The AI-powered tools and therapist connections are invaluable."
          </blockquote>
          <cite className="block mt-4 font-semibold text-gray-900">- Alex P.</cite>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Take Control of Your Mental Health?</h2>
          <p className="mb-8 text-lg max-w-2xl mx-auto">
            Sign up or log in to access your personalized dashboard, track your progress, and start your journey to better mental health.
          </p>
          <div className="flex justify-center gap-6">
            <button
              onClick={() => navigate('/signup')}
              className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"
            >
              Sign Up
            </button>
            <button
              onClick={() => navigate('/login')}
              className="bg-transparent border border-white text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-white hover:text-blue-700 transition"
            >
              Log In
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; 2024 Mental Health Therapy Platform. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-white">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.997.108-.775.418-1.305.76-1.605-2.665-.3-5.466-1.335-5.466-5.93 0-1.31.47-2.38 1.235-3.22-.125-.303-.535-1.523.115-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 0 1 3-.405c1.02.005 2.045.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.655 1.653.245 2.873.12 3.176.77.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.37.81 1.1.81 2.22 0 1.605-.015 2.895-.015 3.285 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-white">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.954 4.569c-.885.39-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.724-.949.555-2.005.959-3.127 1.184-.897-.959-2.178-1.559-3.594-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.083-.205-7.702-2.158-10.126-5.134-.423.722-.666 1.561-.666 2.475 0 1.708.87 3.213 2.188 4.096-.807-.026-1.566-.247-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.318-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.179 1.394 4.768 2.209 7.557 2.209 9.054 0 14-7.496 14-13.986 0-.21 0-.423-.015-.633.962-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-white">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.351C0 23.4.6 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.59l-.467 3.622h-3.123V24h6.116c.725 0 1.325-.6 1.325-1.324V1.325C24 .6 23.4 0 22.675 0z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
