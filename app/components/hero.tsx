import React from 'react';

interface HeroProps {
    title: string;
    imageUrl: string;
    description: string; // Added description property
}

const Hero = ({ title, imageUrl, description }: HeroProps) => {
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
            <h1 style={{ color: 'white', fontSize: '3rem' }}>{title}</h1>
            <p style={{ color: 'white', fontSize: '1.2rem', wordWrap: 'break-word', width:'40vw', margin:'1rem 0rem ' }}>{description}</p> {/* Added description */}
            <a href="#" className="cta">
                View Project
            </a>
        </div>
    );
};

export default Hero;
