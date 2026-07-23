// src/components/ProjectDetailModal.jsx
import React from 'react';

export default function ProjectDetailModal({ selectedProject, isClosing, onClose }) {
    if (!selectedProject) return null;

    return (
    <div 
        onClick={onClose}
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md font-sans transition-all duration-400 ease-in-out ${
        isClosing ? 'opacity-0' : 'opacity-100'
        }`}
    >
        <div 
        onClick={(e) => e.stopPropagation()}
        className={`bg-mono-light-base dark:bg-mono-dark-100 text-mono-light-900 dark:text-mono-dark-900 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative text-left border-none animate-modal-open transition-all duration-400 ease-in-out transform ${
            isClosing ? 'scale-95 opacity-0' : ''
        }`}
        >
        <div className="w-full h-44 rounded-2xl mb-6 overflow-hidden bg-mono-light-100 dark:bg-mono-dark-200 shadow-inner">
            <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover" 
            />
        </div>

        <h3 className="text-xl font-bold mb-2 font-sans">{selectedProject.title}</h3>

        <p className="text-xs text-mono-light-600 dark:text-mono-dark-500 mb-6 leading-relaxed font-sans">
            {selectedProject.desc}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-8">
            {selectedProject.tags.map((tag, i) => (
                <span key={i} className="text-[10px] px-3 py-1 rounded-lg bg-mono-light-100 dark:bg-mono-dark-200 font-sans font-semibold">
                {tag}
                </span>
            ))}
        </div>

        <div className="flex gap-3">
            {selectedProject.github && (
                <a 
                href={selectedProject.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex-1 py-3 text-center rounded-2xl bg-mono-light-900 dark:bg-mono-dark-200 text-mono-light-base dark:text-mono-dark-900 font-bold text-xs hover:opacity-90 transition-opacity font-sans shadow-md"
                >
                View Code on GitHub
                </a>
            )}
            <button 
                onClick={onClose}
                className="px-6 py-3 rounded-2xl bg-mono-light-200 dark:bg-mono-dark-300 text-mono-light-900 dark:text-mono-dark-900 font-bold text-xs cursor-pointer hover:opacity-90 transition-opacity font-sans shadow-sm border-none"
            >
                Close
            </button>
            </div>
        </div>
        </div>
    );
}