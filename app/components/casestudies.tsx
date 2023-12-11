"use client";
import React,  { useState, useEffect } from "react";
import styles from "./casestudies.module.css";
import axios from "axios";
import CaseContainer from "./casecontainers";

function CaseStudies() {
      // create a state variable to store the data from the API
  const [data, setData] = useState(  [  {
    "imageUrl": "Loading",
    "description": "Loading",
    "title": "Loading"
},]);
      // use the useEffect hook to make the API call when the component mounts
  useEffect(() => {
    // use axios to get the data from the link
    axios
      .get("https://socialmediaserver.co.za/challenge")
      .then((response) => {
        console.log(response.data);
        // set the data state with the response data
        setData(response.data);
      })
      .catch((error) => {
        // handle the error
        console.error(error);
      });
  }, []);
  return (
    <>
      <div className="container">
        <div className="mini">
          <hr /> Case Studies
        </div>
        <div className={styles.services}>
            {/* map through the data array and render a CaseContainer for each object */}
            {data.map((item) => {
                return (
                <CaseContainer title={item.title} description={item.description} imageUrl={item.imageUrl} />
                );
            })}
       
   
        </div>
      </div>
    </>
  );
}

export default CaseStudies;
