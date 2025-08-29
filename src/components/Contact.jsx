import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { fadeInUp, fadeInLeft, fadeInRight, hoverScale } from '../utils/animations';

const Contact = () => {
    const { controls: titleControls, ref: titleRef } = useScrollAnimation();
    const { controls: contentControls, ref: contentRef } = useScrollAnimation();
    const { controls: formControls, ref: formRef } = useScrollAnimation();

    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [submitStatus, setSubmitStatus] = React.useState(null);

    const contactInfo = [
        {
            icon: Mail,
            label: 'Email',
            value: 'tamal.paul.42123@gmail.com',
            href: 'mailto:tamal.paul.42123@gmail.com',
            color: 'bg-blue-500'
        },
        {
            icon: Phone,
            label: 'Phone',
            value: '01743286902',
            href: 'tel:01743286902',
            color: 'bg-green-500'
        },
        {
            icon: MapPin,
            label: 'Location',
            value: 'Kuratoli, Kuril, Dhaka',
            href: '',
            color: 'bg-red-500'
        }
    ];

    const socialLinks = [
        {
            name: 'GitHub',
            icon: Github,
            href: 'https://github.com/paultomal',
            color: 'hover:bg-dark-600'
        },
        {
            name: 'LinkedIn',
            icon: Linkedin,
            href: 'https://www.linkedin.com/in/paultamal1/',
            color: 'hover:bg-blue-600'
        },
        {
            name: 'Twitter',
            icon: Twitter,
            href: 'https://x.com/TomalPaul4',
            color: 'hover:bg-blue-400'
        }
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch('https://formspree.io/f/manwkpkn', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20 bg-dark-800">
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
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <p className="text-lg text-dark-300 max-w-2xl mx-auto">
                        I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about technology.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left Column - Contact Info */}
                    <motion.div
                        ref={contentRef}
                        initial="initial"
                        animate={contentControls}
                        variants={fadeInLeft}
                        className="space-y-8"
                    >
                        {/* Contact Information */}
                        <div>
                            <h3 className="text-2xl font-semibold text-dark-50 mb-6">
                                Let&apos;s Connect
                            </h3>
                            <p className="text-dark-300 mb-8 leading-relaxed">
                                Whether you have a project in mind, want to collaborate, or just want to say hello,
                                I&apos;d love to hear from you. Feel free to reach out through any of the channels below.
                            </p>

                            <div className="space-y-4">
                                {contactInfo.map((info, index) => {
                                    const Icon = info.icon;
                                    return (
                                        <motion.a
                                            key={info.label}
                                            href={info.href}
                                            target={info.href.startsWith('http') ? '_blank' : undefined}
                                            rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                            className="flex items-center p-4 bg-dark-700 rounded-xl hover:bg-dark-600 transition-colors group border border-dark-600"
                                            variants={fadeInLeft}
                                            initial="initial"
                                            animate={contentControls}
                                            whileHover="whileHover"
                                            whileTap="whileTap"
                                            transition={{ delay: 0.2 + index * 0.1 }}
                                        >
                                            <div className={`p-3 ${info.color} rounded-lg mr-4 group-hover:scale-110 transition-transform`}>
                                                <Icon className="w-5 h-5 text-white" />
                                            </div>
                                            <div>
                                                <div className="font-medium text-dark-50">{info.label}</div>
                                                <div className="text-dark-300">{info.value}</div>
                                            </div>
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h4 className="text-lg font-semibold text-dark-50 mb-4">
                                Follow Me
                            </h4>
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => {
                                    const Icon = social.icon;
                                    return (
                                        <motion.a
                                            key={social.name}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`p-3 bg-dark-700 rounded-lg text-dark-300 hover:text-white transition-all duration-300 ${social.color} border border-dark-600`}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={contentControls}
                                            variants={{
                                                initial: { opacity: 0, scale: 0.8 },
                                                animate: {
                                                    opacity: 1,
                                                    scale: 1,
                                                    transition: { delay: 0.5 + index * 0.1 }
                                                }
                                            }}
                                            whileHover={{ scale: 1.1, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            aria-label={social.name}
                                        >
                                            <Icon className="w-5 h-5" />
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </div>
                        
                    </motion.div>

                    {/* Right Column - Contact Form */}
                    <motion.div
                        ref={formRef}
                        initial="initial"
                        animate={formControls}
                        variants={fadeInRight}
                    >
                        <div className="card p-8">
                            <h3 className="text-2xl font-semibold text-dark-50 mb-6">
                                Send a Message
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-6" method="POST" action="https://formspree.io/f/manwkpkn">
                                {/* Name Field */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-dark-200 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-dark-600 bg-dark-700 text-dark-50 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-200 placeholder-dark-400"
                                        placeholder="Your full name"
                                    />
                                </div>

                                {/* Email Field */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-dark-200 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-dark-600 bg-dark-700 text-dark-50 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-200 placeholder-dark-400"
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                {/* Subject Field */}
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-dark-200 mb-2">
                                        Subject *
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-dark-600 bg-dark-700 text-dark-50 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-200 placeholder-dark-400"
                                        placeholder="What's this about?"
                                    />
                                </div>

                                {/* Message Field */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-dark-200 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 border border-dark-600 bg-dark-700 text-dark-50 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-200 resize-vertical placeholder-dark-400"
                                        placeholder="Tell me about your project or just say hello..."
                                    />
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full btn-primary ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                                >
                                    {isSubmitting ? (
                                        <div className="flex items-center justify-center">
                                            <div className="w-5 h-5 border-2 border-dark-900 border-t-transparent rounded-full animate-spin mr-2"></div>
                                            Sending...
                                        </div>
                                    ) : (
                                        <div className="flex items-center justify-center">
                                            <Send className="w-5 h-5 mr-2" />
                                            Send Message
                                        </div>
                                    )}
                                </motion.button>

                                {/* Status Messages */}
                                {submitStatus === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400"
                                    >
                                        <div className="flex items-center">
                                            <div className="w-5 h-5 bg-green-500 rounded-full mr-3 flex items-center justify-center">
                                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                            </div>
                                            Thank you! Your message has been sent successfully. I&apos;ll get back to you soon.
                                        </div>
                                    </motion.div>
                                )}

                                {submitStatus === 'error' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400"
                                    >
                                        <div className="flex items-center">
                                            <div className="w-5 h-5 bg-red-500 rounded-full mr-3 flex items-center justify-center">
                                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                            </div>
                                            Sorry, there was an error sending your message. Please try again or contact me directly.
                                        </div>
                                    </motion.div>
                                )}
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;