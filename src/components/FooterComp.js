import React from 'react'
import Footer from 'rc-footer';

import 'rc-footer/assets/index.css'; // import 'rc-footer/asssets/index.less';
import styles from '../styles/footer.module.css'

import GitHub from '../images/github.svg'
import Linkedin from '../images/linkedin.svg'

const FooterComp = () => {
    return (
        <div>
            <div className={styles.iconWrapper}>
                <div className={styles.linkWrapper}>
                    <a href="https://github.com/boralbgra" target="_blank" rel="noreferrer">
                        <img src={GitHub} alt="Github" className={styles.icon}></img>
                    </a>
                    <p>Github</p>
                </div>
                <div className={styles.linkWrapper}>
                    <a href="https://www.linkedin.com/in/boralbgra/" target="_blank" rel="noreferrer">
                        <img src={Linkedin} alt="Linkedin" className={styles.icon}></img>
                    </a>
                    <p>Linkedin</p>
                </div>
            </div>
            <div>
                <p className={styles.endingTittle}>Made with ❤️ by Borja</p>
            </div>
        </div>
    )
}

export default FooterComp
