import React from "react";
import styles from "./content.module.css";



function Content({ services }: {services: Service[]}) {
  return (
    <>
      <div className='container'>
        <div className='heading-tab'>
          <hr />
          <span> What we do</span>
        </div>
        <h1>
          We offer a complete range of bespoke design and development services
          to help you turn your ideas into digital masterpieces
        </h1>
        <div className={styles.services}>
          {services.map((service, index) => (
            <div className={styles.service} key={index}>
              <img src={service.imgSrc} alt={service.altText} />
              <h3>{service.title}</h3>
              <div className={styles.desc}>{service.description}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Content;
