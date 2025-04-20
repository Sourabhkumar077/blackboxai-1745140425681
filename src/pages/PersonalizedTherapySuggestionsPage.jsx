import React from 'react';
import { motion } from 'framer-motion';

const therapyTechniques = [
  {
    id: 1,
    title: 'Cognitive Behavioral Therapy (CBT)',
    description: 'A structured, time-limited therapy that helps identify and change negative thought patterns.',
    icon: '🧠',
    animation: null, // Placeholder for Lottie or SVG animation
  },
  {
    id: 2,
    title: 'Meditation',
    description: 'Practice mindfulness and relaxation techniques to reduce stress and improve focus.',
    icon: '🧘‍♂️',
    animation: null,
  },
  {
    id: 3,
    title: 'Journaling',
    description: 'Express your thoughts and feelings through writing to gain insight and emotional release.',
    icon: '📓',
    animation: null,
  },
  {
    id: 4,
    title: 'Breathing Exercises',
    description: 'Simple breathing techniques to calm the mind and body during stressful moments.',
    icon: '🌬️',
    animation: null,
  },
];

const cardVariants = {
  hover: {
    scale: 1.05,
    rotateY: 10,
    transition: { duration: 0.3 },
  },
  tap: {
    scale: 0.95,
    rotateY: 0,
  },
};

const PersonalizedTherapySuggestionsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pastelBlue via-mintGreen to-lightViolet p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-white mb-8">Personalized Therapy Suggestions</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl w-full">
        {therapyTechniques.map((technique) => (
          <motion.div
            key={technique.id}
            className="bg-white bg-opacity-30 backdrop-blur-md rounded-xl p-6 shadow-lg cursor-pointer flex flex-col items-center text-center"
            whileHover="hover"
            whileTap="tap"
            variants={cardVariants}
          >
            <div className="text-6xl mb-4">{technique.icon}</div>
            <h2 className="text-xl font-semibold text-white mb-2">{technique.title}</h2>
            <p className="text-white text-sm">{technique.description}</p>
            {/* Placeholder for Lottie or SVG animation */}
            <div className="mt-4 w-full h-24 bg-white bg-opacity-20 rounded-lg flex items-center justify-center text-white italic">
              Animation Placeholder
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PersonalizedTherapySuggestionsPage;
