import React from 'react';
import { X } from 'lucide-react';
import { allProjectsList } from '../data/projects';

export default function ProjectsModal({ isOpen, isClosing, onClose, onSelectProject }) {
    if (!isOpen) return null;

    return (
        <div 
        onClick={onClose}
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md font-sans transition-all duration-400 ease-in-out ${
            isClosing ? 'opacity-0' : 'opacity-100'
        }`}
        >
        <div 
            onClick={(e) => e.stopPropagation()}
            className={`bg-mono-light-base dark:bg-mono-dark-100 text-mono-light-900 dark:text-mono-dark-900 rounded-3xl max-w-3xl w-full p-6 sm:p-8 max-h-[80vh] flex flex-col shadow-2xl relative border-none animate-modal-open transition-all duration-400 ease-in-out transform ${
            isClosing ? 'scale-95 opacity-0' : ''
            }`}
        >
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-4 pb-2 border-b border-mono-light-200 dark:border-mono-dark-200 flex-shrink-0">
            <div>
                <h3 className="text-xl font-bold font-sans">All Projects</h3>
                <p className="text-xs text-mono-light-500 dark:text-mono-dark-500 font-sans">
                Select any project to view its brief description.
                </p>
            </div>
            <button 
                onClick={onClose}
                className="p-2 rounded-full hover:bg-mono-light-100 dark:hover:bg-mono-dark-200 transition-colors cursor-pointer border-none flex-shrink-0"
                aria-label="Close projects modal"
            >
                <X size={20} />
            </button>
            </div>

            {/* Scrollable Project Cards */}
            <div className="overflow-y-auto pr-2 custom-scrollbar flex-1 my-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {allProjectsList.map((proj) => (
                <div 
                    key={proj.id}
                    onClick={() => onSelectProject(proj)}
                    className="p-5 rounded-2xl bg-mono-light-100 dark:bg-mono-dark-200 shadow-sm hover:shadow-lg hover:scale-[1.01] transition-all duration-300 cursor-pointer text-left font-sans"
                >
                    <h4 className="font-bold text-sm mb-1 font-sans">{proj.title}</h4>
                    <p className="text-xs text-mono-light-500 dark:text-mono-dark-500 line-clamp-2 mb-3 font-sans">
                    {proj.desc}
                    </p>
                    <div className="flex flex-wrap gap-1">
                    {proj.tags.map((tag, i) => (
                        <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-mono-light-base dark:bg-mono-dark-100 font-sans shadow-xs">
                        {tag}
                        </span>
                    ))}
                    </div>
                </div>
                ))}
            </div>
            </div>
        </div>
        </div>
    );
}