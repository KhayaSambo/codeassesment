// React component of the footer
import React from "react";
import styles from "./footer.module.css"; // import the CSS file for styling

function Footer() {
  return (
    <div className={styles.footer}>
      
      <div className={styles.gridContainer}>
 
          
     
        <div className={styles.item1}>
        <div className="heading-tab">
        <hr />
            <span> Contact Us</span>
          </div>
          
          <h1>Have a project in mind? <br />  Let's make it happen</h1>
        </div>
        <div className={styles.item2}>
          22 Street Name, Suburb, 8000, Cape Town, South Africa <br></br>
          +27 21 431 0001 <br></br>
          <a href="" style={{ textDecoration: 'underline' }}>enquirie@website.co.za</a>
        </div>

        <div className={styles.item3}>
          <div>Terms of service </div>
          <div>Privacy Policy</div>
          <div>Impressum</div>
        </div>

        <div className={styles.item4}>
          <div>Facebook </div>
          <div>Instagram</div>
          <div>Twitter</div>
        </div>
        <div className={styles.item5}>
          {" "}
          <div>Github </div>
          <div>LinkedIn </div>
          <div>Teams</div>
        </div>
        <div className={styles.item6}>
          {" "}
          <div>Youtube </div>
          <div> Behance</div>
          <div>Dribble</div>
        </div>
        <div className={styles.item7}>
          <div>Explore open jobs </div>
          <br></br>
          <div>©2000—2023 Company Name</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
