// src/components/TechStack.jsx
import React from 'react';
import { techRows } from '../data/portfolioData';

export default function TechStack() {
    return (
        <section id="skills" className="my-20 md:my-20 px-6 font-sans transition-all duration-500">
        <h2 className="text-2xl font-bold mb-8 font-sans">Tools & Technologies</h2>
        
        <div className="flex flex-col gap-6 py-4">
            {techRows.map((row, rIndex) => (
            <div key={rIndex} className="relative w-full overflow-hidden py-1">
                <div className={`animate-carousel-${row.direction} flex gap-4`}>
                {[...row.items, ...row.items, ...row.items, ...row.items].map((tech, tIndex) => (
                    <div key={tIndex} className="flex items-center gap-2 bg-mono-light-100 dark:bg-mono-dark-100 px-4 py-2.5 rounded-xl shadow-xs flex-shrink-0">
                    <span className="text-mono-light-900 dark:text-mono-dark-900">{tech.icon}</span>
                    <span className="text-xs font-semibold font-sans text-mono-light-800 dark:text-mono-dark-800">{tech.name}</span>
                    </div>
                ))}
                </div>
            </div>
            ))}
        </div>
        </section>
    );
}