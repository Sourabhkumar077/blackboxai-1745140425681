import React, { useState, useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import 'chart.js/auto';

const quotes = [
  "Keep going, you're doing great!",
  "Every day is a new opportunity.",
  "Believe in yourself and all that you are.",
  "Your mental health matters.",
  "Small steps lead to big changes.",
];

const UserDashboardPage = () => {
  const [moodData, setMoodData] = useState([3, 4, 2, 5, 4, 3, 4]);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const mountRef = useRef(null);

  useEffect(() => {
    // Mood mascot Three.js setup
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Simple mood mascot: a colored sphere that changes color based on mood
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshStandardMaterial({ color: getColorForMood(moodData[moodData.length - 1]) });
    const mascot = new THREE.Mesh(geometry, material);
    scene.add(mascot);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 0.8);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      mascot.rotation.y += 0.01;
      mascot.rotation.x += 0.005;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      if (mountRef.current && renderer.domElement.parentNode === mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
    };
  }, [moodData]);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const getColorForMood = (mood) => {
    // Mood scale 1-5, map to colors from red (low) to green (high)
    const colors = ['#ff4d4d', '#ff944d', '#ffd24d', '#a3cef1', '#4da6ff'];
    return colors[mood - 1] || '#a3cef1';
  };

  const data = {
    labels: ['6 days ago', '5 days ago', '4 days ago', '3 days ago', '2 days ago', 'Yesterday', 'Today'],
    datasets: [
      {
        label: 'Mood Level',
        data: moodData,
        fill: false,
        backgroundColor: '#4da6ff',
        borderColor: '#4da6ff',
        tension: 0.3,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        min: 1,
        max: 5,
        ticks: {
          stepSize: 1,
          callback: (value) => ['Very Low', 'Low', 'Neutral', 'High', 'Very High'][value - 1],
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: 'white',
        },
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pastelBlue via-mintGreen to-lightViolet p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-white mb-8">User Dashboard</h1>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white bg-opacity-30 backdrop-blur-md rounded-xl p-6 shadow-lg flex flex-col items-center">
          <h2 className="text-2xl font-semibold text-white mb-4">Mood Mascot</h2>
          <div ref={mountRef} className="w-full h-64" />
        </div>
        <div className="bg-white bg-opacity-30 backdrop-blur-md rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-semibold text-white mb-4">Mood Tracker</h2>
          <Line data={data} options={options} />
        </div>
      </div>
      <motion.div
        className="mt-10 bg-white bg-opacity-30 backdrop-blur-md rounded-xl p-6 max-w-3xl text-center text-white italic shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {quotes[quoteIndex]}
      </motion.div>
    </div>
  );
};

export default UserDashboardPage;
