import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';

const ChatbotPage = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello! How are you feeling today?', sender: 'bot' },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMessage = { id: Date.now(), text: input.trim(), sender: 'user' };
    setMessages((prev) => [...prev, newMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate bot response delay
    setTimeout(() => {
      const botReply = generateBotReply(input.trim());
      setMessages((prev) => [...prev, { id: Date.now() + 1, text: botReply, sender: 'bot' }]);
      setIsTyping(false);
    }, 1500);
  };

  const generateBotReply = (userInput) => {
    // Dummy logic for bot reply
    if (userInput.toLowerCase().includes('sad')) {
      return 'I\'m sorry to hear that. Would you like some journaling suggestions?';
    }
    if (userInput.toLowerCase().includes('anxious')) {
      return 'Try some deep breathing exercises. Would you like a guided meditation?';
    }
    return 'Thanks for sharing. How about a quick mood quiz?';
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pastelBlue via-mintGreen to-lightViolet flex flex-col p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-white mb-6 text-center">Mental Health Chatbot</h1>
      <div className="flex-1 bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-4 flex flex-col overflow-y-auto max-h-[60vh] mb-4">
        {messages.map((msg) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, x: msg.sender === 'bot' ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className={`mb-3 max-w-[80%] p-3 rounded-lg ${
              msg.sender === 'bot' ? 'bg-white bg-opacity-40 self-start' : 'bg-white bg-opacity-80 self-end'
            }`}
          >
            {msg.text}
          </motion.div>
        ))}
        {isTyping && (
          <motion.div
            className="mb-3 max-w-[80%] p-3 rounded-lg bg-white bg-opacity-40 self-start italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ repeat: Infinity, duration: 1, repeatType: 'mirror' }}
          >
            Typing...
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="flex gap-3">
        <input
          type="text"
          className="flex-1 rounded-lg p-3 focus:outline-none"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          aria-label="Chat message input"
        />
        <Button onClick={sendMessage}>Send</Button>
      </div>
    </div>
  );
};

export default ChatbotPage;
