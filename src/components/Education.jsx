import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { useScrollAnimation, useStaggeredScrollAnimation } from '../hooks/useScrollAnimation';
import { fadeInUp } from '../utils/animations';

const Education = () => {
    const { controls: titleControls, ref: titleRef } = useScrollAnimation();
    const {
        controls: educationControls,
        ref: educationRef,
        containerVariants,
        itemVariants
    } = useStaggeredScrollAnimation(0.2);

    const educationData = [
        {
            id: 1,
            degree: 'BACHELOR OF SCIENCE IN COMPUTER SCIENCE',
            major: 'Software Engineering',
            institution: 'American International University- Bangladesh',
            duration: '2020 — 2023',
            grade: 'CGPA: 3.74',
            location: 'Dhaka, Bangladesh',
            logo: '/logos/aiub.png'
        },
        {
            id: 2,
            degree: 'HIGHER SECONDARY CERTIFICATE (HSC)',
            major: 'Science',
            institution: 'Giasuddin Islamic Model College',
            duration: '2017 — 2019',
            grade: 'GPA: 4.92',
            location: 'Hirajheel, Narayangonj, Bangladesh',
            logo: '/logos/gimc.png'
        }
    ];

    return (
        <section id="education" className="py-20 bg-dark-800">
            <div className="container-custom">
                {/* Section Title */}
                <motion.div
                    ref={titleRef}
                    initial="initial"
                    animate={titleControls}
                    variants={fadeInUp}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark-50 mb-4">
                        Educations
                    </h2>
                </motion.div>

                {/* Education Grid */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
                    {/* Left side - Graduation Image */}
                    <div className="lg:w-1/2 flex justify-center">
                        <div className="w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="/Graduation.jpg"
                                alt="Graduation Photo"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </div>

                    {/* Right side - Education Cards */}
                    <motion.div
                        ref={educationRef}
                        initial="initial"
                        animate={educationControls}
                        variants={containerVariants}
                        className="lg:w-1/2 space-y-6"
                    >
                        {educationData.map((edu, index) => {
                            return (
                                <motion.div
                                    key={edu.id}
                                    variants={itemVariants}
                                    className="card p-8 hover:shadow-xl transition-all duration-300 border border-dark-600/50 min-h-[180px]"
                                    whileHover={{ y: -2, scale: 1.01 }}
                                >
                                    <div className="flex items-start space-x-6">
                                        {/* Institution Logo */}
                                        <div className="w-16 h-16 bg-white rounded-lg flex-shrink-0 p-2 shadow-lg">
                                            <img
                                                src={edu.logo}
                                                alt={`${edu.institution} logo`}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 space-y-3">
                                            <h3 className="text-lg font-semibold text-dark-50 leading-tight">
                                                {edu.degree}
                                            </h3>
                                            <p className="text-sm text-primary-400 font-medium">
                                                {edu.duration}
                                            </p>
                                            <p className="text-dark-300 font-medium">
                                                {edu.institution}
                                            </p>
                                            <p className="text-sm text-blue-400 font-medium">
                                                Major: {edu.major}
                                            </p>
                                            <p className="text-sm text-yellow-400 font-semibold">
                                                {edu.grade}
                                            </p>
                                            <p className="text-sm text-dark-400">
                                                {edu.location}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Education;