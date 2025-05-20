import { motion } from 'framer-motion';
import React from 'react'

const TransportCard = ({ title, description, icon: Icon, className = "", children }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`bg-white rounded-xl shadow-lg overflow-hidden ${className}`}
    >
        <div className="p-6">
            <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                    <Icon className="w-6 h-6 text-blue-900" />
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
                    <p className="text-gray-600">{description}</p>
                </div>
            </div>
            {children}
        </div>
    </motion.div>
);
export default TransportCard