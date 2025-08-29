import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye, Calendar, Tag, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { fadeInUp } from '../utils/animations';

const Projects = () => {
    const { controls: titleControls, ref: titleRef } = useScrollAnimation();
    const [isLoaded, setIsLoaded] = React.useState(false);

    // Disable animations until component is fully loaded
    React.useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    const projects = [
        {
            id: 4,
            title: 'InvoiceUs',
            description: 'SaaS invoice generation and billing platform that streamlines invoicing for businesses. Features customizable invoice templates, automated billing, payment tracking, multi-currency support, KYC verification via SumSub, and real-time notifications. Built with Spring Boot microservices backend and Next.js frontend, integrated with PostgreSQL, RabbitMQ, and multiple payment gateways.',
            images: [
                '/Invoice Us/InvoiceUs1.png',
                '/Invoice Us/InvoiceUs2.png',
                '/Invoice Us/InvoiceUs3.png',
                '/Invoice Us/InvoiceUs4.png',
                '/Invoice Us/InvoiceUs5.png',
                '/Invoice Us/InvoiceUs6.png'
            ],
            technologies: ['Spring Boot', 'Next.js', 'PostgreSQL', 'RabbitMQ', 'Spring Cloud', 'TypeScript', 'Tailwind CSS', 'Zustand', 'SumSub', 'Twilio'],
            category: 'Full Stack',
            date: 'November 2024',
            demoUrl: 'https://invoiceus.com/',
            githubUrl: null
        },
        {
            id: 3,
            title: 'PixiAI',
            description: 'AI-powered creative platform for image generation, transformation, and management. Features text-to-image generation, fantasy avatars, wall art creation, realtime canvas editing, and upscaling tools. Built with Spring Boot backend and Next.js frontend, integrated with AWS S3, CloudFront CDN, and subscription-based credit system with payment gateway integration.',
            images: [
                '/PixiAI/pixi1.png',
                '/PixiAI/pixi2.png',
                '/PixiAI/pixi3.png',
                '/PixiAI/pixi4.png',
                '/PixiAI/pixi5.png',
                '/PixiAI/pixi6.png',
                '/PixiAI/pixi7.png',
                '/PixiAI/pixi8.png'
            ],
            technologies: ['Spring Boot', 'Next.js', 'PostgreSQL', 'Redis', 'AWS S3', 'CloudFront', 'TypeScript', 'Tailwind CSS', 'Zustand', 'JWT'],
            category: 'Full Stack',
            date: 'January 2025',
            demoUrl: 'https://pixiai.net/',
            githubUrl: null
        },
        {
            id: 1,
            title: 'Pure Sounds',
            description: 'AI-powered music platform that merges AI music generation with traditional streaming. Features include AI music generation via SoundRaw API, cover art creation with DALL·E 3, music customization, social features, e-commerce capabilities, and advanced file management. Built with Spring Boot backend and Next.js frontend.',
            images: [
                '/PureSound/Puresound1.png',
                '/PureSound/Puresound2.png',
                '/PureSound/Puresound3.png',
                '/PureSound/Puresound4.png'
            ],
            technologies: ['Spring Boot', 'Next.js', 'PostgreSQL', 'Redis', 'AWS S3', 'Keycloak', 'TypeScript', 'Tailwind CSS'],
            category: 'Full Stack',
            date: 'December 2024',
            demoUrl: 'https://app.puresounds.cloud',
            githubUrl: null
        },
        {
            id: 2,
            title: 'CareInvoice',
            description: 'A healthcare billing system that allows multiple organizations (e.g., Hospitals, Diagnostic Centers, Pharmacies) to effortlessly manage their billing process alongside providing numerous features which is built upon Spring Boot, Spring Data JPA, MySQL, Spring Security, JWT, and other technologies.',
            images: [
                '/CareInvoice/care1.png',
                '/CareInvoice/care2.png',
                '/CareInvoice/care3.png',
                '/CareInvoice/care4.png',
                '/CareInvoice/care5.png',
                '/CareInvoice/care6.png',
                '/CareInvoice/care7.png',
                '/CareInvoice/care8.png',
                '/CareInvoice/care9.png'
            ],
            technologies: ['Spring Boot', 'Spring Data JPA', 'MySQL', 'Spring Security', 'JWT', 'Java'],
            category: 'Backend',
            date: 'October 2023',
            demoUrl: null,
            githubUrl: 'https://github.com/paultomal/Billing-System'
        },


        {
            id: 5,
            title: 'DocsManager',
            description: 'DocuNexus is a robust and scalable document management tool designed to simplify the creation, management, and sharing of documents. Built with Java using Spring Boot, DocuNexus leverages the power of modern technologies to ensure secure and efficient document handling with fine-grained access control.',
            comingSoon: true,
            technologies: ['Java', 'Spring Boot', 'Spring Security', 'MySQL', 'JWT', 'REST API'],
            category: 'Backend',
            date: 'February 2024',
            demoUrl: null,
            githubUrl: 'https://github.com/paultomal/DocsManager'
        }
    ];

    const categories = ['All', 'Full Stack', 'Backend'];
    const [activeCategory, setActiveCategory] = React.useState('All');
    const [filteredProjects, setFilteredProjects] = React.useState(projects);

    React.useEffect(() => {
        if (activeCategory === 'All') {
            setFilteredProjects(projects);
        } else {
            setFilteredProjects(projects.filter(project => project.category === activeCategory));
        }
    }, [activeCategory]);

    const ImageSlider = React.memo(({ images, title, isVisible = true }) => {
        const [currentIndex, setCurrentIndex] = React.useState(0);
        const [imageError, setImageError] = React.useState(false);
        const [isPaused, setIsPaused] = React.useState(true); // Start paused
        const [imagesLoaded, setImagesLoaded] = React.useState(false);
        const intervalRef = React.useRef(null);
        const loadedImagesRef = React.useRef(new Set());

        const nextImage = React.useCallback(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, [images.length]);

        const prevImage = React.useCallback(() => {
            setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
        }, [images.length]);

        const handleImageError = React.useCallback(() => {
            setImageError(true);
        }, []);

        const handleImageLoad = React.useCallback((index) => {
            loadedImagesRef.current.add(index);
            if (loadedImagesRef.current.size >= Math.min(3, images.length)) {
                setImagesLoaded(true);
                // Start auto-play after images are loaded and component is visible
                setTimeout(() => {
                    if (isVisible) {
                        setIsPaused(false);
                    }
                }, 1000);
            }
        }, [images.length, isVisible]);

        // Auto-play functionality with better cleanup
        React.useEffect(() => {
            if (images.length <= 1 || isPaused || !imagesLoaded || !isVisible) {
                if (intervalRef.current) {
                    clearInterval(intervalRef.current);
                    intervalRef.current = null;
                }
                return;
            }

            intervalRef.current = setInterval(() => {
                nextImage();
            }, 5000); // Increased to 5 seconds

            return () => {
                if (intervalRef.current) {
                    clearInterval(intervalRef.current);
                    intervalRef.current = null;
                }
            };
        }, [nextImage, images.length, isPaused, imagesLoaded, isVisible]);

        const handleMouseEnter = React.useCallback(() => {
            if (imagesLoaded) setIsPaused(true);
        }, [imagesLoaded]);

        const handleMouseLeave = React.useCallback(() => {
            if (imagesLoaded && isVisible) setIsPaused(false);
        }, [imagesLoaded, isVisible]);

        // Preload first few images
        React.useEffect(() => {
            images.slice(0, 3).forEach((src, index) => {
                const img = new Image();
                img.onload = () => handleImageLoad(index);
                img.onerror = () => handleImageLoad(index);
                img.src = src;
            });
        }, [images, handleImageLoad]);

        return (
            <div
                className="relative h-48 overflow-hidden bg-gradient-to-br from-primary-100 to-purple-100"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {!imageError ? (
                    <>
                        <img
                            src={images[currentIndex]}
                            alt={`${title} - Image ${currentIndex + 1}`}
                            className={`w-full h-full object-cover transition-opacity duration-700 ease-in-out ${imagesLoaded ? 'opacity-100' : 'opacity-0'
                                }`}
                            onError={handleImageError}
                            loading="lazy"
                            style={{
                                willChange: 'opacity',
                                backfaceVisibility: 'hidden',
                                transform: 'translateZ(0)'
                            }}
                        />
                        {!imagesLoaded && (
                            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-100 to-purple-100">
                                <div className="text-center">
                                    <div className="w-8 h-8 border-4 border-primary-400 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                                    <div className="text-sm text-primary-600">Loading...</div>
                                </div>
                            </div>
                        )}
                    </>
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-primary-400 mb-2">📱</div>
                            <div className="text-lg font-semibold text-primary-600">{title}</div>
                            <div className="text-sm text-primary-500">Image Loading...</div>
                        </div>
                    </div>
                )}

                {images.length > 1 && imagesLoaded && (
                    <>
                        {/* Navigation Buttons */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                prevImage();
                            }}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 bg-black/60 text-white rounded-full hover:bg-black/80 transition-all duration-200 z-10 opacity-0 group-hover:opacity-100"
                            aria-label="Previous image"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                nextImage();
                            }}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-black/60 text-white rounded-full hover:bg-black/80 transition-all duration-200 z-10 opacity-0 group-hover:opacity-100"
                            aria-label="Next image"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>

                        {/* Dots Indicator */}
                        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setCurrentIndex(index);
                                    }}
                                    className={`w-2.5 h-2.5 rounded-full transition-all duration-200 hover:scale-125 ${index === currentIndex
                                        ? 'bg-white shadow-lg'
                                        : 'bg-white/60 hover:bg-white/80'
                                        }`}
                                    aria-label={`Go to image ${index + 1}`}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>
        );
    });

    const ProjectCard = React.memo(({ project, index, isVisible }) => (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: isLoaded ? index * 0.1 : 0, ease: "easeOut" }}
            className="card overflow-hidden group"
            whileHover={isLoaded ? { y: -8, transition: { duration: 0.2 } } : {}}
            style={{
                willChange: 'transform',
                backfaceVisibility: 'hidden',
                transform: 'translateZ(0)'
            }}
        >
            {/* Project Image */}
            <div className="relative overflow-hidden bg-gradient-to-br from-primary-100 to-purple-100">
                {project.images ? (
                    <ImageSlider
                        images={project.images}
                        title={project.title}
                        isVisible={isVisible && isLoaded}
                    />
                ) : project.image ? (
                    <div className="h-48">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ) : project.comingSoon ? (
                    <div className="h-48 flex items-center justify-center bg-gradient-to-br from-slate-700 to-slate-800 relative overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-4 left-4 w-8 h-8 border-2 border-primary-400 rounded rotate-45"></div>
                            <div className="absolute top-8 right-8 w-6 h-6 border-2 border-secondary-400 rounded-full"></div>
                            <div className="absolute bottom-6 left-8 w-4 h-4 bg-accent-400 rounded"></div>
                            <div className="absolute bottom-8 right-6 w-10 h-10 border-2 border-primary-400 rounded-lg rotate-12"></div>
                        </div>

                        <div className="text-center z-10">
                            {/* Document Icon */}

                            <div className="text-lg font-semibold text-primary-400 mb-1">Coming Soon</div>

                            {/* Loading Animation */}
                            <div className="mt-4 flex justify-center space-x-1">
                                <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="h-48 flex items-center justify-center">
                        <div className="text-6xl font-bold text-primary-200 select-none">
                            {project.title.charAt(0)}
                        </div>
                    </div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-4">
                        {project.demoUrl && (
                            <motion.a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-dark-800 rounded-full text-dark-200 hover:bg-primary-400 hover:text-dark-900 transition-colors border border-dark-600"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label="View demo"
                            >
                                <Eye className="w-5 h-5" />
                            </motion.a>
                        )}
                        <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-dark-800 rounded-full text-dark-200 hover:bg-primary-400 hover:text-dark-900 transition-colors border border-dark-600"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="View source code"
                        >
                            <Github className="w-5 h-5" />
                        </motion.a>
                    </div>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                    <div className="absolute top-4 left-4">
                        <span className="px-2 py-1 bg-primary-500 text-white text-xs font-medium rounded-full">
                            Featured
                        </span>
                    </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 bg-dark-800/90 text-dark-200 text-xs font-medium rounded-full border border-dark-600">
                        {project.category}
                    </span>
                </div>
            </div>

            {/* Project Content */}
            <div className="p-6">
                {/* Title and Date */}
                <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-dark-50 group-hover:text-primary-400 transition-colors">
                        {project.title}
                    </h3>
                    <div className="flex items-center text-dark-400 text-sm ml-4">
                        <Calendar className="w-4 h-4 mr-1" />
                        {project.date}
                    </div>
                </div>

                {/* Description */}
                <p className="text-dark-300 mb-4 line-clamp-3">
                    {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="px-2 py-1 bg-dark-700 text-dark-200 text-xs font-medium rounded-md hover:bg-primary-400/20 hover:text-primary-400 transition-colors border border-dark-600"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex items-center space-x-4">
                    {project.demoUrl && (
                        <motion.a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-primary-400 hover:text-primary-300 font-medium text-sm transition-colors"
                            whileHover={{ x: 2 }}
                        >
                            <ExternalLink className="w-4 h-4 mr-1" />
                            Live Demo
                        </motion.a>
                    )}
                    <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-dark-300 hover:text-dark-200 font-medium text-sm transition-colors"
                        whileHover={{ x: 2 }}
                    >
                        <Github className="w-4 h-4 mr-1" />
                        Source Code
                    </motion.a>
                </div>
            </div>
        </motion.div>
    ));

    return (
        <section id="projects" className="py-20 bg-dark-900">
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
                        My <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-lg text-dark-300 max-w-2xl mx-auto">
                        Here are some of the projects I&apos;ve worked on. Each one represents a unique challenge and learning experience.
                    </p>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={titleControls}
                    variants={{
                        initial: { opacity: 0, y: 20 },
                        animate: { opacity: 1, y: 0, transition: { delay: 0.3 } }
                    }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {categories.map((category) => (
                        <motion.button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${activeCategory === category
                                ? 'bg-primary-400 text-dark-900 shadow-lg'
                                : 'bg-dark-800 text-dark-200 hover:bg-primary-400/20 hover:text-primary-400 border border-dark-600'
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {category}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard
                            key={`${project.id}-${activeCategory}`}
                            project={project}
                            index={index}
                            isVisible={isLoaded}
                        />
                    ))}
                </div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-12"
                    >
                        <div className="text-dark-500 mb-4">
                            <Tag className="w-16 h-16 mx-auto" />
                        </div>
                        <p className="text-dark-300">No projects found in this category.</p>
                    </motion.div>
                )}

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-16"
                >
                    <p className="text-dark-300 mb-6">
                        Interested in working together or want to see more of my work?
                    </p>
                    <motion.a
                        href="#contact"
                        className="btn-primary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                            e.preventDefault();
                            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        Get In Touch
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;