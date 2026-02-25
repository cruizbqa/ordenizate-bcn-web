"use client";

import { useRef, useState, useEffect } from "react";

export function ServicesSlider({ children }: { children: React.ReactNode }) {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [totalSlides, setTotalSlides] = useState(0);

    // Drag to scroll state
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeftStart, setScrollLeftStart] = useState(0);

    useEffect(() => {
        if (sliderRef.current) {
            setTotalSlides(sliderRef.current.children.length);
        }
    }, [children]);

    const handleScroll = () => {
        if (!sliderRef.current) return;
        const scrollPosition = sliderRef.current.scrollLeft;
        // Assume all slides have roughly the same width for calculating index
        const slideWidth = sliderRef.current.scrollWidth / sliderRef.current.children.length;
        const newIndex = Math.round(scrollPosition / slideWidth);
        setActiveIndex(newIndex);
    };

    const scrollToSlide = (index: number) => {
        if (sliderRef.current) {
            const slide = sliderRef.current.children[index] as HTMLElement;
            if (slide) {
                // Obtenemos el contenedor para calcular el centro si queremos, pero con snap-center
                // basta con scrollear el elemento a la vista o usar la posición relativa
                const offsetLeft = slide.offsetLeft;
                const containerPadding = 32; // Aproximado del padding
                sliderRef.current.scrollTo({
                    left: offsetLeft - containerPadding,
                    behavior: "smooth"
                });
            }
        }
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!sliderRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - sliderRef.current.offsetLeft);
        setScrollLeftStart(sliderRef.current.scrollLeft);
        // Prevent default to avoid text selection while dragging
        e.preventDefault();
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !sliderRef.current) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 1.5; // Scroll speed multiplier
        sliderRef.current.scrollLeft = scrollLeftStart - walk;
    };

    return (
        <div className="relative mt-10 w-full">
            <div className="mx-auto w-full max-w-7xl">
                <div
                    ref={sliderRef}
                    onScroll={handleScroll}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    className={`flex overflow-x-auto gap-6 pb-6 px-4 sm:px-6 lg:px-8 -mx-4 sm:-mx-6 lg:-mx-8 ${isDragging ? 'cursor-grabbing snap-none scroll-auto' : 'cursor-grab snap-x snap-mandatory scroll-smooth'
                        }`}
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {children}
                </div>
            </div>

            {/* Indicadores de puntos (Dots) */}
            <div className="flex justify-center gap-3 mt-6">
                {Array.from({ length: totalSlides }).map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => scrollToSlide(idx)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${activeIndex === idx
                            ? "bg-sage-600 w-6"
                            : "bg-gray-300 hover:bg-gray-400"
                            }`}
                        aria-label={`Ir al servicio ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
