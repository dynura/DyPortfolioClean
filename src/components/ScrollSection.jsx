import React, { useEffect, useRef, useState } from 'react';

export default function ScrollSection({ id, children, className = '' }) {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            setIsVisible(entry.isIntersecting);
        },
        {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px',
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
            id={id}
            ref={sectionRef}
            className={`scroll-mt-24 transition-all duration-700 ease-out transform ${
                isVisible
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-12 scale-[0.98]'
            } ${className}`}
        >
            {children}
        </div>
    );
}