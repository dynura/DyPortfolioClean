import React, { useEffect, useRef, useState } from 'react';

export default function ScrollSection({ children, className = '' }) {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            // Toggle visibility state based on whether section is in viewport
            setIsVisible(entry.isIntersecting);
        },
        {
            threshold: 0.15, // Triggers when 15% of the section is visible
            rootMargin: '0px 0px -50px 0px', // Slight offset so transitions feel natural while scrolling
        }
        );

        const currentElement = sectionRef.current;
        if (currentElement) {
        observer.observe(currentElement);
        }

        return () => {
        if (currentElement) {
            observer.unobserve(currentElement);
        }
        };
    }, []);

    return (
        <div
        ref={sectionRef}
        className={`transition-all duration-700 ease-out transform ${
            isVisible
            ? 'opacity-100 translate-y-0 scale-100' // Enter state
            : 'opacity-0 translate-y-12 scale-[0.98]' // Exit/Hidden state
        } ${className}`}
        >
        {children}
        </div>
    );
}