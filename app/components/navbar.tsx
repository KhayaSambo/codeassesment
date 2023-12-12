import React from "react";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <div className="bg">
        <div className="navbar">
          <div className="logo">
            <Image
              src="assets/logo.svg"
              width={100}
              height={30}
              alt="Brand logo"
            />
          </div>
          <ul className="nav-links">
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Industries</a>
            </li>
            <li>
              <a href="#">Cases</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <a href="#" className="btn-secondary">
            Let's Talk
          </a>
        </div>
      </div>
    </>
  );
}
