import React from "react"

import svg from '../horizontal-logo.svg';

import GitHub from '../images/github.svg'
import Linkedin from '../images/linkedin.svg'

import styles from '../styles/navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.navbarWrapper}>
            <img src={svg} alt="logo" className={styles.logo}></img>
            <div className={styles.iconWrapper}>
                <a href="https://github.com/boralbgra" target="_blank" rel="noreferrer">
                    <img src={GitHub} alt="Github" className={styles.icon}></img>
                </a>
                <a href="https://www.linkedin.com/in/boralbgra/" target="_blank" rel="noreferrer">
                    <img src={Linkedin} alt="Linkedin" className={styles.icon}></img>
                </a>
            </div>
        </div>
    )
}

export default Navbar
