"use client"
import React, { useEffect, useState, useCallback } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react';

const ImageSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slidersStyles = {
        height: "100%",
        position: "relative",
    };

    const imageSlideStyles = {
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${slides[currentIndex].url})`,
    };

    const leftArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        left: "32px",
        fontSize: "45px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer",
    };

    const rightArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        right: "32px",
        fontSize: "45px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer",
    };

    const dotContainer = {
        display: "flex",
        gap: "1rem",
        justifyContent: "center",
        marginTop: "10px",
    };

    const dotStyles = {
        cursor: "pointer",
    };

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = useCallback(() => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }, [currentIndex, slides.length]);

    const goTOSlides = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    useEffect(() => {
        const timer = setTimeout(goToNext, 5000);
        return () => {
            clearTimeout(timer);
        };
    }, [currentIndex, goToNext]);

    return (
        <div style={slidersStyles}>
            <div style={leftArrowStyles} onClick={goToPrevious}>
                <ArrowLeft fontSize={60} />
            </div>
            <div style={rightArrowStyles} onClick={goToNext}>
                <ArrowRight />
            </div>
            <div style={imageSlideStyles}></div>

            <div style={dotContainer}>
                {slides.map((slide, slideIndex) => (
                    <div
                        style={dotStyles}
                        key={slideIndex}
                        onClick={() => goTOSlides(slideIndex)}
                    >
                        ⚫
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;
