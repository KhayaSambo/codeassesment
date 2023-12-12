// React component of the footer
import React from "react";
import styles from "./footer.module.css"; // import the CSS file for styling

function Footer() {


  return (
    // This layout was made using a grid to facilitate to the different sized containers 
// The containers are responsive and will change size depending on the screen size
    <div className={styles.footer}>
      <div className={styles.gridContainer}>
        <div className={styles.item1}>
          <div className="heading-tab">
            <hr />
            <span> Contact Us</span>
          </div>

          <h1>
            Have a project in mind? <br /> Let's make it happen
          </h1>
        </div>
        <div className={styles.item2}>
          22 Street Name, Suburb, 8000, Cape Town, South Africa <br></br>
          +27 21 431 0001 <br></br>
          <a href="" style={{ textDecoration: "underline" }}>
            enquirie@website.co.za
          </a>
        </div>

        <div className={styles.item3}>
          <div>Terms of service </div>
          <div>Privacy Policy</div>
          <div>Impressum</div>
        </div>

        <div className={styles.item4}>
          <div>
            <a href="https://www.facebook.com">Facebook</a>
          </div>
          <div>
            <a href="https://www.instagram.com">Instagram</a>
          </div>
          <div>
            <a href="https://www.twitter.com">Twitter</a>
          </div>
        </div>
        <div className={styles.item5}>
          <div>
            <a href="https://www.github.com">Github</a>
          </div>
          <div>
            <a href="https://www.linkedin.com">LinkedIn</a>
          </div>
          <div>
            <a href="https://www.microsoft.com/en-za/microsoft-teams/group-chat-software">Teams</a>
          </div>
        </div>
        <div className={styles.item6}>
          <div>
            <a href="https://www.youtube.com">Youtube</a>
          </div>
          <div>
            <a href="https://www.behance.net">Behance</a>
          </div>
          <div>
            <a href="https://www.dribbble.com">Dribbble</a>
          </div>
        </div>
        
        <div className={styles.item7}>
          <div><a href="">Explore open jobs </a></div>
          <br></br>
          <div>©2000—2023 Company Name</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
