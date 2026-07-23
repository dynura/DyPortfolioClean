import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, Image as ImageIcon, Film } from 'lucide-react';

export default function ProjectDetailModal({ selectedProject, isClosing, onClose }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isZoomed, setIsZoomed] = useState(false);
    const [activeTab, setActiveTab] = useState('photos');

    // Reset states when modal opens or selectedProject changes
    useEffect(() => {
        setCurrentImageIndex(0);
        setIsZoomed(false);
        if (selectedProject?.video && (!selectedProject?.images || selectedProject?.images.length === 0)) {
        setActiveTab('video');
        } else {
        setActiveTab('photos');
        }
    }, [selectedProject]);

    if (!selectedProject) return null;

    const projectImages = selectedProject.images || (selectedProject.image ? [selectedProject.image] : []);
    const hasVideo = Boolean(selectedProject.video);
    const hasPhotos = projectImages.length > 0;

    const handleNextImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % projectImages.length);
    };

    const handlePrevImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? projectImages.length - 1 : prevIndex - 1
        );
    };

    // Only activate zoom when the user actually MOVES their mouse
    const handleMouseMove = () => {
        if (!isZoomed) {
        setIsZoomed(true);
        }
    };

    const currentImage = projectImages[currentImageIndex];

    return (
        <>
        {/* --- FULLSCREEN ZOOM LIGHTBOX --- */}
        <div 
            className={`fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-12 transition-all duration-500 ease-out ${
            isZoomed && activeTab === 'photos'
                ? 'opacity-100 pointer-events-auto bg-black/80 backdrop-blur-xl' 
                : 'opacity-0 pointer-events-none bg-black/0 backdrop-blur-none'
            }`}
        >
            <div 
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-out blur-2xl scale-110 pointer-events-none ${
                isZoomed ? 'opacity-30' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${currentImage})` }}
            />

            <img 
            src={currentImage} 
            alt={`${selectedProject.title} zoomed preview`} 
            onMouseLeave={() => setIsZoomed(false)}
            className={`relative z-10 max-w-[85vw] max-h-[80vh] object-contain rounded-2xl shadow-2xl transition-all duration-500 ease-out transform cursor-zoom-out ${
                isZoomed ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
            }`} 
            />
        </div>

        {/* --- STANDARD MODAL --- */}
        <div 
            onClick={onClose}
            className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md font-sans transition-all duration-400 ease-in-out ${
            isClosing ? 'opacity-0' : 'opacity-100'
            }`}
        >
            <div 
            onClick={(e) => e.stopPropagation()}
            className={`bg-mono-light-base dark:bg-mono-dark-100 text-mono-light-900 dark:text-mono-dark-900 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative text-left border-none animate-modal-open transition-all duration-400 ease-in-out transform ${
                isClosing ? 'scale-95 opacity-0' : ''
            }`}
            >
            {/* --- MEDIA TAB TOGGLE --- */}
            {hasPhotos && hasVideo && (
                <div className="flex bg-mono-light-200 dark:bg-mono-dark-300 p-1 rounded-2xl mb-4 max-w-xs mx-auto">
                <button
                    onClick={() => {
                    setIsZoomed(false);
                    setActiveTab('photos');
                    }}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-xl text-xs font-bold transition-all duration-300 border-none cursor-pointer ${
                    activeTab === 'photos'
                        ? 'bg-mono-light-base dark:bg-mono-dark-100 text-mono-light-900 dark:text-mono-dark-900 shadow-sm'
                        : 'text-mono-light-600 dark:text-mono-dark-500 hover:text-mono-light-900 dark:hover:text-mono-dark-900'
                    }`}
                >
                    <ImageIcon size={14} /> Photos
                </button>
                <button
                    onClick={() => {
                    setIsZoomed(false);
                    setActiveTab('video');
                    }}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-xl text-xs font-bold transition-all duration-300 border-none cursor-pointer ${
                    activeTab === 'video'
                        ? 'bg-mono-light-base dark:bg-mono-dark-100 text-mono-light-900 dark:text-mono-dark-900 shadow-sm'
                        : 'text-mono-light-600 dark:text-mono-dark-500 hover:text-mono-light-900 dark:hover:text-mono-dark-900'
                    }`}
                >
                    <Film size={14} /> Video Demo
                </button>
                </div>
            )}

            {/* --- DISPLAY ACTIVE MEDIA --- */}
            {activeTab === 'photos' && hasPhotos ? (
                <>
                {/* IMAGE CONTAINER (Triggers ONLY on intentional cursor movement) */}
                <div 
                    onMouseMove={handleMouseMove}
                    className="relative z-10 w-full h-52 sm:h-64 rounded-2xl mb-4 overflow-hidden bg-mono-light-200 dark:bg-mono-dark-300 shadow-inner cursor-zoom-in group"
                >
                    <img 
                    src={currentImage} 
                    alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`} 
                    className="w-full h-full object-contain p-1 transition-transform duration-500 group-hover:scale-105" 
                    />

                    <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/50 text-white text-[10px] backdrop-blur-md opacity-80 pointer-events-none transition-opacity duration-300">
                    <Maximize2 size={12} /> Hover to expand
                    </div>

                    {projectImages.length > 1 && (
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md">
                        {projectImages.map((_, i) => (
                        <button
                            key={i}
                            onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndex(i);
                            }}
                            className={`h-1.5 rounded-full transition-all duration-300 border-none cursor-pointer p-0 ${
                            i === currentImageIndex ? 'w-4 bg-white' : 'w-1.5 bg-white/50 hover:bg-white/80'
                            }`}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                        ))}
                    </div>
                    )}
                </div>

                {/* CAROUSEL NAVIGATION CONTROLS */}
                {projectImages.length > 1 && (
                    <div className="flex items-center justify-between mb-4 px-1">
                    <button 
                        onClick={handlePrevImage}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-mono-light-200 dark:bg-mono-dark-200 hover:bg-mono-light-300 dark:hover:bg-mono-dark-300 text-xs font-semibold transition-all duration-200 cursor-pointer border-none shadow-sm"
                    >
                        <ChevronLeft size={16} /> Previous
                    </button>

                    <span className="text-[11px] font-medium opacity-60">
                        {currentImageIndex + 1} of {projectImages.length}
                    </span>

                    <button 
                        onClick={handleNextImage}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-mono-light-200 dark:bg-mono-dark-200 hover:bg-mono-light-300 dark:hover:bg-mono-dark-300 text-xs font-semibold transition-all duration-200 cursor-pointer border-none shadow-sm"
                    >
                        Next <ChevronRight size={16} />
                    </button>
                    </div>
                )}
                </>
            ) : (
                /* VIDEO PLAYER CONTAINER */
                hasVideo && (
                <div className="relative w-full h-52 sm:h-64 rounded-2xl mb-6 overflow-hidden bg-black shadow-inner">
                    <video 
                    src={selectedProject.video} 
                    controls 
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-contain"
                    >
                    Your browser does not support the video tag.
                    </video>
                </div>
                )
            )}

            {/* --- MODAL CONTENT BELOW --- */}
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
        </>
  );
}