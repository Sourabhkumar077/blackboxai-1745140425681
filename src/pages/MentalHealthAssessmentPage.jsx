import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PHQ9_QUESTIONS = [
  "Little interest or pleasure in doing things",
  "Feeling down, depressed, or hopeless",
  "Trouble falling or staying asleep, or sleeping too much",
  "Feeling tired or having little energy",
  "Poor appetite or overeating",
  "Feeling bad about yourself — or that you are a failure or have let yourself or your family down",
  "Trouble concentrating on things, such as reading the newspaper or watching television",
  "Moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless that you have been moving a lot more than usual",
  "Thoughts that you would be better off dead or of hurting yourself in some way"
];

const GAD7_QUESTIONS = [
  "Feeling nervous, anxious, or on edge",
  "Not being able to stop or control worrying",
  "Worrying too much about different things",
  "Trouble relaxing",
  "Being so restless that it's hard to sit still",
  "Becoming easily annoyed or irritable",
  "Feeling afraid as if something awful might happen"
];

const MentalHealthAssessmentPage = () => {
  const [quizType, setQuizType] = useState(null); // 'PHQ9' or 'GAD7'
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const questions = quizType === 'PHQ9' ? PHQ9_QUESTIONS : GAD7_QUESTIONS;

  const handleAnswer = (score) => {
    setAnswers([...answers, score]);
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const calculateScore = () => {
    return answers.reduce((acc, val) => acc + val, 0);
  };

  const interpretScore = () => {
    const score = calculateScore();
    if (quizType === 'PHQ9') {
      if (score <= 4) return 'Minimal depression';
      if (score <= 9) return 'Mild depression';
      if (score <= 14) return 'Moderate depression';
      if (score <= 19) return 'Moderately severe depression';
      return 'Severe depression';
    } else if (quizType === 'GAD7') {
      if (score <= 4) return 'Minimal anxiety';
      if (score <= 9) return 'Mild anxiety';
      if (score <= 14) return 'Moderate anxiety';
      return 'Severe anxiety';
    }
    return '';
  };

  const options = [
    { label: "Not at all", score: 0 },
    { label: "Several days", score: 1 },
    { label: "More than half the days", score: 2 },
    { label: "Nearly every day", score: 3 },
  ];

  const resetQuiz = () => {
    setQuizType(null);
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setShowResult(false);
  };

  if (!quizType) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pastelBlue via-mintGreen to-lightViolet flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-bold text-white mb-8">Choose a Mental Health Assessment</h1>
        <div className="flex gap-6">
          <button
            onClick={() => setQuizType('PHQ9')}
            className="bg-white bg-opacity-30 backdrop-blur-md text-white px-8 py-4 rounded-lg shadow-lg hover:bg-opacity-50 transition"
          >
            PHQ-9 (Depression)
          </button>
          <button
            onClick={() => setQuizType('GAD7')}
            className="bg-white bg-opacity-30 backdrop-blur-md text-white px-8 py-4 rounded-lg shadow-lg hover:bg-opacity-50 transition"
          >
            GAD-7 (Anxiety)
          </button>
        </div>
      </div>
    );
  }

  if (showResult) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pastelBlue via-mintGreen to-lightViolet flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Your {quizType} Assessment Result</h2>
        <motion.div
          className="bg-white bg-opacity-30 backdrop-blur-md rounded-lg p-8 max-w-md mx-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-white text-xl mb-4">Score: {calculateScore()}</p>
          <p className="text-white text-lg font-semibold">{interpretScore()}</p>
          <button
            onClick={resetQuiz}
            className="mt-6 bg-white bg-opacity-30 backdrop-blur-md text-white px-6 py-3 rounded-lg shadow-lg hover:bg-opacity-50 transition"
          >
            Retake Quiz
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pastelBlue via-mintGreen to-lightViolet flex flex-col items-center justify-center p-6">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">
        {quizType} Assessment
      </h2>
      <div className="w-full max-w-xl bg-white bg-opacity-30 backdrop-blur-md rounded-lg p-6">
        <p className="text-white text-lg mb-4">{questions[currentQuestionIndex]}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {options.map((option) => (
            <motion.button
              key={option.label}
              onClick={() => handleAnswer(option.score)}
              className="bg-white bg-opacity-50 text-gray-800 rounded-lg p-4 hover:bg-opacity-70 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Answer option: ${option.label}`}
            >
              {option.label}
            </motion.button>
          ))}
        </div>
        <div className="mt-6 h-4 bg-white bg-opacity-20 rounded-full overflow-hidden">
          <motion.div
            className="h-4 bg-pastelBlue"
            initial={{ width: 0 }}
            animate={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </div>
  );
};

export default MentalHealthAssessmentPage;
