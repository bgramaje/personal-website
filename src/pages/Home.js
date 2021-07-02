import React from "react"

import "react-circular-progressbar/dist/styles.css";
import styles from '../styles/home.module.css'

import Logo from '../components/Logo'
import Navbar from '../components/Navbar'
import StudiesTimeLine from '../components/StudiesTimeLine'
import WorkTimeLine from '../components/WorkTimeLine'
import LogoSlider from '../components/LogoSlider'
import LatestWorks from '../components/LatestWorks'
import FooterComp from '../components/FooterComp'

const Home = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.sider}></div>
            <div className={styles.mainDiv}>
                <Navbar />
                <div className={styles.homeWrapper}>
                    <div className={styles.bannerHome}>
                        <div>
                            <p className={styles.title} id="CTA_title">
                                Welcome
                            </p>
                            <p className={styles.subtitle}>
                                My name is Borja, graduated in <i>Computer Engineering</i>&nbsp; and <i>Information and Communication Technology</i>. In continuous learning of full-stack and devops fundamentals.
                            </p>
                            <div className={styles.ctaHome}>
                                <p>Contact Me</p>
                            </div>
                        </div>
                        <div className={styles.logo}>
                            <Logo />
                        </div>
                    </div>
                </div>
                <hr className={styles.solidHr}></hr>
                <div className={styles.bannerCoddee}>
                    <p className={styles.titleCoddee}>¡LET'S CODDEE!</p>
                    <p className={styles.subtitleCoddee}>This doble ‘ddee’ its a mix between the word COFFEE and CODE. But for personal tastes, I prefer TEA rather than coffee ;)</p>
                    <p className={styles.subtitleCoddee}>PD: Not all is coffee or tea here, <span className={styles.linkWrapper}>¡Go checkout all my public works <a className={styles.link} href="https://github.com/boralbgra" target="_blank" rel="noreferrer">here</a>!</span></p>
                </div>
                <div className={styles.logoSliderWrapper}>
                    <LogoSlider />
                </div>
                <hr className={styles.solidHr2}></hr>
                <div className={styles.aboutMe}>
                    <WorkTimeLine />
                    <StudiesTimeLine />
                </div>
                <div>
                    <div className={styles.CVbutton}>
                        Download CV
                    </div>
                </div>
                <div>
                    <LatestWorks />
                </div>
                <hr className={styles.solidHr2}></hr>
                <FooterComp />
            </div>
            <div className={styles.sider}></div>
        </div>
    )
}

export default Home
