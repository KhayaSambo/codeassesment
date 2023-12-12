"use client"
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

//I decided to make the hero component dynamic to make it easier to reuse
const Hero = ({ title, imageUrl, description }:  {
    title: string;
    imageUrl: string;
    description: string; 
}) => {
    const animationRef = useRef(null);
    const descriptionRef = useRef(null);


//Handle animations for description and title on scroll for a parallax effect
    useEffect(() => {
        const animationElement = animationRef.current;
        const descriptionElement = descriptionRef.current;

        const handleScroll = () => {
            const scrollY = window.scrollY;
            gsap.to(animationElement, { y: -scrollY * 0.3, ease: "power1.out" });
            gsap.to(descriptionElement, { y: -scrollY * 0.2, ease: "power1.out" });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
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
