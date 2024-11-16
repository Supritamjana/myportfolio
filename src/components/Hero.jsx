import React from 'react'
import styles from '../css/Hero.module.css'
import profilePic from '../../assets/anime-aesthetic.jpg'
import 'animate.css';
import TypeWritter from './TypeWritter';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={`${styles.description} animate__animated animate__backInLeft animate__slow`}>
        <h1>Hi! I'm Supritam Jana</h1>
        <p><TypeWritter/></p>
        <a href='mailto:supritam.jana2023@gmail.com' className='ContactBtn'>Contact Me</a>
      </div>
      <div className={`${styles.image}`}>
          <div className={`${styles.imageContainer}`}>
            <img src={profilePic} alt="Profile Picture" />
          </div>
      </div>
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  )
}

export default Hero
