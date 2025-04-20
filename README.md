# AI-Powered Personalized Mental Health Therapy Platform

## Overview
This project is a modern, animated, full-stack mental health therapy platform built with React.js. It features a calming, modern, and fully responsive UI with advanced animations and 3D elements. The platform includes multiple pages such as a landing page, chatbot, mental health assessments, personalized therapy suggestions, therapist connections, user dashboard, and profile management.

## Technologies Used
- React.js (Functional Components & Hooks)
- TailwindCSS for styling
- Framer Motion and GSAP for animations
- Three.js for 3D elements
- Lenis.js or Locomotive Scroll for smooth scrolling
- Chart.js or Recharts for data visualization
- Optional dummy backend logic for chatbot and quiz analysis

## Design Principles
- Calming pastel color palette (pastel blue, mint green, light violet, off-white)
- Modern UI patterns: glassmorphism, neumorphism, gradient overlays
- Smooth, natural, and accessible animations
- Fully responsive and mobile-first design
- Modular and reusable component structure

## Project Structure
```
/src
  /assets          # Images, 3D models, animations
  /components      # Reusable UI components (buttons, cards, modals, etc.)
  /pages           # Page components (Landing, Chatbot, Assessment, Therapy, Connect, Dashboard, Profile)
  /utils           # Helper functions and utilities
  App.js           # Main app component with routing
  index.js         # Entry point
/tailwind.config.js
/postcss.config.js
/package.json
/README.md
```

## Implementation Plan

### 1. Setup
- Initialize React app (e.g., using Create React App or Vite)
- Install dependencies: TailwindCSS, Framer Motion, GSAP, Three.js, Lenis.js, Chart.js/Recharts
- Configure TailwindCSS and PostCSS
- Setup routing with React Router

### 2. Landing Page
- Gradient background with particle or wave effect
- 3D floating brain animation using Three.js
- Smooth entry animations for text and buttons (Framer Motion/GSAP)
- Scroll-based reveal animations for features and testimonials
- Call-to-action buttons: “Start Mood Check” and “Talk to Our AI”

### 3. Chatbot Page
- Conversational UI with animated message bubbles and typing indicator
- Chatbot avatar and optional floating animated 3D character reacting to mood
- Suggestions for journaling, meditation, mood quiz

### 4. Mental Health Assessment Page
- PHQ-9 and GAD-7 quizzes with one-question-at-a-time flow
- Progress bar and animated option cards/buttons
- Result screen with animated feedback and interpreted score

### 5. Personalized Therapy Suggestions
- Animated suggestion cards with icons, hover and flip effects
- Lottie or SVG animations explaining each technique

### 6. Connect to Therapists
- Grid layout of professionals with images, specialization, availability
- Booking modal with animated calendar and time selector
- Scroll-based animations and card effects

### 7. User Dashboard
- Track daily mood, quiz history, completed activities
- Animated charts using Chart.js or Recharts
- Mood mascot using Three.js that changes based on user data
- Motivational quote carousel and journaling reminders

### 8. Login / Signup / Profile Settings
- Glassmorphism styled forms with animated fields
- Password visibility toggle and success transitions
- Profile preferences and theme settings
- Light/Dark mode toggle with animation

## Optional Advanced Features
- Dummy backend logic for chatbot AI and quiz analysis
- Save journal entries in local state or mock backend
- Gamification badges for user activity streaks
- Basic admin panel for anonymous user analytics

## Follow-up Steps
- Confirm design mockups and animations details if needed
- Scaffold project and implement core pages incrementally
- Test responsiveness, accessibility, and performance
- Add optional backend and advanced features as enhancements

This plan ensures a modular, scalable, and visually appealing mental health platform with a smooth user experience and modern UI/UX patterns.
