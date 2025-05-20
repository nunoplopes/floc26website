import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { schedule } from './event data/event.js';

const ConferenceTabs = () => {
  const [activeTab, setActiveTab] = useState('week1');

  const week1Data = schedule.find(item => item.title === "WEEK 1");
  const week2Data = schedule.find(item => item.title === "WEEK 2");

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
      },
    }),
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex space-x-4 mb-8">
        <button
          onClick={() => setActiveTab('week1')}
          className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
            activeTab === 'week1'
              ? 'bg-orange-500 text-white shadow-lg'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Week 1
        </button>
        <button
          onClick={() => setActiveTab('week2')}
          className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
            activeTab === 'week2'
              ? 'bg-orange-500 text-white shadow-lg'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Week 2
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          variants={tabVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.3 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            {activeTab === 'week1' ? 'Week 1 Conferences' : 'Week 2 Conferences'}
          </h2>
          <ul className="space-y-4">
            {(activeTab === 'week1' ? week1Data?.conferences : week2Data?.conferences)?.map((conference, index) => (
              <motion.li
                key={conference}
                custom={index}
                variants={listItemVariants}
                initial="hidden"
                animate="visible"
                className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <p className="text-gray-700">{conference}</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ConferenceTabs; 