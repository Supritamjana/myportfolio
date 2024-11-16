import React, { useState } from 'react'
import styles from '../css/Navbar.module.css'
import { IoIosMenu } from "react-icons/io";
import { IconContext } from "react-icons";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  let [menuOpen, setMenuOpen]= useState(false);
  return (
      <nav className={styles.nav}>
        <div className={styles.brand}><a href="/">Portfolio.</a></div>
        <div className={styles.links}>
        <IconContext.Provider value={{ style: { color: 'white', fontSize: '60px' } }}>
          <div className={styles.linkBtn} onClick={()=> setMenuOpen(!menuOpen)}>{menuOpen ? <IoMdClose /> : <IoIosMenu />}</div></IconContext.Provider>
          <ul className={`${styles.menuItems} ${menuOpen && styles.menuopen}`} onClick={()=>setMenuOpen(false)}>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            {/* <li><a href=""></a></li> */}
          </ul>
        </div>
      </nav>
   
  )
} 

export default Navbar
