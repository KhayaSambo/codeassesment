"use client"
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = ({ title, imageUrl, description }:  {
    title: string;
    imageUrl: string;
    description: string; 
}) => {
    const animationRef = useRef(null);
    const descriptionRef = useRef(null);

    useEffect(() => {
        const animationElement = animationRef.current;
        const descriptionElement = descriptionRef.current;

        gsap.from(animationElement, { x: -200, opacity: 0, duration: 1, ease: "ease-in" });
        gsap.to(animationElement, { x: 0, opacity: 1, duration: 1, ease: "ease-in", delay: 1 });
        gsap.from(descriptionElement, { y: 50, opacity: 0, duration: 1, ease: "ease-in", delay: 1 });
        gsap.to(descriptionElement, { y: 0, opacity: 1, duration: 1, ease: "ease-in", delay: 2 });

        return () => {
            gsap.killTweensOf(animationElement);
            gsap.killTweensOf(descriptionElement);
        };
    }, []);

    return (
        <div
            style={{
                backgroundImage: `url("${imageUrl}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '90vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                padding: '5rem',
            }}
        >
            <h1 ref={animationRef} style={{ color: 'white', fontSize: '3rem' }}>
                {title}
            </h1>
            <p ref={descriptionRef} style={{ color: 'white', fontSize: '1.2rem', wordWrap: 'break-word', width:'40vw', margin:'1rem 0rem ' }}>{description}</p> 
            <a href="#" className="btn-primary">
                View Project
            </a>
        </div>
    );
};

export default Hero;
