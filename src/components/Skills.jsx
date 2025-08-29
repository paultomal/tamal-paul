import React from 'react';
import { motion } from 'framer-motion';
import {
    Code,
    Database,
    Server,
    Cloud,
    GitBranch,
    MessageSquare,
    Settings,
    Users
} from 'lucide-react';
import { useScrollAnimation, useStaggeredScrollAnimation } from '../hooks/useScrollAnimation';
import { fadeInUp, fadeInLeft } from '../utils/animations';

const Skills = () => {
    const { controls: titleControls, ref: titleRef } = useScrollAnimation();
    const {
        controls: skillsControls,
        ref: skillsRef,
        containerVariants,
        itemVariants
    } = useStaggeredScrollAnimation(0.1);

    const skillCategories = [
        {
            title: 'Programming & Frameworks',
            icon: Code,
            color: 'from-blue-400 to-blue-600',
            skills: ['Java', 'Spring Boot', 'Spring Security']
        },
        {
            title: 'API & Data Handling',
            icon: Server,
            color: 'from-green-400 to-green-600',
            skills: ['RESTful APIs', 'JWT tokens']
        },
        {
            title: 'Databases',
            icon: Database,
            color: 'from-purple-400 to-purple-600',
            skills: ['MySQL', 'PostgreSQL', 'Redis']
        },
        {
            title: 'Tools & IDEs',
            icon: Settings,
            color: 'from-orange-400 to-orange-600',
            skills: ['Visual Studio', 'IntelliJ IDEA', 'Postman']
        },
        {
            title: 'Version Control & CI/CD',
            icon: GitBranch,
            color: 'from-red-400 to-red-600',
            skills: ['Git', 'CI/CD practices']
        },
        {
            title: 'Messaging & Brokers',
            icon: MessageSquare,
            color: 'from-yellow-400 to-yellow-600',
            skills: ['Kafka', 'RabbitMQ']
        },
        {
            title: 'Containerization & Cloud',
            icon: Cloud,
            color: 'from-cyan-400 to-cyan-600',
            skills: ['Docker', 'AWS', 'Digital Ocean']
        },
        {
            title: 'Soft Skills',
            icon: Users,
            color: 'from-pink-400 to-pink-600',
            skills: ['Collaboration', 'Communication', 'Teamwork']
        }
    ];

    const technicalStack = [
        { name: 'Java', level: 90, color: 'bg-orange-500' },
        { name: 'Spring Boot', level: 85, color: 'bg-green-500' },
        { name: 'MySQL', level: 80, color: 'bg-blue-500' },
        { name: 'PostgreSQL', level: 75, color: 'bg-blue-600' },
        { name: 'Docker', level: 70, color: 'bg-cyan-500' },
        { name: 'AWS', level: 65, color: 'bg-yellow-500' },
        { name: 'Redis', level: 70, color: 'bg-red-500' },
        { name: 'Git', level: 85, color: 'bg-gray-600' }
    ];

    return (
        <section id="skills" className="py-20 bg-dark-800">
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
                        Technical <span className="gradient-text">Skills</span>
                    </h2>
                    <p className="text-dark-300 max-w-2xl mx-auto text-lg">
                        My expertise and proficiency in various technologies, tools, and methodologies
                    </p>
                </motion.div>

                {/* Skills Categories */}
                <motion.div
                    ref={skillsRef}
                    initial="initial"
                    animate={skillsControls}
                    variants={containerVariants}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
                >
                    {skillCategories.map((category, index) => {
                        const Icon = category.icon;
                        return (
                            <motion.div
                                key={category.title}
                                variants={itemVariants}
                                className="card p-6 group hover:shadow-xl transition-all duration-300"
                                whileHover={{ y: -5 }}
                            >
                                <div className="flex items-center mb-4">
                                    <div className={`p-3 bg-gradient-to-r ${category.color} rounded-lg mr-4 group-hover:scale-110 transition-transform`}>
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-dark-50">
                                        {category.title}
                                    </h3>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, skillIndex) => (
                                        <span
                                            key={skillIndex}
                                            className="px-3 py-1 bg-dark-700 text-dark-200 rounded-full text-sm font-medium hover:bg-primary-400/20 hover:text-primary-400 transition-colors border border-dark-600"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Technical Proficiency */}
                <motion.div
                    initial="initial"
                    animate={skillsControls}
                    variants={fadeInUp}
                    className="mb-16"
                >
                    <div className="text-center mb-12">
                        <h3 className="text-2xl sm:text-3xl font-bold text-dark-50 mb-4">
                            Technical <span className="gradient-text">Proficiency</span>
                        </h3>
                        <p className="text-dark-300 max-w-2xl mx-auto">
                            My skill levels in key technologies based on experience and project work
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {technicalStack.map((tech, index) => (
                            <motion.div
                                key={tech.name}
                                className="space-y-2"
                                initial={{ opacity: 0, x: -20 }}
                                animate={skillsControls}
                                variants={{
                                    initial: { opacity: 0, x: -20 },
                                    animate: {
                                        opacity: 1,
                                        x: 0,
                                        transition: { delay: 0.1 * index }
                                    }
                                }}
                            >
                                <div className="flex justify-between items-center">
                                    <span className="text-dark-50 font-medium">{tech.name}</span>
                                    <span className="text-dark-300 text-sm">{tech.level}%</span>
                                </div>
                                <div className="w-full bg-dark-700 rounded-full h-2">
                                    <motion.div
                                        className={`h-2 ${tech.color} rounded-full`}
                                        initial={{ width: 0 }}
                                        animate={{ width: `${tech.level}%` }}
                                        transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Certifications & Learning */}
                <motion.div
                    initial="initial"
                    animate={titleControls}
                    variants={fadeInUp}
                    className="text-center"
                >
                    <div className="card p-8 max-w-3xl mx-auto">
                        <h3 className="text-2xl font-bold text-dark-50 mb-4">
                            Continuous Learning
                        </h3>
                        <p className="text-dark-300 mb-6">
                            I believe in staying updated with the latest technologies and best practices.
                            I'm always exploring new tools, frameworks, and methodologies to enhance my skills
                            and deliver better solutions.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                            {[
                                'Spring Framework',
                                'Microservices',
                                'System Design',
                                'Cloud Architecture',
                                'DevOps Practices',
                                'API Design'
                            ].map((topic) => (
                                <span
                                    key={topic}
                                    className="px-4 py-2 bg-gradient-to-r from-primary-400/20 to-accent-400/20 text-primary-400 rounded-full text-sm font-medium border border-primary-400/30 backdrop-blur-sm"
                                >
                                    {topic}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;