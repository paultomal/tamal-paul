import React from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { fadeInLeft, fadeInRight, scaleIn } from '../utils/animations';

const About = () => {
    const { controls: titleControls, ref: titleRef } = useScrollAnimation();
    const { controls: contentControls, ref: contentRef } = useScrollAnimation();

    const stats = [
        { number: '1.5+', label: 'Years Experience' },
        { number: '2+', label: 'Major Projects' },
        { number: '3', label: 'Dean\'s Awards' },
        { number: '1', label: 'Academic Scholarship' }
    ];

    return (
        <section id="about" className="py-20 bg-dark-800">
            <div className="container-custom">
                {/* Section Title */}
                <motion.div
                    ref={titleRef}
                    initial="initial"
                    animate={titleControls}
                    variants={fadeInLeft}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark-50 mb-4">
                        About <span className="gradient-text">Me</span>
                    </h2>

                </motion.div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                    {/* Left Column - Image and Stats */}
                    <motion.div
                        ref={contentRef}
                        initial="initial"
                        animate={contentControls}
                        variants={fadeInLeft}
                        className="space-y-8"
                    >
                        {/* Profile Image */}
                        <div className="relative">
                            <motion.div
                                className="w-80 h-80 mx-auto relative"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="w-full h-full bg-gradient-to-br from-primary-400 to-secondary-400 rounded-2xl shadow-2xl"></div>
                                <div className="absolute inset-4 bg-dark-800 rounded-xl flex items-center justify-center border border-dark-600">
                                    <Code className="w-24 h-24 text-primary-400" />
                                </div>
                                {/* Floating elements around image */}
                                <motion.div
                                    className="absolute -top-4 -right-4 w-8 h-8 bg-primary-400 rounded-full"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                />
                                <motion.div
                                    className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary-400 rounded-full"
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                />
                            </motion.div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-6">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    className="text-center p-4 bg-dark-700 rounded-xl border border-dark-600"
                                    variants={scaleIn}
                                    initial="initial"
                                    animate={contentControls}
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                >
                                    <div className="text-2xl font-bold gradient-text mb-1">
                                        {stat.number}
                                    </div>
                                    <div className="text-sm text-dark-300">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column - About Text */}
                    <motion.div
                        initial="initial"
                        animate={contentControls}
                        variants={fadeInRight}
                        className="space-y-6"
                    >
                        <div className="prose prose-lg max-w-none">
                            <p className="text-dark-200 leading-relaxed">
                                I&apos;m a Software Engineer currently working at BEM AGENCY as a Junior Backend Developer.
                                Previously, I completed an internship at Square Health Ltd. as a Software Engineer (Backend),
                                where I gained valuable experience in healthcare technology solutions.
                            </p>

                            <p className="text-dark-200 leading-relaxed">
                                I completed my graduation in Computer Science and Engineering from American International
                                University - Bangladesh (AIUB). During my academic journey, I achieved Dean&apos;s Award for
                                three consecutive years and received Academic Scholarship, demonstrating my commitment to excellence.
                            </p>

                            <p className="text-dark-200 leading-relaxed">
                                I specialize in backend development with expertise in Java, Spring Boot, and database management.
                                I&apos;m passionate about building scalable applications and always eager to take on new challenges
                                that push the boundaries of technology.
                            </p>
                        </div>



                        {/* Key Strengths */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-dark-50">Key Strengths</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {[
                                    'Backend Development',
                                    'Database Design',
                                    'API Development',
                                    'System Architecture',
                                    'Problem Solving',
                                    'Team Collaboration'
                                ].map((strength, index) => (
                                    <motion.div
                                        key={strength}
                                        className="flex items-center space-x-2 text-dark-200"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={contentControls}
                                        variants={{
                                            initial: { opacity: 0, x: -20 },
                                            animate: {
                                                opacity: 1,
                                                x: 0,
                                                transition: { delay: 0.7 + index * 0.1 }
                                            }
                                        }}
                                    >
                                        <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                                        <span>{strength}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>




            </div>
        </section>
    );
};

export default About;