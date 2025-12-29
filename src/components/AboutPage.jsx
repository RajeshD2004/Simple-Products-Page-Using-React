import React from 'react'
import styles from '../components/styles/AboutPage.module.css'
import aboutImage from '../assets/images/AboutImage.png'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import NavBar1 from './NavBars/NavBar1'

function AboutPage() {
  return (
    <>
    <NavBar1/>
    <div className={styles.container}>

      {/* Image */}
      <div className={styles.aboutImage}>
        <img src={aboutImage} alt="About us" />
      </div>

      {/* Content */}
      <div className={styles.aboutContent}>
        <h1>About Us</h1>

        <p>
          Our product is a modern, user-centric digital platform designed to deliver a seamless, fast, and engaging experience across all devices. Built using the latest web technologies, it focuses on performance, scalability, and intuitive design to ensure users can interact effortlessly with every feature.

At its core, the platform emphasizes simplicity without compromising functionality. Every component is carefully designed to reduce complexity, improve accessibility, and provide a clean, visually appealing interface. Whether users are exploring features, managing data, or interacting with content, the experience remains smooth and responsive.

The system is engineered with scalability and reliability in mind. 
        </p>

        <p>
          Our focus is on performance, accessibility, and high-quality design.
        </p>

        {/* Contact Icons */}
        <div className={styles.contactIcons}>
          <div className={styles.iconItem}>
            <FaPhoneAlt />
            <span>+91 82481 03580</span>
          </div>

          <div className={styles.iconItem}>
            <FaEnvelope />
            <span>mycompany@flex.com</span>
          </div>

          <div className={styles.iconItem}>
            <FaMapMarkerAlt />
            <span>Chennai</span>
          </div>
        </div>
      </div>

    </div>
    </>
  )
}

export default AboutPage
