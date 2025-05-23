'use client'
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import { schedule } from '@/components/event data/event';

// Animation variants
const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
};

const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.5,
            ease: "easeOut"
        },
    }),
};

// Custom hook to detect when an element is in view
const useInView = (options) => {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                setInView(entry.isIntersecting);
            });
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [options]);

    return { ref, inView };
};

// Component to display a single conference
const ConferenceItem = ({ conference, index }) => {
    const { ref, inView } = useInView({ threshold: 0.1 });

    return (
        <motion.li
            ref={ref}
            custom={index}
            variants={listItemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="group relative p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
        >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <p className="text-gray-700 text-lg pl-4">{conference}</p>
        </motion.li>
    );
};

// Component to display the program for a single week
const WeekProgram = ({ weekData }) => {
    const { ref, inView } = useInView({ threshold: 0.1 });

    return (
        <motion.div
            ref={ref}
            variants={fadeInVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 p-8">
                <div className="flex items-center gap-6">
                    <div className={cn("w-3 h-16 rounded-full", weekData.barColor)} />
                    <div>
                        <h3 className="text-3xl font-semibold text-white mb-2">
                            {weekData.title}
                        </h3>
                        <p className="text-blue-100 text-lg">
                            {weekData.date} - {weekData.endDate}
                        </p>
                    </div>
                </div>
            </div>
            <div className="p-8">
                <ul className="space-y-4">
                    {weekData.conferences?.map((conference, index) => (
                        <ConferenceItem key={conference} conference={conference} index={index} />
                    ))}
                </ul>
            </div>
        </motion.div>
    );
};

// Main Program Page Component
const Program = () => {
    const week1Data = schedule.find(item => item.title === "WEEK 1");
    const week2Data = schedule.find(item => item.title === "WEEK 2");

    return (
        <div className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16 mt-20">
                    <motion.h1 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl font-bold text-blue-900 mb-4"
                    >
                        Program Overview
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-gray-600 text-lg max-w-2xl mx-auto"
                    >
                        Explore the comprehensive schedule of conferences and workshops for both weeks
                    </motion.p>
                </div>

                <Tabs defaultValue="week1" className="w-full">
                    <TabsList className="flex justify-center gap-4 mb-12">
                        <TabsTrigger 
                            value="week1" 
                            className="px-8 py-3 text-lg font-medium rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-300 data-[state=active]:bg-blue-900 data-[state=active]:text-white"
                        >
                            Week 1
                        </TabsTrigger>
                        <TabsTrigger 
                            value="week2" 
                            className="px-8 py-3 text-lg font-medium rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-300 data-[state=active]:bg-blue-900 data-[state=active]:text-white"
                        >
                            Week 2
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="week1" className="mt-6">
                        <WeekProgram weekData={week1Data} />
                    </TabsContent>
                    <TabsContent value="week2" className="mt-6">
                        <WeekProgram weekData={week2Data} />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
};

export default Program;
