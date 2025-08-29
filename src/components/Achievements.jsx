import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Trophy, Star, Medal } from 'lucide-react';
import { useScrollAnimation, useStaggeredScrollAnimation } from '../hooks/useScrollAnimation';
import { fadeInUp } from '../utils/animations';

const Achievements = () => {
    const { controls: titleControls, ref: titleRef } = useScrollAnimation();
    const {
        controls: achievementsControls,
        ref: achievementsRef,
        containerVariants,
        itemVariants
    } = useStaggeredScrollAnimation(0.2);

    const [selectedImage, setSelectedImage] = React.useState(null);

    const openImageModal = (imageSrc, title) => {
        setSelectedImage({ src: imageSrc, title });
    };

    const closeImageModal = () => {
        setSelectedImage(null);
    };

    const achievements = [
        {
            id: 1,
            title: "FST Dean’s List Honor for Three Consecutive Years",
            description: "Achieved Dean's List recognition for three consecutive years (2021-2023) by maintaining exceptional academic performance with CGPA ≥ 3.75, no grades below B+, and perfect attendance. This prestigious honor is awarded to top-performing students in the Faculty of Science and Technology at AIUB.",
            icon: Trophy,
            color: "from-yellow-400 to-orange-500",
            year: "2021-2023",
            category: "Academic Excellence",
            image: "/award.jpg"
        },
        {
            id: 3,
            title: "Transforming Code for All: Enabling Non-Technical Individuals to Harness the Benefits of Code Reusability",
            description: "This thesis introduces a Code Mapping Algorithm (CMA) that translates C++ → Pseudocode → C#, simplifying programming for individuals without a computer science background. By focusing on code reusability and code conversion, the project bridges the gap between natural language and executable code, enabling non-technical users to understand, adapt, and reuse code effectively. The approach achieved 99% conversion accuracy, with future development plans including support for more languages, a GUI-based tool, and mobile/web applications.",
            icon: Star,
            color: "from-green-400 to-teal-500",
            year: "2023",
            category: "Thesis",
            image: "/Thesis.JPG"
        },
        {
            id: 2,
            title: "AIUB Academic Scholarship",
            description: "Awarded competitive merit-based scholarship through rigorous examination process. Maintained scholarship eligibility with CGPA ≥ 3.75, no grades below B+, zero disciplinary actions, and <20% absence rate. This prestigious scholarship program supports exceptional students with full/partial tuition fee waiver.",
            icon: Award,
            color: "from-blue-400 to-purple-500",
            year: "2020-2023",
            category: "Scholarship"
        }
    ];

    return (
        <section id="achievements" className="py-20 bg-dark-900">
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
                        My <span className="gradient-text">Achievements</span>
                    </h2>
                    <p className="text-dark-300 max-w-2xl mx-auto text-lg">
                        Recognition and milestones that mark my academic and professional journey
                    </p>
                </motion.div>

                {/* Achievements Grid */}
                <motion.div
                    ref={achievementsRef}
                    initial="initial"
                    animate={achievementsControls}
                    variants={containerVariants}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {achievements.map((achievement) => {
                        const Icon = achievement.icon;

                        return (
                            <motion.div
                                key={achievement.id}
                                variants={itemVariants}
                                className="group"
                                whileHover={{ y: -5, scale: 1.02 }}
                            >
                                <div className="card p-8 h-full hover:shadow-xl transition-all duration-300 border border-dark-600/50 relative overflow-hidden min-h-[500px] flex flex-col">
                                    {/* Background decoration */}
                                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-400/10 to-secondary-400/10 rounded-full -translate-y-10 translate-x-10"></div>

                                    {/* Icon */}
                                    <div className={`inline-flex p-4 bg-gradient-to-r ${achievement.color} rounded-xl mb-6 shadow-lg`}>
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>

                                    {/* Category Badge */}
                                    <div className="inline-block px-3 py-1 bg-primary-400/20 text-primary-400 rounded-full text-xs font-medium mb-4">
                                        {achievement.category}
                                    </div>

                                    {/* Content */}
                                    <div className="space-y-4 flex-grow">
                                        <div className="flex justify-between items-start">
                                            <h3 className="text-xl font-semibold text-dark-50 leading-tight">
                                                {achievement.title}
                                            </h3>
                                            <span className="text-sm text-accent-400 font-medium ml-2 flex-shrink-0">
                                                {achievement.year}
                                            </span>
                                        </div>

                                        <p className="text-dark-300 leading-relaxed">
                                            {achievement.description}
                                        </p>
                                    </div>

                                    {/* Image */}
                                    <div className="mt-6 h-48 rounded-lg border border-dark-600 overflow-hidden">
                                        {achievement.image ? (
                                            <img
                                                src={achievement.image}
                                                alt={achievement.title}
                                                className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                                                onClick={() => openImageModal(achievement.image, achievement.title)}
                                            />
                                        ) : (
                                            <div className="h-full bg-gradient-to-br from-dark-700 to-dark-600 flex items-center justify-center">
                                                <div className="text-center text-dark-400">
                                                    <Medal className="w-8 h-8 mx-auto mb-2 opacity-50" />
                                                    <p className="text-xs">Achievement Image</p>
                                                    <p className="text-xs opacity-70">Coming Soon</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Additional Stats */}
                <motion.div
                    initial="initial"
                    animate={titleControls}
                    variants={fadeInUp}
                    className="text-center mt-16"
                >
                    <div className="card p-8 max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-dark-50 mb-6">
                            Achievement Summary
                        </h3>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold gradient-text mb-2">3</div>
                                <div className="text-sm text-dark-300">Consecutive Dean's Awards</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold gradient-text mb-2">3.74</div>
                                <div className="text-sm text-dark-300">Final CGPA</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold gradient-text mb-2">4</div>
                                <div className="text-sm text-dark-300">Years of Excellence</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Image Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeImageModal}
                    >
                        <motion.div
                            className="relative max-w-4xl max-h-[90vh] bg-dark-800 rounded-lg overflow-hidden"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close button */}
                            <button
                                onClick={closeImageModal}
                                className="absolute top-4 right-4 z-10 p-2 bg-dark-900/80 text-white rounded-full hover:bg-dark-900 transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Image */}
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.title}
                                className="w-full h-auto max-h-[80vh] object-contain"
                            />

                            {/* Title */}
                            <div className="p-4 bg-dark-800">
                                <h3 className="text-lg font-semibold text-dark-50 text-center">
                                    {selectedImage.title}
                                </h3>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Achievements;