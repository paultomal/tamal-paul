import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Calendar, MapPin, Building } from 'lucide-react';
import { useScrollAnimation, useStaggeredScrollAnimation } from '../hooks/useScrollAnimation';
import { fadeInUp, fadeInLeft } from '../utils/animations';

const Experience = () => {
    const { controls: titleControls, ref: titleRef } = useScrollAnimation();
    const {
        controls: experienceControls,
        ref: experienceRef,
        containerVariants,
        itemVariants
    } = useStaggeredScrollAnimation(0.2);

    const experiences = [
        {
            id: 1,
            position: 'Jr. Backend Developer',
            company: 'Bem Group Agency',
            location: 'Remote',
            duration: 'May 2024 – June 2025',
            type: 'Full-time',
            icon: Server,
            color: 'from-green-400 to-green-600',
            description: [
                'Architected and developed microservices-based backend systems using Spring Boot and Spring Cloud for scalable SaaS platforms',
                'Built comprehensive RESTful APIs for AI-powered applications including image generation, music streaming, and invoice management systems',
                'Implemented secure authentication and authorization using JWT, Spring Security, and Keycloak for multi-tenant applications',
                'Designed and optimized PostgreSQL databases with Redis caching, achieving 40% performance improvement in data retrieval',
                'Integrated third-party APIs including payment gateways, AI services (DALL·E 3, SoundRaw), and KYC verification systems (SumSub)',
                'Developed asynchronous messaging systems using RabbitMQ for real-time notifications and background processing',
                'Implemented file management and CDN integration with AWS S3 and CloudFront for scalable media delivery',
                'Built automated billing systems with recurring payments, multi-currency support, and PDF invoice generation'
            ],
            technologies: ['Spring Boot', 'Spring Cloud', 'PostgreSQL', 'Redis', 'RabbitMQ', 'AWS S3', 'CloudFront', 'JWT', 'Spring Security', 'Keycloak', 'Docker', 'Microservices']
        },
        {
            id: 2,
            position: 'Software Engineer Intern',
            company: 'Square Health Ltd',
            location: 'Mohakhali, Dhaka, Bangladesh',
            duration: 'Jul 2023 – Oct 2023',
            type: 'Internship',
            icon: Code,
            color: 'from-blue-400 to-blue-600',
            description: [
                'Gained hands-on experience in software development lifecycle',
                'Worked on healthcare technology solutions and applications',
                'Learned industry best practices and development methodologies',
                'Contributed to team projects and participated in daily standups'
            ],
            technologies: ['Java', 'Spring Boot', 'SQL', 'JavaScript', 'HTML/CSS']
        }
    ];

    return (
        <section id="experience" className="py-20 bg-dark-900">
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
                        Professional <span className="gradient-text">Experience</span>
                    </h2>
                    <p className="text-dark-300 max-w-2xl mx-auto text-lg">
                        My journey in the software development industry, building solutions and growing as a developer
                    </p>
                </motion.div>

                {/* Experience Timeline */}
                <motion.div
                    ref={experienceRef}
                    initial="initial"
                    animate={experienceControls}
                    variants={containerVariants}
                    className="relative"
                >
                    {/* Timeline Line */}
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 via-secondary-400 to-accent-400"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => {
                            const Icon = exp.icon;
                            const isEven = index % 2 === 0;

                            return (
                                <motion.div
                                    key={exp.id}
                                    variants={itemVariants}
                                    className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                                        } flex-col md:flex-row`}
                                >
                                    {/* Timeline Node */}
                                    <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-400 rounded-full border-4 border-dark-900 z-10"></div>

                                    {/* Content Card */}
                                    <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-8' : 'md:pl-8'} ml-16 md:ml-0`}>
                                        <motion.div
                                            className="card p-6 hover:shadow-xl transition-all duration-300"
                                            whileHover={{ y: -5, scale: 1.02 }}
                                        >
                                            {/* Header */}
                                            <div className="flex items-start justify-between mb-4">
                                                <div className="flex items-center space-x-3">
                                                    <div className={`p-3 bg-gradient-to-r ${exp.color} rounded-lg`}>
                                                        <Icon className="w-6 h-6 text-white" />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-xl font-semibold text-dark-50">
                                                            {exp.position}
                                                        </h3>
                                                        <div className="flex items-center space-x-2 text-primary-400 font-medium">
                                                            <Building className="w-4 h-4" />
                                                            <span>{exp.company}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <span className="px-3 py-1 bg-secondary-400/20 text-secondary-400 rounded-full text-xs font-medium">
                                                    {exp.type}
                                                </span>
                                            </div>

                                            {/* Details */}
                                            <div className="space-y-3 mb-4">
                                                <div className="flex items-center space-x-2 text-dark-300">
                                                    <MapPin className="w-4 h-4 text-accent-400" />
                                                    <span className="text-sm">{exp.location}</span>
                                                </div>
                                                <div className="flex items-center space-x-2 text-dark-300">
                                                    <Calendar className="w-4 h-4 text-accent-400" />
                                                    <span className="text-sm">{exp.duration}</span>
                                                </div>
                                            </div>

                                            {/* Description */}
                                            <div className="mb-4">
                                                <ul className="space-y-2">
                                                    {exp.description.map((item, idx) => (
                                                        <li key={idx} className="flex items-start space-x-2 text-dark-200 text-sm">
                                                            <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Technologies */}
                                            <div>
                                                <h4 className="text-sm font-medium text-dark-50 mb-2">Technologies Used:</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {exp.technologies.map((tech) => (
                                                        <span
                                                            key={tech}
                                                            className="px-2 py-1 bg-dark-700 text-dark-200 rounded text-xs font-medium hover:bg-primary-400/20 hover:text-primary-400 transition-colors border border-dark-600"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Empty space for timeline balance on desktop */}
                                    <div className="hidden md:block w-5/12"></div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial="initial"
                    animate={titleControls}
                    variants={fadeInUp}
                    className="text-center mt-16"
                >
                    <div className="card p-8 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-dark-50 mb-4">
                            Ready for New Opportunities
                        </h3>
                        <p className="text-dark-300 mb-6">
                            I'm always excited to take on new challenges and contribute to innovative projects.
                            Let's discuss how I can help bring your ideas to life.
                        </p>
                        <motion.button
                            onClick={() => {
                                const contactSection = document.querySelector('#contact');
                                if (contactSection) {
                                    contactSection.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                            className="btn-primary"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get In Touch
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;