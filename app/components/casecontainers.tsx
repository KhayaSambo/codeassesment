"use client"
import React, { useEffect, useRef } from "react";
import styles from "./casestudies.module.css";

import gsap from 'gsap';
const CaseContainer = ({
  imageUrl,
  title,
  description,
}: {
  imageUrl: string;
  title: string;
  description: string;
}) => {
  const animationRef = useRef(null);
  const hrRef = useRef(null);
  const descriptionRef = useRef(null);

  //This is the animation for the case study container it works on scroll

  useEffect(() => {
      const animationElement = animationRef.current;
      const hrElement = hrRef.current;
      const descriptionElement = descriptionRef.current;

      const handleScroll = () => {
          const scrollY = window.scrollY;
          gsap.from(animationElement, { y: -scrollY * 0.02, ease: "power1.out" });
          gsap.from(hrElement, { y: -scrollY * 0.03, ease: "power1.out" });
          gsap.from(descriptionElement, { y: -scrollY * 0.01, ease: "power1.out" });
          gsap.to(animationElement, { y: 0, ease: "power1.out" });
          gsap.to(hrElement, { y: 0, ease: "power1.out" });
          gsap.to(descriptionElement, { y: 0, ease: "power1.out" });
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
          window.removeEventListener('scroll', handleScroll);
          gsap.killTweensOf(animationElement);
          gsap.killTweensOf(descriptionElement);
          gsap.killTweensOf(hrElement);
      };
  }, []);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          {/* render the image */}
          <img src={imageUrl} alt="case study" className={styles.image} />
          {/* render the text overlay */}
          <div  className={styles.textoverlay}>
            <hr ref={hrRef}/>
            <h1 ref={animationRef}>{title}</h1>
            <p ref={descriptionRef}>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseContainer;
