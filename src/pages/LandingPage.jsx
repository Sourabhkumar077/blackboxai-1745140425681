import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as THREE from 'three';

const LandingPage = () => {
  const navigate = useNavigate();
  const mountRef = useRef(null);

  useEffect(() => {
    // Three.js scene setup for 3D animated element in hero section
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create a rotating torus knot as 3D element
    const geometry = new THREE.TorusKnotGeometry(1, 0.4, 100, 16);
    const material = new THREE.MeshStandardMaterial({
      color: 0x4f46e5,
      emissive: 0x3b82f6,
      emissiveIntensity: 0.5,
      metalness: 0.7,
      roughness: 0.2,
    });
    const torusKnot = new THREE.Mesh(geometry, material);
    scene.add(torusKnot);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0x3b82f6, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      torusKnot.rotation.x += 0.01;
      torusKnot.rotation.y += 0.015;
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup on unmount
    return () => {
      if (mountRef.current && renderer.domElement.parentNode === mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
    };
  }, []);

  // Custom cursor effect
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.style.width = '20px';
    cursor.style.height = '20px';
    cursor.style.border = '2px solid #4f46e5';
    cursor.style.borderRadius = '50%';
    cursor.style.position = 'fixed';
    cursor.style.pointerEvents = 'none';
    cursor.style.transform = 'translate(-50%, -50%)';
    cursor.style.transition = 'transform 0.15s ease-out, background-color 0.15s ease-out';
    cursor.style.zIndex = '9999';
    document.body.appendChild(cursor);

    const moveCursor = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    const clickCursor = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
      cursor.style.backgroundColor = 'rgba(79, 70, 229, 0.3)';
      setTimeout(() => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.backgroundColor = 'transparent';
      }, 300);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('click', clickCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('click', clickCursor);
      document.body.removeChild(cursor);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Hero Section */}
      <header className="relative flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-24 z-10">
        <div className="md:w-1/2 space-y-6">
          <motion.h1
            className="text-6xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            MindEase
          </motion.h1>
          <motion.p
            className="text-xl text-indigo-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            AI-Powered Mental Health Therapy Platform
          </motion.p>
          <motion.div
            className="flex space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <button
              onClick={() => navigate('/assessment')}
              className="bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-lg font-semibold shadow-lg transition"
            >
              Start Mood Check
            </button>
            <button
              onClick={() => navigate('/chatbot')}
              className="bg-transparent border border-indigo-600 hover:bg-indigo-600 hover:text-white px-8 py-3 rounded-lg font-semibold shadow-lg transition"
            >
              Talk to Our AI
            </button>
          </motion.div>
        </div>
        <div
          className="md:w-1/2 w-full h-96 mt-12 md:mt-0"
          ref={mountRef}
          aria-label="3D animated hero element"
        />
      </header>

      {/* Features Section */}
      <section className="bg-indigo-800 bg-opacity-70 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Why Choose MindEase?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-indigo-100">
            <div className="p-6 border border-indigo-600 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold mb-4">Personalized Assessments</h3>
              <p>
                Get mood and mental health assessments tailored to your current state.
              </p>
            </div>
            <div className="p-6 border border-indigo-600 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold mb-4">Therapy Suggestions</h3>
              <p>
                Receive personalized therapy suggestions based on your assessment results.
              </p>
            </div>
            <div className="p-6 border border-indigo-600 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold mb-4">Connect with Therapists</h3>
              <p>
                Easily find and connect with licensed therapists for professional support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-indigo-900 py-20 text-center text-indigo-200">
        <h2 className="text-4xl font-bold mb-6">Ready to Take Control of Your Mental Health?</h2>
        <p className="max-w-3xl mx-auto mb-8">
          Sign up or log in to access your personalized dashboard, track your progress, and start your journey to better mental health.
        </p>
        <div className="flex justify-center space-x-6">
          <button
            onClick={() => navigate('/signup')}
            className="bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-lg font-semibold shadow-lg transition"
          >
            Sign Up
          </button>
          <button
            onClick={() => navigate('/login')}
            className="bg-transparent border border-indigo-600 hover:bg-indigo-600 hover:text-white px-8 py-3 rounded-lg font-semibold shadow-lg transition"
          >
            Log In
          </button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
