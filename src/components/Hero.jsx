import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, ArrowRight, Code, Sparkles, Zap } from 'lucide-react';

const Hero = () => {
    const name = "Tamal Paul";
    const role = "Software Developer";
    const description = "Passionate about creating innovative solutions with modern technologies";

    const handleScrollToAbout = () => {
        const aboutSection = document.querySelector('#about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = '/TamalPaulResume.pdf';
        link.download = 'TamalPaul_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // Enhanced name animation
    const nameVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const letterVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.8
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 200
            }
        }
    };

    // Java, SQL, Spring Boot code snippets
    const codeSnippets = [
        '@SpringBootApplication',
        'public class Application {',
        '@RestController',
        '@GetMapping("/api/users")',
        'SELECT * FROM users;',
        'INSERT INTO projects',
        '@Autowired',
        'private UserService service;',
        'public ResponseEntity<>',
        'try { connection.close(); }',
        'catch (SQLException e) {}',
        '@Entity @Table',
        'JpaRepository<User, Long>',
        'Optional<User> findById',
        'List<Project> projects',
        'CREATE TABLE users (',
        'PRIMARY KEY (id),',
        'FOREIGN KEY (user_id)',
        'JOIN projects p ON',
        'WHERE status = "active"',
        'ORDER BY created_date',
        'GROUP BY category',
        'HAVING COUNT(*) > 5'
    ];

    // Programming symbols
    const symbols = ['@', '$', '#', '&', '*', '+', '=', '<', '>', '{', '}', '(', ')', ';', ':', '|', 'λ', '∞', '∑', '∆', '∇', '∈', '∀', '∃'];



    // Typing animation
    const [typedText, setTypedText] = React.useState('');
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const typingMessages = [
        'Building scalable Java applications...',
        'Designing efficient SQL databases...',
        'Creating Spring Boot microservices...',
        'Developing full-stack solutions...',
        'Optimizing database performance...',
        'Implementing REST APIs...'
    ];

    React.useEffect(() => {
        const message = typingMessages[currentIndex];
        let timeout;

        if (typedText.length < message.length) {
            timeout = setTimeout(() => {
                setTypedText(message.slice(0, typedText.length + 1));
            }, 60);
        } else {
            timeout = setTimeout(() => {
                setTypedText('');
                setCurrentIndex((prev) => (prev + 1) % typingMessages.length);
            }, 2000);
        }

        return () => clearTimeout(timeout);
    }, [typedText, currentIndex, typingMessages]);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Main gradient orbs */}
                <motion.div
                    className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-primary-400/25 to-accent-400/25 rounded-full mix-blend-screen filter blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, 360],
                        x: [0, 20, 0],
                        y: [0, -20, 0]
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-secondary-400/25 to-primary-400/25 rounded-full mix-blend-screen filter blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [360, 0],
                        x: [0, -20, 0],
                        y: [0, 20, 0]
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-accent-400/15 to-secondary-400/15 rounded-full mix-blend-screen filter blur-2xl"
                    animate={{
                        scale: [0.8, 1.1, 0.8],
                        rotate: [0, -360],
                        x: [-50, 50, -50],
                        y: [-30, 30, -30]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />



                {/* Floating code snippets */}
                {codeSnippets.slice(0, 8).map((snippet, index) => (
                    <motion.div
                        key={index}
                        className="absolute text-secondary-400/25 text-sm font-mono select-none whitespace-nowrap"
                        style={{
                            left: `${5 + (index * 12)}%`,
                            top: `${20 + (index * 8)}%`
                        }}
                        animate={{
                            y: [0, -12, 0],
                            x: [0, 5, 0],
                            opacity: [0.2, 0.4, 0.2],
                        }}
                        transition={{
                            duration: 6 + index * 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 1
                        }}
                    >
                        {snippet}
                    </motion.div>
                ))}

                {/* Programming symbols */}
                {symbols.slice(0, 12).map((symbol, index) => (
                    <motion.div
                        key={index}
                        className="absolute text-accent-400/30 text-xl font-mono font-bold select-none"
                        style={{
                            left: `${10 + (index * 7)}%`,
                            top: `${25 + (index * 5)}%`
                        }}
                        animate={{
                            y: [0, -10, 0],
                            rotate: [0, 15, 0],
                            opacity: [0.3, 0.6, 0.3],
                            scale: [1, 1.1, 1]
                        }}
                        transition={{
                            duration: 4 + index * 0.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.5
                        }}
                    >
                        {symbol}
                    </motion.div>
                ))}

                {/* Static code blocks */}
                <motion.div
                    className="absolute top-20 right-10 text-secondary-400/20 text-xs font-mono select-none"
                    animate={{
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >

                </motion.div>

                <motion.div
                    className="absolute bottom-32 left-10 text-primary-400/30 text-sm font-mono select-none"
                    animate={{
                        opacity: [0.3, 0.6, 0.3],
                        y: [0, -5, 0]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                >


                </motion.div>

                {/* Code compilation animation */}
                <motion.div
                    className="absolute top-1/4 left-5 text-accent-400/30 text-sm font-mono select-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.6, 0] }}
                    transition={{ duration: 10, repeat: Infinity, delay: 2 }}
                >
                    <motion.div
                        animate={{ opacity: [0, 1, 1, 0] }}
                        transition={{ duration: 2.5, delay: 0, repeat: Infinity, repeatDelay: 7.5 }}
                    >
                        Compiling Java...
                    </motion.div>
                    <motion.div
                        animate={{ opacity: [0, 1, 1, 0] }}
                        transition={{ duration: 2.5, delay: 2.5, repeat: Infinity, repeatDelay: 7.5 }}
                    >
                        ████████████ 100%
                    </motion.div>
                    <motion.div
                        animate={{ opacity: [0, 1, 1, 0] }}
                        transition={{ duration: 2.5, delay: 5, repeat: Infinity, repeatDelay: 7.5 }}
                    >
                        ✅ Build successful!
                    </motion.div>
                </motion.div>

                {/* API calls animation */}
                <motion.div
                    className="absolute top-1/3 right-1/4 text-primary-400/30 text-sm font-mono select-none"
                    animate={{ opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 6, repeat: Infinity, delay: 1 }}
                >
                    <motion.div
                        animate={{
                            opacity: [0, 1, 0],
                            x: [0, 10, 0]
                        }}
                        transition={{ duration: 5, repeat: Infinity }}
                    >
                        GET /api/users → 200 ✅
                    </motion.div>
                    <motion.div
                        animate={{
                            opacity: [0, 1, 0],
                            x: [0, 10, 0]
                        }}
                        transition={{ duration: 5, repeat: Infinity, delay: 2.5 }}
                    >
                        POST /api/projects → 201 ✅
                    </motion.div>
                    <motion.div
                        animate={{
                            opacity: [0, 1, 0],
                            x: [0, 10, 0]
                        }}
                        transition={{ duration: 5, repeat: Infinity, delay: 1.25 }}
                    >
                        PUT /api/users/123 → 200 ✅
                    </motion.div>
                </motion.div>

                {/* Database operations */}
                <motion.div
                    className="absolute bottom-1/4 right-10 text-secondary-400/30 text-sm font-mono select-none"
                    animate={{ opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 12, repeat: Infinity, delay: 2 }}
                >
                    <motion.div
                        animate={{ opacity: [0, 1, 1, 0] }}
                        transition={{ duration: 3, delay: 0, repeat: Infinity, repeatDelay: 9 }}
                    >
                        Connecting to DB...
                    </motion.div>
                    <motion.div
                        animate={{ opacity: [0, 1, 1, 0] }}
                        transition={{ duration: 3, delay: 3, repeat: Infinity, repeatDelay: 9 }}
                    >
                        Query executed: 0.23ms
                    </motion.div>
                    <motion.div
                        animate={{ opacity: [0, 1, 1, 0] }}
                        transition={{ duration: 3, delay: 6, repeat: Infinity, repeatDelay: 9 }}
                    >
                        📊 Results: 1,247 rows
                    </motion.div>
                </motion.div>


                {/* Network connection lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-5">
                    {[...Array(4)].map((_, index) => (
                        <motion.line
                            key={index}
                            x1={`${25 + index * 20}%`}
                            y1={`${30 + index * 15}%`}
                            x2={`${45 + index * 15}%`}
                            y2={`${50 + index * 10}%`}
                            stroke="url(#gradient)"
                            strokeWidth="1"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{
                                pathLength: [0, 1, 0],
                                opacity: [0, 0.4, 0]
                            }}
                            transition={{
                                duration: 12,
                                repeat: Infinity,
                                delay: index * 3,
                                ease: "easeInOut"
                            }}
                        />
                    ))}
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#38bdf8" />
                            <stop offset="50%" stopColor="#6366f1" />
                            <stop offset="100%" stopColor="#f472b6" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(56, 189, 248, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(56, 189, 248, 0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '50px 50px'
                    }}
                />
            </div>

            <div className="container-custom relative z-10">
                <div className="text-center">


                    {/* Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="mb-8"
                    >
                        <motion.div
                            className="relative w-48 h-56 sm:w-56 sm:h-64 md:w-64 md:h-72 lg:w-72 lg:h-80 mx-auto"
                            whileHover={{ scale: 1.05, y: -5 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            {/* Static border */}
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-400 via-accent-400 to-secondary-400 p-1 rounded-lg">
                                <div className="w-full h-full bg-dark-900 p-1 rounded-lg">
                                    <img
                                        src="/PAULTOMAL.JPG"
                                        alt="Tamal Paul"
                                        className="w-full h-full object-cover shadow-2xl rounded-lg"
                                    />
                                </div>
                            </div>

                            {/* Subtle floating particles around image */}
                            {[...Array(4)].map((_, index) => (
                                <motion.div
                                    key={index}
                                    className="absolute w-1.5 h-1.5 bg-primary-400/40 rounded-full"
                                    style={{
                                        top: `${15 + Math.sin(index * Math.PI / 2) * 70}%`,
                                        left: `${15 + Math.cos(index * Math.PI / 2) * 70}%`,
                                    }}
                                    animate={{
                                        scale: [1, 1.3, 1],
                                        opacity: [0.4, 0.8, 0.4],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        delay: index * 1,
                                        ease: "easeInOut"
                                    }}
                                />
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Greeting */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mb-8"
                    >
                        <motion.span
                            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-400/20 to-accent-400/20 text-primary-400 rounded-full text-sm font-medium border border-primary-400/30 backdrop-blur-sm shadow-lg"
                            whileHover={{ scale: 1.05, y: -2 }}
                        >
                            <Sparkles className="w-4 h-4 mr-2" />
                            👋 Hello, I&apos;m
                        </motion.span>
                    </motion.div>

                    {/* Name with animation */}
                    <motion.div className="relative mb-8">
                        <motion.h1
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-dark-50 relative z-10"
                            variants={nameVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {name.split('').map((char, index) => (
                                <motion.span
                                    key={index}
                                    variants={letterVariants}
                                    className={`inline-block ${char === ' ' ? 'w-4' : ''}`}
                                    whileHover={{
                                        scale: 1.2,
                                        color: "#38bdf8",
                                        textShadow: "0 0 20px rgba(56, 189, 248, 0.5)"
                                    }}
                                >
                                    {char === ' ' ? '\u00A0' : char}
                                </motion.span>
                            ))}
                        </motion.h1>

                        {/* Name glow effect */}
                        <motion.div
                            className="absolute inset-0 text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-primary-400/10 blur-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2, duration: 1 }}
                        >
                            {name}
                        </motion.div>
                    </motion.div>

                    {/* Role */}
                    <motion.div
                        className="relative mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.5 }}
                    >
                        <h2 className="text-xl sm:text-2xl md:text-4xl font-medium gradient-text flex items-center justify-center gap-3">
                            <Code className="w-6 h-6 sm:w-8 sm:h-8" />
                            {role}
                            <Zap className="w-6 h-6 sm:w-8 sm:h-8" />
                        </h2>
                    </motion.div>

                    {/* Description with terminal */}
                    <motion.div
                        className="mb-12 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.8 }}
                    >
                        <p className="text-lg sm:text-xl text-dark-300 mb-6 leading-relaxed">
                            {description}
                        </p>

                        {/* Terminal with typing animation */}
                        <motion.div
                            className="bg-dark-800/60 backdrop-blur-sm border border-dark-600 rounded-lg p-4 font-mono text-sm max-w-lg mx-auto shadow-xl"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 2.2, duration: 0.5 }}
                            whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(56, 189, 248, 0.2)" }}
                        >
                            <div className="flex items-center mb-3">
                                <div className="flex space-x-2">
                                    <motion.div
                                        className="w-3 h-3 bg-red-500 rounded-full"
                                        animate={{ opacity: [0.5, 1, 0.5] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    ></motion.div>
                                    <motion.div
                                        className="w-3 h-3 bg-yellow-500 rounded-full"
                                        animate={{ opacity: [0.5, 1, 0.5] }}
                                        transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                                    ></motion.div>
                                    <motion.div
                                        className="w-3 h-3 bg-green-500 rounded-full"
                                        animate={{ opacity: [0.5, 1, 0.5] }}
                                        transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                                    ></motion.div>
                                </div>
                            </div>
                            <div className="text-primary-400 min-h-[20px]">
                                <span className="text-green-400">$ </span>
                                <span className="text-blue-300">{typedText}</span>
                                <motion.span
                                    className="text-primary-400"
                                    animate={{ opacity: [0, 1, 0] }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                >
                                    |
                                </motion.span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 2.5 }}
                    >
                        <motion.button
                            onClick={handleScrollToAbout}
                            className="btn-primary group"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View My Work
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </motion.button>

                        <motion.button
                            onClick={handleDownloadCV}
                            className="btn-secondary group"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Download className="mr-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                            Download CV
                        </motion.button>
                    </motion.div>

                    {/* Tech Stack */}
                    <motion.div
                        className="flex flex-wrap justify-center gap-4 mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 2.8 }}
                    >
                        {[
                            { name: 'Java', color: 'from-orange-400 to-red-500' },
                            { name: 'Spring Boot', color: 'from-green-400 to-green-600' },
                            { name: 'SQL', color: 'from-blue-400 to-blue-600' },
                            { name: 'JavaScript', color: 'from-yellow-400 to-orange-400' },
                            { name: 'React', color: 'from-blue-400 to-cyan-400' }
                        ].map((tech, index) => (
                            <motion.span
                                key={tech.name}
                                className={`px-4 py-2 bg-gradient-to-r ${tech.color} bg-opacity-10 backdrop-blur-sm border border-dark-600 rounded-full text-sm font-medium text-dark-200 shadow-lg cursor-pointer`}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 3 + index * 0.1 }}
                                whileHover={{
                                    scale: 1.1,
                                    y: -5,
                                    boxShadow: "0 10px 25px rgba(56, 189, 248, 0.3)"
                                }}
                            >
                                {tech.name}
                            </motion.span>
                        ))}
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 3.2 }}
                    >
                        {/* Email */}
                        <motion.div
                            className="flex items-center space-x-2 text-dark-300 hover:text-primary-400 transition-colors"
                            whileHover={{ scale: 1.05, y: -2 }}
                        >
                            <span className="text-lg">📧</span>
                            <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></div>
                            <span className="text-sm font-mono">tamal.paul.42123@gmail.com</span>
                        </motion.div>

                        {/* GitHub - Clickable */}
                        <motion.a
                            href="https://github.com/paultomal"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-dark-300 hover:text-secondary-400 transition-colors cursor-pointer"
                            whileHover={{ scale: 1.05, y: -2 }}
                        >
                            <span className="text-lg">🐙</span>
                            <div className="w-2 h-2 bg-secondary-400 rounded-full animate-pulse"></div>
                            <span className="text-sm font-mono">github.com/paultomal</span>
                        </motion.a>

                        {/* LinkedIn - Clickable */}
                        <motion.a
                            href="https://www.linkedin.com/in/paultamal1/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-dark-300 hover:text-blue-400 transition-colors cursor-pointer"
                            whileHover={{ scale: 1.05, y: -2 }}
                        >
                            <span className="text-lg">💼</span>
                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                            <span className="text-sm font-mono">linkedin.com/in/paultamal1</span>
                        </motion.a>

                        {/* Phone */}
                        <motion.div
                            className="flex items-center space-x-2 text-dark-300 hover:text-accent-400 transition-colors"
                            whileHover={{ scale: 1.05, y: -2 }}
                        >
                            <span className="text-lg">📱</span>
                            <div className="w-2 h-2 bg-accent-400 rounded-full animate-pulse"></div>
                            <span className="text-sm font-mono">+880 1743286902</span>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 3.5 }}
            >
                <motion.button
                    onClick={handleScrollToAbout}
                    className="flex flex-col items-center text-dark-300 hover:text-primary-400 transition-colors group"
                    whileHover={{ scale: 1.1 }}
                    aria-label="Scroll to about section"
                >
                    <span className="text-sm font-medium mb-2 group-hover:text-primary-400 transition-colors">
                        Scroll Down
                    </span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <ChevronDown className="h-6 w-6" />
                    </motion.div>
                </motion.button>
            </motion.div>
        </section>
    );
};

export default Hero;