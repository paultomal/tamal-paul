import { useEffect, useRef, useState } from 'react';
import { useInView, useAnimation } from 'framer-motion';

/**
 * Custom hook for scroll-triggered animations
 * @param {number} threshold - Intersection threshold (0-1)
 * @param {boolean} triggerOnce - Whether to trigger animation only once
 * @returns {object} - Animation controls and ref
 */
export const useScrollAnimation = (threshold = 0.1, triggerOnce = true) => {
    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref, {
        threshold,
        triggerOnce,
        margin: "-100px 0px"
    });

    useEffect(() => {
        if (inView) {
            controls.start('animate');
        } else if (!triggerOnce) {
            controls.start('initial');
        }
    }, [controls, inView, triggerOnce]);

    return { controls, ref, inView };
};

/**
 * Custom hook for staggered scroll animations
 * @param {number} staggerDelay - Delay between child animations
 * @param {number} threshold - Intersection threshold
 * @returns {object} - Animation controls and ref
 */
export const useStaggeredScrollAnimation = (staggerDelay = 0.1, threshold = 0.1) => {
    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref, {
        threshold,
        triggerOnce: true,
        margin: "-50px 0px"
    });

    useEffect(() => {
        if (inView) {
            controls.start('animate');
        }
    }, [controls, inView]);

    const containerVariants = {
        animate: {
            transition: {
                staggerChildren: staggerDelay,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        initial: { opacity: 0, y: 30 },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return { controls, ref, inView, containerVariants, itemVariants };
};

/**
 * Custom hook for typing animation
 * @param {string} text - Text to animate
 * @param {number} speed - Typing speed in milliseconds
 * @returns {object} - Displayed text and animation state
 */
export const useTypingAnimation = (text, speed = 100) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isComplete, setIsComplete] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, speed);

            return () => clearTimeout(timeout);
        } else {
            setIsComplete(true);
        }
    }, [currentIndex, text, speed]);

    const reset = () => {
        setDisplayedText('');
        setCurrentIndex(0);
        setIsComplete(false);
    };

    return { displayedText, isComplete, reset };
};