import React from 'react';
import Image from 'next/image';

export default function  Navbar () {
    return (
        <div className="navbar">
        <div className="logo">
          <Image src="logo.png" alt="Brand logo" />
        </div>
        <ul className="nav-links">
          <li><a href="#">Services</a></li>
          <li><a href="#">Industries</a></li>
          <li><a href="#">Cases</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#" className="cta">Let's Talk</a></li>
        </ul>
      </div>
    );
};

