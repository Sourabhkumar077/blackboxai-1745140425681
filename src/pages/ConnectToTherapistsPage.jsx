import React, { useState } from 'react';
import { motion } from 'framer-motion';

const therapists = [
  {
    id: 1,
    name: 'Dr. Emily Johnson',
    specialization: 'Cognitive Behavioral Therapy',
    availability: 'Mon, Wed, Fri - 9am to 5pm',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 2,
    name: 'Dr. Michael Smith',
    specialization: 'Anxiety and Stress Management',
    availability: 'Tue, Thu - 10am to 4pm',
    image: 'https://randomuser.me/api/portraits/men/46.jpg',
  },
  {
    id: 3,
    name: 'Dr. Sarah Lee',
    specialization: 'Mindfulness and Meditation',
    availability: 'Mon to Fri - 8am to 3pm',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    id: 4,
    name: 'Dr. David Brown',
    specialization: 'Depression and Mood Disorders',
    availability: 'Wed, Fri - 11am to 6pm',
    image: 'https://randomuser.me/api/portraits/men/52.jpg',
  },
];

const ConnectToTherapistsPage = () => {
  const [selectedTherapist, setSelectedTherapist] = useState(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const openBookingModal = (therapist) => {
    setSelectedTherapist(therapist);
    setShowBookingModal(true);
  };

  const closeBookingModal = () => {
    setShowBookingModal(false);
    setSelectedDate('');
    setSelectedTime('');
  };

  const handleBooking = () => {
    alert(`Booked appointment with ${selectedTherapist.name} on ${selectedDate} at ${selectedTime}`);
    closeBookingModal();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pastelBlue via-mintGreen to-lightViolet p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-white mb-8">Connect to Therapists</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl w-full">
        {therapists.map((therapist) => (
          <motion.div
            key={therapist.id}
            className="bg-white bg-opacity-30 backdrop-blur-md rounded-xl p-6 shadow-lg cursor-pointer flex flex-col items-center text-center"
            whileHover={{ scale: 1.05 }}
            onClick={() => openBookingModal(therapist)}
          >
            <img
              src={therapist.image}
              alt={therapist.name}
              className="w-24 h-24 rounded-full mb-4 object-cover"
            />
            <h2 className="text-xl font-semibold text-white mb-1">{therapist.name}</h2>
            <p className="text-white text-sm mb-1">{therapist.specialization}</p>
            <p className="text-white text-xs">{therapist.availability}</p>
          </motion.div>
        ))}
      </div>

      {showBookingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <motion.div
            className="bg-white bg-opacity-30 backdrop-blur-md rounded-xl p-6 max-w-md w-full"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Book Appointment with {selectedTherapist.name}
            </h2>
            <label className="block text-white mb-2" htmlFor="date">
              Select Date
            </label>
            <input
              type="date"
              id="date"
              className="w-full p-2 rounded mb-4 text-gray-800"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
            <label className="block text-white mb-2" htmlFor="time">
              Select Time
            </label>
            <input
              type="time"
              id="time"
              className="w-full p-2 rounded mb-4 text-gray-800"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
            />
            <div className="flex justify-end gap-4">
              <button
                onClick={closeBookingModal}
                className="bg-white bg-opacity-30 backdrop-blur-md text-white px-4 py-2 rounded-lg shadow-lg hover:bg-opacity-50 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleBooking}
                disabled={!selectedDate || !selectedTime}
                className={`px-4 py-2 rounded-lg shadow-lg transition ${
                  selectedDate && selectedTime
                    ? 'bg-pastelBlue text-white hover:bg-blue-600'
                    : 'bg-gray-400 text-gray-700 cursor-not-allowed'
                }`}
              >
                Book
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ConnectToTherapistsPage;
