import React from "react";
import styles from "./casestudies.module.css";

const CaseContainer = ({
  imageUrl,
  title,
  description,
}: {
  imageUrl: string;
  title: string;
  description: string;
}) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          {/* render the image */}
          <img src={imageUrl} alt="case study" className={styles.image} />
          {/* render the text overlay */}
          <div className={styles.textoverlay}>
            <hr/>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseContainer;
