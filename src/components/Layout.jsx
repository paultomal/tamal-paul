import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Layout = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Education', href: '#education' },
        { name: 'Contact', href: '#contact' }
    ];

    const socialLinks = [
        {
            name: 'GitHub',
            href: 'https://github.com/paultomal',
            icon: Github
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/paultamal1/',
            icon: Linkedin
        },
        {
            name: 'Email',
            href: 'mailto:tamal.paul.42123@gmail.com',
            icon: Mail
        }
    ];

    const handleNavClick = (href) => {
        setIsMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-dark-900">
            {/* Navigation */}
            <motion.nav
                className="fixed top-0 left-0 right-0 z-50 bg-dark-900/80 backdrop-blur-custom border-b border-dark-700"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <div className="container-custom">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <motion.div
                            className="flex-shrink-0"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <button
                                onClick={() => handleNavClick('#home')}
                                className="text-xl font-bold gradient-text hover:opacity-80 transition-opacity"
                            >
                                Tamal Paul
                            </button>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-8">
                                {navItems.map((item) => (
                                    <motion.button
                                        key={item.name}
                                        onClick={() => handleNavClick(item.href)}
                                        className="text-dark-200 hover:text-primary-400 px-3 py-2 text-sm font-medium transition-colors relative group"
                                        whileHover={{ y: -2 }}
                                        whileTap={{ y: 0 }}
                                    >
                                        {item.name}
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-400 group-hover:w-full transition-all duration-300"></span>
                                    </motion.button>
                                ))}
                            </div>
                        </div>

                        {/* Social Links - Desktop */}
                        <div className="hidden md:flex items-center space-x-4">
                            {socialLinks.map((link) => {
                                const Icon = link.icon;
                                return (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-dark-300 hover:text-primary-400 transition-colors"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        aria-label={link.name}
                                    >
                                        <Icon size={20} />
                                    </motion.a>
                                );
                            })}
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <motion.button
                                onClick={toggleMenu}
                                className="text-dark-200 hover:text-primary-400 focus:outline-none focus:text-primary-400 transition-colors"
                                whileTap={{ scale: 0.95 }}
                                aria-label="Toggle menu"
                            >
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </motion.button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <motion.div
                    className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                        opacity: isMenuOpen ? 1 : 0,
                        height: isMenuOpen ? 'auto' : 0
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 bg-dark-900 border-t border-dark-700">
                        {navItems.map((item) => (
                            <motion.button
                                key={item.name}
                                onClick={() => handleNavClick(item.href)}
                                className="block w-full text-left px-3 py-2 text-base font-medium text-dark-200 hover:text-primary-400 hover:bg-dark-800 rounded-md transition-colors"
                                whileHover={{ x: 4 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {item.name}
                            </motion.button>
                        ))}

                        {/* Mobile Social Links */}
                        <div className="flex items-center justify-center space-x-6 pt-4 border-t border-dark-700">
                            {socialLinks.map((link) => {
                                const Icon = link.icon;
                                return (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-dark-300 hover:text-primary-400 transition-colors"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        aria-label={link.name}
                                    >
                                        <Icon size={20} />
                                    </motion.a>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>
            </motion.nav>

            {/* Main Content */}
            <main className="pt-16">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-dark-800 border-t border-dark-700">
                <div className="container-custom py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-dark-300 text-sm mb-4 md:mb-0">
                            © 2024 Tamal Paul. All rights reserved.
                        </div>
                        <div className="flex items-center space-x-6">
                            {socialLinks.map((link) => {
                                const Icon = link.icon;
                                return (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-dark-300 hover:text-primary-400 transition-colors"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        aria-label={link.name}
                                    >
                                        <Icon size={18} />
                                    </motion.a>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;