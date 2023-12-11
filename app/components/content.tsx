"use client";
import React from "react";
import styles from "./content.module.css";

function Content() {
  return (
    <>
      <div className={styles.container}>
        
        <div className='mini'>
        
            <hr/> What we do
            </div>
        <h1>
          We offer a complete range of bespoke design and development services
          to help you turn your ideas into digital masterpieces
        </h1>

       
        <div className={styles.services}>
          <div className={styles.service}>
            <img src={"/assets/Web Dev Icon.svg"} alt="Web development" />
            <h3>Web development</h3>
            <div className={styles.desc}>
              We use cutting-edge web development technologies to help our
              clients fulfill their business goals through functional, reliable
              solutions.
            </div>
          </div>
          <div className={styles.service}>
            <img src={"/assets/UX Icon.svg"} alt="User experience & design" />
            <h3>User experience & design</h3>
            <div className={styles.desc}>
              Our complete web design services will bring your ideas to life and
              provide you with a sleek, high-performing product that elevates
              your business.
            </div>
          </div>
          <div className={styles.service}>
            <img
              src={"/assets/App Dev Icon.svg"}
              alt="Mobile app development"
            />
            <h3>Mobile app development</h3>
           
            <div className={styles.desc}>
              Our extensive mobile development experience allows us to create
              custom native and cross-platform iOS and Android mobile solutions
              for our clients.
            </div>
          </div>
          <div className={styles.service}>
            <img src={"/assets/icon.svg"} alt="Blockchain solutions" />
            <h3>Blockchain solutions</h3>
            <div className={styles.desc}>
              We conduct market research to determine the optimal
              blockchain-based solutions to help you grow your company and
              achieve your business goals.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
